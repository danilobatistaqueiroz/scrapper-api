import fs from 'fs';

import {nowBr,toISO} from '../util';

import dotenv from 'dotenv';
dotenv.config(); 

const CONTACTS: string|undefined = process.env.CONTACTS;
const SHARED: string|undefined = process.env.SHARED;
const VERSION: string|undefined = process.env.VERSION;

export function appendError(insta:string,error:any,text:string){
  console.error(toISO(), nowBr(), error.message);
  console.error(toISO(), nowBr(), error.stack);
  console.error(toISO(), nowBr(), text);
  fs.appendFileSync(CONTACTS+"/"+insta+"/errors-"+VERSION+".txt",`${toISO()} \t ${nowBr()} \t ${error} \n`,{encoding:'utf-8'});
  fs.appendFileSync(CONTACTS+"/"+insta+"/errors-"+VERSION+".txt",`${toISO()} \t ${nowBr()} \t ${text} \n\n`,{encoding:'utf-8'});
}

export function appendError2(e:Error, msg:string){
  console.log(e.stack);
  console.log(e.name, e.message);
  fs.appendFileSync(SHARED+"/errors/errors-"+VERSION+".txt", toISO() + "\t" + nowBr() + "\t" + e.message + "\n", {encoding:'utf8',flag:'w'})
  fs.appendFileSync(SHARED+"/errors/errors-"+VERSION+".txt", toISO() + "\t" + nowBr() + "\t" + msg + "\n", {encoding:'utf8',flag:'w'})
}

export function appendHttpError(status:number, statusText:string, body:string="", msg:string=""){
  console.error(toISO(), nowBr(), status, statusText, body, msg);
  fs.appendFileSync(SHARED+"/errors/errors-"+VERSION+".txt",`${toISO()} \t ${nowBr()} \t ${status} \t ${statusText} \t ${msg} \n`, {encoding:'utf8',flag:'w'})
  fs.appendFileSync(SHARED+"/errors/errors-"+VERSION+".txt",`${toISO()} \t ${nowBr()} \t ${body} \n\n`, {encoding:'utf8',flag:'w'})
}

export function appendTextError(insta:string,text:string){
  console.error(toISO(), nowBr(), insta, text);
  fs.appendFileSync(CONTACTS+"/"+insta+"/errors-"+VERSION+".txt",`${toISO()} \t ${nowBr()} \t ${text} \n`,{encoding:'utf-8'});
}

export function appendLogError(insta:string,text:string){
  console.error(toISO(), nowBr(), insta, text);
  fs.appendFileSync(CONTACTS+"/"+insta+"/errors-"+VERSION+".txt",`${toISO()} \t ${nowBr()} \t ${text} \n`,{encoding:'utf-8'});
}

export function appendScrapperError(insta:string,scrapper?:string){
  console.error(nowBr(), `o site ${insta} está sendo escaneado por outro scrapper ${scrapper}`);
  fs.appendFileSync(CONTACTS+"/"+insta+"/scrapper-errors-"+VERSION+".txt",`${toISO()} \t ${nowBr()} \t o site ${insta} está sendo escaneado por outro scrapper ${scrapper} \n`,{encoding:'utf-8'});
}

export function appendFetchError(insta:string,body:string,paramMaxId:string){
  fs.appendFileSync(CONTACTS+"/"+insta+"/errors-"+VERSION+".txt",`${toISO()} \t ${nowBr()} \t ${insta} \n`,{encoding:'utf-8'});
  fs.appendFileSync(CONTACTS+"/"+insta+"/errors-"+VERSION+".txt",`${toISO()} \t ${nowBr()} \t ${paramMaxId} \n`,{encoding:'utf-8'});
  fs.appendFileSync(CONTACTS+"/"+insta+"/errors-"+VERSION+".txt",`${toISO()} \t ${nowBr()} \t ${body} \n`,{encoding:'utf-8'});
}

export function appendRescanError(insta:string,text:string){
  console.error(toISO(), nowBr(), insta, text);
  fs.appendFileSync(CONTACTS+"/"+insta+"/rescan-errors-"+VERSION+".txt",`${toISO()} \t ${nowBr()} \t ${insta} \t ${text} \n`,{encoding:'utf-8'});
}

export function appendScrollError(insta:string,type:string,text:string){
  console.error(toISO(), nowBr(), insta, type, text);
  fs.appendFileSync(CONTACTS+"/"+insta+"/scroll-errors-"+VERSION+".txt",`${toISO()} \t ${nowBr()} \t ${insta} \t ${type} \t ${text} \n`,{encoding:'utf-8'});
}