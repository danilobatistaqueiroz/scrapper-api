import { Page } from "puppeteer";
import { goTo, startBrowsingToUrl } from "./browser/browsing";
import { checkPrivate, checkUnavailable, getDescription, getFullName, getTotalFollowers, getTotalFollowing, getUserId } from "./browser/infos";
import { waitOneMinute, waitTenSeconds, waitThreeSeconds } from "../util";
import { BrowserConfig } from './browser/config';
import { getBrowserConfig, LoginEnum } from "../main/logins";
import { INFOS } from "../types/site-infos";
import { setInfos } from "./set-info";

var child_process = require('child_process');

export async function navigateToInfo(insta: string, login:LoginEnum) {
  await openBrowser(login);
  const page = await navigateTo(login, insta);
  const infos:INFOS = await getPageInfos(page, insta);
  await setInfos(infos);
  browserClose();
  return infos;
}

async function openBrowser(login:LoginEnum){
  console.log(`abrindo o browser`);
  const config:BrowserConfig = await getBrowserConfig(login);
  child_process.spawn("/usr/bin/brave-browser-stable", [`--remote-debugging-port=${config.PORT}`]);
  await waitTenSeconds();
}

function browserClose(){
  console.log(`fechando o browser`);
  const childpidof = child_process.spawnSync("/usr/bin/pidof", ["brave"], { encoding : 'utf8' });
  const pids = childpidof.stdout.split(' ').map((c:string) => c.trim());
  for(let pid of pids){
    child_process.spawnSync("/usr/bin/kill", [pid], { encoding : 'utf8' });
  }
}

export async function navigateTo(login:LoginEnum,site:string): Promise<Page> {
  console.log(`navegando para o site ${site}`);
  const config:BrowserConfig = await getBrowserConfig(login);
  const page:Page = await startBrowsingToUrl(config);
  await waitThreeSeconds();
  await goTo(page,site);
  await waitThreeSeconds();
  return page;
}

export async function getPageInfos(page:Page,site:string): Promise<INFOS> {
  console.log(`consultando as informações do site`);
  const userId:string|undefined = await getUserId(page);
  const totalFollowers:number|undefined = await getTotalFollowers(page);
  const totalFollowing:number|undefined = await getTotalFollowing(page);
  let fullname:string|undefined = await getFullName(page);
  fullname = fullname?.replace(/"/g,' ');
  let description:string|undefined = await getDescription(page);
  description = description?.replace(/"/g,' ');
  let isPrivate:boolean = await checkPrivate(page);
  let isUnavailable:boolean = await checkUnavailable(page);
  if(!userId){
    console.error(`userId inválido: ${userId}`);
    await waitOneMinute();
  }
  if(!totalFollowers){
    console.error(`total de Followers inválido: ${totalFollowers}`);
    await waitOneMinute();
  }
  if(!totalFollowing){
    console.error(`total de Following inválido: ${totalFollowing}`);
    await waitOneMinute();
  }
  const insta:string = site;
  const user_id:string = userId??'';
  const full_name:string = fullname??'';
  const total_following:number = totalFollowing??0;
  const total_followers:number = totalFollowers??0;
  const infos:INFOS = {name:insta,full_name,total_followers,total_following,user_id,private:isPrivate,unavailable:isUnavailable};
  return infos;
}