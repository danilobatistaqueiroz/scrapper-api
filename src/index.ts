import { instaToScan } from "./io/inputs";
import { navigate } from "./main/api-caller";
import { Headers } from "./types/headers";
import { convertTypeContacts, TYPE_CONTACTS } from "./types/type-contacts";
import { checkScanned } from "./main/check-scan";
import { getFollowSite, getInfo, getInfos, listSites, startSite } from "./io/db-manager";
import { INFOS } from "./types/site-infos";
import { appendError, appendScrapperError, appendTextError } from "./io/errors";
import { getHeaders, getVersion, LoginEnum } from "./main/logins";
import { getPageInfos, navigateTo, navigateToInfo } from "./info/navigate-info";
import { diffInHours, waitOneMinute, waitTenMinutes, waitTenSeconds, waitThreeMinutes, waitThreeSeconds } from "./util";
import { backupExcluded } from "./excluded/excluded";
import { jsonToHtml } from "./converter/json-to-html";
import { finishFlag, flagIsPrivate, flagIsUnavailable } from "./io/fs-contacts";

const { randomUUID } = require('crypto');

import { createFolder } from "./io/folders";
import { type } from "os";
import { Follows } from "./types/follows";
import { appendLog } from "./io/logs";
import dotenv from 'dotenv';
import { SCRAPPER_STATUS, updateScrapperStatus } from "./scrapper-status/scrapper-status";
dotenv.config(); 

const type_contacts:TYPE_CONTACTS = convertTypeContacts(process.env.TYPE_CONTACTS?.toLocaleLowerCase());

//const config_login = process.argv[2];
//const config_login = process.env.npm_config_login;
const LOGIN: string|undefined = process.env.LOGIN;
if(!LOGIN){
  throw Error("O login não foi informado!");
}

const login:LoginEnum = LoginEnum[LOGIN as keyof typeof LoginEnum];
console.log(login);

const version:string = getVersion(login);

const sites:string[] = instaToScan(version);

async function start(){
  console.log("iniciando o processo de scrapper", version);
  const uuid = randomUUID();
  await updateScrapperStatus(SCRAPPER_STATUS.started,uuid);
  const infos:INFOS[] = await getInfos();
  for(let insta of sites){
    console.log(`${insta}`);
    if(insta==''){
      continue;
    }
    console.log(`rastreando o site ${insta}`);
    const headers:Headers = getHeaders(login,insta);
    const hasScanned = await checkScanned(insta,type_contacts);
    createFolder(insta);
    if(hasScanned.finished){
      finishFlag(insta,type_contacts);
      console.log(`o site ${insta} já foi rastreado por completo. para o tipo ${type_contacts}`);
      continue;
    }
    if(hasScanned.scrapper && hasScanned.scrapper!=version){
      if(hasScanned.latest_update){
        const diff = diffInHours(new Date(), new Date(hasScanned.latest_update));
        if(diff > 10){
          appendLog(insta, `a última atualização do site por outro scrapper já tem mais de 10 horas ${hasScanned.scrapper}`);
          appendLog(insta, `o scrapper atual vai pegar esse site, e vai continuar o scan`);
        } else {
          appendLog(insta, `outro scrapper está escaneando esse site, e a data da ultima atualização é recente ${hasScanned.scrapper}`);
          appendLog(insta, "o scrapper atual irá escanear outro site");
          continue;
        }
      } else {
        appendLog(insta, `o site não tem a data da ultima atualização e está sendo escaneado por outro scrapper ${hasScanned.scrapper}`);
        appendLog(insta, "o scrapper atual irá escanear outro site");
        continue;
      }
    }
    let info:INFOS|null = await getInfo(infos, insta);
    if(!info){
      appendTextError(insta,`não foi possível consultar informações sobre o site`);
      info = await navigateToInfo(insta, login);
      if(!info){
        continue;
      }
    }
    if(!info?.user_id){
      appendTextError(insta,`userId inválido: ${info?.user_id}`);
      continue;
    }
    let totalFollow:number = 0;
    if(type_contacts==TYPE_CONTACTS.FOLLOWERS){
      if(!info?.total_followers){
        appendTextError(insta,`total de Followers inválido: ${info?.total_followers}`);
        continue;
      }
      totalFollow = info.total_followers;
    }
    if(type_contacts==TYPE_CONTACTS.FOLLOWING){
      if(!info?.total_following){
        appendTextError(insta,`total de Following inválido: ${info?.total_following}`);
        continue;
      }
      totalFollow = info.total_following;
    }
    if(info?.private) {
      appendTextError(insta,`o site é privado ${info?.name}`);
      flagIsPrivate(insta);
      await startSite({name:insta,total_follows:totalFollow,finished:true,private:true,scrapper:version});
      continue;
    }
    if(info?.unavailable) {
      appendTextError(insta,`o site está indisponível ${info?.name}`);
      flagIsUnavailable(insta);
      await startSite({name:insta,total_follows:totalFollow,finished:true,unavailable:true,scrapper:version});
      continue;
    }
    await navigate(insta,headers,type_contacts,info.user_id,totalFollow,hasScanned.next_max_id,version,uuid);
    await waitTenMinutes();
  }
  await updateScrapperStatus(SCRAPPER_STATUS.finished,uuid);
}

const child_process = require('child_process');

async function checkdb(){
  const child_pidof = child_process.spawnSync("/usr/bin/pgrep", ["-a","startdb"], { encoding : 'utf8' });
  if(child_pidof.stdout==null || child_pidof.stdout.length==0){
    console.error("o processo do db não foi iniciado. para iniciar entre na pasta db e execute: ./startdb");
    process.exit();
  }
}

( async () => {
  await checkdb();
  try{
    await start();
  } catch (e) {
    appendError('',e,'ocorreu algum erro no processo')
    await updateScrapperStatus(SCRAPPER_STATUS.stopped);
  }
  backupExcluded();
} )();
