import { Follows } from "../types/follows";
import { INFOS } from "../types/site-infos";
import { convertTypeContacts, TYPE_CONTACTS } from "../types/type-contacts";
import { nowBr } from "../util";
import { appendHttpError } from "./errors";

import dotenv from 'dotenv';
dotenv.config(); 

const link_contacts:TYPE_CONTACTS = convertTypeContacts(process.env.TYPE_CONTACTS?.toLocaleLowerCase());

export async function getFollowSite(insta:string):Promise<Follows|undefined>{
  const content:string = await listSites();
  const sites:Follows[] = JSON.parse(content);
  const site = sites.find(s => s.name == insta);
  return site;
}

export async function getInfos():Promise<INFOS[]>{
  const response:Response = await fetch("http://localhost:3000/site-infos");
  if(response.ok){
    const sites:INFOS[] = await response.json();
    return sites;
  } else {
    throw Error(`O sistema de infos não está respondendo corretamente!`);
  }
}

export async function getInfo(infos:INFOS[],name:string):Promise<INFOS|null>{
  const info = infos.filter(s => s.name == name);
  if(info.length>0){
    return info[0];
  } else {
    return null;
  }
}

export function getStarted(name:string,sites:Follows[]):Follows|null{
  const site:Follows[] = sites.filter(s => s.name == name);
  if(site.length>0){
    return site[site.length-1];
  } else {
    return null;
  }
}

export function isFinished(name:string,sites:Follows[]):boolean{
  if(sites.filter(s => s.name == name && s.finished == true).length>0){
    return true;
  } else {
    return false;
  }
}

export async function listSites():Promise<string>{
  const response:Response = await fetch("http://localhost:3000/"+link_contacts);
  return response.text();
}

async function getMaxId():Promise<number>{
  const data:string = await listSites();
  const sites:Follows[] = JSON.parse(data);
  const maxId = sites.reduce((max:number, obj:any) => (obj.id > max ? obj.id : max), -Infinity);
  return maxId;
}

export type Profile = {name:string,total_follows:number,next_max_id?:number,finished?:boolean,private?:boolean,unavailable?:boolean,scrapper:string};

export async function startSite(data:Profile){
  console.log('startSite');
  const content:string = await listSites();
  const sites:Follows[] = JSON.parse(content);
  const site = sites.find(s => s.name == data.name);
  if(site){
    await restartSite(data);
  } else if(site==null){
    console.log(`iniciando o site: ${data.name}`);
    const payload:string = JSON.stringify(data);
    const response:Response = await fetch(
      `http://localhost:3000/${link_contacts}`,
      {
        method:'POST',
        body:payload, 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
    if(response.status!=201){
      const msg = `Ocorreu um problema ao inicializar o scan do site ${data.name}`;
      appendHttpError(response.status, await response.json(), msg);
      throw Error(msg);
    }
  }
}

export async function restartSite(data:Profile){
  console.log(`reiniciando o site: ${data.name}`);
  const payload:string = JSON.stringify(data);
  const response:Response = await fetch(
    `http://localhost:3000/${link_contacts}/${data.name}`,
    {
      method:'PATCH',
      body:payload, 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  if(response.status!=200){
    const msg = `Ocorreu um problema ao reinicializar o scan do site ${data.name}`;
    appendHttpError(response.status, await response.json(), msg);
    throw Error(msg);
  }
  console.log('restart concluido', response.status);
}

export async function finishSite(name:string,limitToSee:boolean=false){
  let builder = [];
  builder.push(`"finished":true`);
  if(limitToSee) builder.push(`"limit_to_see":true`);
  let payload = "{" + builder.join(",") + "}";
  const response:Response = await fetch(`http://localhost:3000/${link_contacts}/${name}`,
    {
      method:'PATCH',
      body:payload,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  if(response.status!=200){
    console.error(response.status, response.statusText, response.body);
    throw Error(`Ocorreu um problema ao finalizar o scan do site ${name}`);
  }
}

export async function updateStatusSite(name:string,next_max_id:number,scrapper:string){
  //console.log('updateStatusSite',name,next_max_id,scrapper,link_contacts.toString().toLowerCase());
  try{
    const response:Response = await fetch(`http://localhost:3000/${link_contacts.toString().toLowerCase()}/${name}`,
      {
        method:'PATCH',
        body:JSON.stringify({"next_max_id":next_max_id,"scrapper":scrapper}),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
    if(response.status!=200){
      console.log('erro status code em updateStatusSite',response.status)
      console.log('recuperando o retorno do erro');
      const rerror = await response.json();
      console.error(response.status, response.statusText, rerror);
      throw Error(`Ocorreu um problema ao atualizar o status do scan no site ${name}`);
    }
  } catch (e) {
    console.log('erro de sistema em updateStatusSite')
    console.error(e);
    console.error((e as Error).stack);
    throw Error(`Ocorreu um problema ao atualizar o status do scan no site ${name}`);
  }
  //console.log('finalizado updateStatusSite')
}

export async function updateErrorSite(name:string,scrapper:string){
  try{
    const response:Response = await fetch(`http://localhost:3000/${link_contacts.toString().toLowerCase()}/${name}`,
      {
        method:'PATCH',
        body:JSON.stringify({"nerror_follow":true,"scrapper":scrapper}),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
    if(response.status!=200){
      console.log('recuperando o retorno do erro');
      const rerror = await response.json();
      console.error(response.status, response.statusText, rerror);
      throw Error(`Ocorreu um problema ao atualizar o status do scan no site ${name}`);
    }
  } catch (e) {
    console.error(e);
    console.error((e as Error).stack);
    throw Error(`Ocorreu um problema ao atualizar o status do scan no site ${name}`);
  }
}
