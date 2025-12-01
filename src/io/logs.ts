import fs from 'fs';

import dotenv from 'dotenv';
dotenv.config(); 

import {nowBr, toISO} from '../util';

const CONTACTS: string|undefined = process.env.CONTACTS;
const VERSION: string|undefined = process.env.VERSION;
const LOGIN: string|undefined = process.env.LOGIN;

export function appendLog(insta:string,text:string){
  console.log(nowBr(), insta, text);
  fs.appendFileSync(CONTACTS+"/"+insta+"/logs-"+VERSION+".txt",`${toISO()} \t ${nowBr()} \t ${insta} \t ${text} \n`,{encoding:'utf-8'});
}

export function appendConsole(text:string){
  console.log(toISO(),'\t',nowBr(), text);
}
export function writeConsole(text:string,insta:string){
  console.log(toISO(),'\t',nowBr(), text, insta, VERSION, LOGIN);
}

export function writeCatLog(insta:string,text:string){
  fs.writeFileSync('./log.txt', `${toISO()} \t ${nowBr()} \t ${insta} \t ${VERSION} \t ${LOGIN} \t ${text} \n`, {encoding: 'utf-8'});
}
export function appendCatLog(insta:string,text:string){
  fs.appendFileSync('./log.txt', `\n\n ${toISO()} \t ${nowBr()} \t ${insta} \t ${VERSION} \t ${LOGIN} \t ${text} \n`, {encoding: 'utf-8'});
}