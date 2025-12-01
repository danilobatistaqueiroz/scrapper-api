import fs from 'fs';

import { addExcluded, backupExcluded, readExcluded } from "../excluded/excluded";
import { extract } from "./html/extract-json";

import dotenv from 'dotenv';
dotenv.config(); 

const SHARED: string|undefined = process.env.SHARED;
if(!SHARED) throw Error(`pasta SHARED não definida`);
const CONTACTS: string|undefined = process.env.CONTACTS;
if(!CONTACTS) throw Error(`pasta CONTACTS não definida`);
const TYPE: string|undefined = process.env.TYPE;
if(!TYPE) throw Error(`variavel TYPE não definida ${TYPE}`);
const type:string = TYPE.toLowerCase();

const excluded:string[] = readExcluded();

export async function jsonToHtml(use_excluded:boolean,insta:string,next_max_id:number) {
  if(hasFinishedAndHtmlGenerated(insta)){
    console.log(CONTACTS+"/"+insta+"/"+`${type}.finished`);
    console.log(CONTACTS+"/"+insta+"/"+`${type}.html`);
    console.log(insta, 'finalizado e com html gerado')
    return;
  }
  await extract(insta,use_excluded,excluded,next_max_id);
  if(use_excluded){
    const finished = fs.existsSync(CONTACTS+"/"+insta+"/"+`${type}.finished`);
    if(finished){
      const file = CONTACTS+"/"+insta+"/"+type+".json";
      const txt = fs.readFileSync(file, 'utf8');
      const data = JSON.parse(txt);
      let users = [];
      for(let chunck of data){
        for(let user of chunck.users){
          users.push(user.username);
        }
      }
      const appended_excluded = excluded.concat(users);
      addExcluded(appended_excluded);
      backupExcluded();
    }
  }
}



export function hasFinishedAndHtmlGenerated(insta: string) {
  const finished = fs.existsSync(CONTACTS+"/"+insta+"/"+`${type}.finished`);
  const html_generated = fs.existsSync(CONTACTS+"/"+insta+"/"+`${type}.html`);
  if(finished && html_generated){
    return true;
  }
  return false;
}