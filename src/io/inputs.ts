import fs from 'fs';

import dotenv from 'dotenv';
import { hasFinished, isUnfinished } from './finished';
import { TYPE_CONTACTS, convertTypeContacts } from '../types/type-contacts';
dotenv.config(); 

const CONTACTS: string|undefined = process.env.CONTACTS;
if(!CONTACTS) throw Error(`pasta CONTACTS não definida`);

const SHARED: string|undefined = process.env.SHARED;
if(!SHARED) throw Error(`pasta SHARED não definida`);

const INSTAS: string|undefined = process.env.INSTAS;
if(!INSTAS) console.error('\x1b[31m%s\x1b[0m', `variável INSTAS não definida`);

const SCAN_CONTACTS: string|undefined = process.env.SCAN_CONTACTS;
if(SCAN_CONTACTS) console.log('\x1b[43m%s\x1b[0m', `variável SCAN_CONTACTS definida, o processo irá adquirir a pasta com flag incompleto e scan com mais de 10 horas sem atualização se estiver em mãos de outro scrapper`);
if(!SCAN_CONTACTS) console.error('\x1b[31m%s\x1b[0m', `variável SCAN_CONTACTS não definida`);

const LISTS: string|undefined = process.env.LISTS;
if(LISTS) console.log('\x1b[32m', `variável LISTS definida, o arquivo ${LISTS}.txt será carregado`, '\x1b[0m');
if(!LISTS) console.error('\x1b[31m%s\x1b[0m', `variável LISTS não definida`);

//const VERSION: string|undefined = process.env.VERSION;
//if(!VERSION) throw Error(`a variável VERSION não foi definida`);

export function instaToScan(version:string): string[]{
  if(LISTS){
    const LIST_PATH = "./lists/"+LISTS+".txt"
    const list:string = fs.readFileSync(LIST_PATH,{ encoding: 'utf8'});
    return list.split('\n');
  }
  if(SCAN_CONTACTS=="true"){
    const incomplete:string[]=[];
    let sites:string[] = fs.readdirSync(CONTACTS!);
    for(let site of sites){
      if(hasFinished(site)==false && isUnfinished(site)==true){
        incomplete.push(site);
      }
    }
    return incomplete;
  }
  if(INSTAS){
    return INSTAS.split(',');
  }
  let content:string = fs.readFileSync(SHARED+"/inputs/inputs-"+version+".txt", 'utf8');
  let lines = content.split('\n');
  lines = lines.map(line => line.replace("https://www.instagram.com/",""))
  return lines;
}