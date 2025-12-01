import { jsonToHtml } from "../converter/json-to-html";
import { buildCurl } from "../curl/curl-builder";
import { finishSite, Profile, restartSite, startSite, updateErrorSite, updateStatusSite } from "../io/db-manager";
import { appendError, appendFetchError, appendTextError } from "../io/errors";
import { createFolder } from "../io/folders";
import { convertAndSaveContacts, countContacts, finishFlag, saveTotals, startFlag } from "../io/fs-contacts";
import { appendCatLog, appendLog, writeCatLog } from "../io/logs";
import { flagScrapper } from "../io/scrapper-version";
import { callMainPage, callPhoto, callPostPage, callRandomPage } from "../navigations/main-page";
import { updateScrapperStatus, SCRAPPER_STATUS } from "../scrapper-status/scrapper-status";
import { Headers } from "../types/headers";
import { TYPE_CONTACTS } from "../types/type-contacts";
import { nowBr, waitFiveMinutes, waitFiveSeconds, waitOneMinute } from "../util";
const { execSync } = require('child_process');

export async function navigate(insta:string,headers:Headers,type:TYPE_CONTACTS,userId:string,total_follows:number,next_max_id:number=0,version:string,uuid:string){
  let cntErrors = 0;
  let stoppedByErrors = false;
  const profile:Profile = {name:insta,total_follows:total_follows,finished:false,next_max_id,scrapper:version};
  if(next_max_id==0){
    await startSite(profile);
  } else {
    await restartSite(profile);
  }
  startFlag(insta,type);
  flagScrapper(insta,version);
  let has_more:boolean = true;
  let pageNum = 0;
  let hasSuccess = '';
  while(has_more) {
    await callPhoto(headers);
    await waitFiveSeconds(insta);
    await callMainPage(headers,insta);
    await waitFiveSeconds(insta);
    if(next_max_id>(total_follows+1000)){
      console.error("next_max_id está muito mais extenso do que o total de follows, tem mais de 1000");
      break;
    }
    let param_max_id=`&max_id=${next_max_id}`;
    if(next_max_id==0){
      param_max_id=``;
    }
    try{
      const fetchResult:string = await fetchContacts(insta,userId,headers,param_max_id,type);
      hasSuccess = checkFetchResult(insta,fetchResult);
      if(hasSuccess=='success'){
        has_more = convertAndSaveContacts(insta,type,fetchResult);
      }
      if(hasSuccess=='fail'){
        appendTextError(insta, `o retorno do fetch informa que há algum problema na conta`);
        break;
      }
      if(hasSuccess=='' || hasSuccess=='limit_to_see'){
        appendTextError(insta, `o retorno do fetch não contem users`);
        break;
      }
      cntErrors=0;
    } catch (e) {
      appendError(insta,e, `Ocorreu um erro ao consultar os contatos, next_max_id: ${next_max_id}`);
      cntErrors++;
    }
    await jsonToHtml(true,insta,next_max_id);
    await updateStatusSite(insta,next_max_id,version);
    if(cntErrors>=3){
      stoppedByErrors=true;
      break;
    }
    //await callMainPage(headers);
    //await waitFiveSeconds(insta);
    pageNum = await callRandomPage(headers,pageNum);
    await updateScrapperStatus(SCRAPPER_STATUS.running,uuid);
    await waitFiveMinutes(insta);
    next_max_id+=12;
  }
  if(hasSuccess=='fail' || hasSuccess==''){
    await updateScrapperStatus(SCRAPPER_STATUS.stopped);
    process.abort();
  }
  if(stoppedByErrors==false){
    const totalContacts = countContacts(insta,type);
    saveTotals(insta,type,totalContacts,total_follows);
    await finishSite(insta,(hasSuccess=='limit_to_see'));
    finishFlag(insta,type);
    appendLog(insta,"FINALIZADO!");
  } else {
    await updateErrorSite(insta,version);
    appendTextError(insta,`interrompido por sequencia de erros - next_max_id: ${next_max_id}`);
  }
}

function isValidJSON(text:string) {
  if (typeof text !== 'string' || text.trim().length === 0) {
    return false;
  }
  try {
    JSON.parse(text);
    return true;
  } catch (e) {
    return false;
  }
}

async function fetchContacts(insta:string,userId:string,headers:Headers,paramMaxId:string,type:TYPE_CONTACTS):Promise<string> {
  const command = buildCurl(userId,paramMaxId,headers,type);
  writeCatLog(insta,command);
  let result = null;
  try{
    console.log("iniciando fetch", type.toString())
    result = execSync(command);
    appendCatLog(insta,result);
    console.log("finalizado fetch", result?.toString())
  } catch (e) {
    appendError(insta, e, `Ocorreu um problema na consulta de contatos. ${insta}`);
    appendTextError(insta,result);
    throw Error(`Ocorreu um problema na consulta de contatos. ${insta}`);
  }
  if(!result){
    appendFetchError(insta,"result nulo",paramMaxId);
    throw Error(`Ocorreu algum problema no retorno, veio nulo`);    
  }
  const body = result.toString();
  if(!body){
    appendFetchError(insta,result,paramMaxId);
    throw Error(`Ocorreu algum problema no retorno`);
  }
  const isValid = isValidJSON(body);
  if(!isValid){
    appendFetchError(insta,body,paramMaxId);
    throw Error(`O retorno não é um json válido`);
  }
  return body;
}

function checkFetchResult(insta:string,fetchResult:string):string {
  let result:string = '';
  let message:number = 0;
  message = fetchResult.indexOf(`"message": "checkpoint_required"`);
  if(message>=0){
    appendTextError(insta,"checkpoint_required");
    result="fail";
  }
  message = fetchResult.indexOf("Please wait a few minutes before you try again.");
  if(message>=0){
    appendTextError(insta,"Please wait a few minutes before you try again.");
    result="fail";
  }
  message = fetchResult.indexOf("We limit certain things you can see");
  if(message>=0){
    appendTextError(insta,"You can't see followers or following");
    result="limit_to_see";
  }
  const success:boolean = (fetchResult.indexOf(`full_name`)>0 && fetchResult.indexOf(`username`)>0 && fetchResult.indexOf(`profile_pic_id`)>0)
  if(success) result = 'success';
  return result;
}