import fs from 'fs';
import { appendLog } from './logs';

import { TYPE_CONTACTS } from '../types/type-contacts';

import dotenv from 'dotenv';
dotenv.config(); 

const CONTACTS: string|undefined = process.env.CONTACTS;
const VERSION: string|undefined = process.env.VERSION;

export function createFolder(insta:string){
  if(!fs.existsSync(CONTACTS+'/'+insta)){
    fs.mkdirSync(CONTACTS+'/'+insta);
  }
}

//** TODO: terminar a verificação se é private, unavailable, error_follow */
export function isPrivate(insta:string):boolean{
  return fs.existsSync(CONTACTS+'/'+insta+'/private');
}
export function isUnavailable(insta:string):boolean{
  return fs.existsSync(CONTACTS+'/'+insta+'/unavailable');
}
export function isErrorFollow(insta:string,type:TYPE_CONTACTS):boolean{
  return fs.existsSync(CONTACTS+'/'+insta+'/error_'+type);
}

export function hasColetada(insta:string):boolean{
  let exists:boolean = fs.existsSync(CONTACTS+'/'+insta+'/coletada');
  if(exists) return true;
  exists = fs.existsSync(CONTACTS+'/'+insta+'/coletada.incompleta');
  if(exists) return true;
  exists = fs.existsSync(CONTACTS+'/'+insta+'/coletada.unfinished');
  if(exists) return true;
  return false;
}

export enum FLAG {
  ERROR='error',
  NEXT='command-next',
  NEXT_LARGE_DIFF='command-next-large-diff',
  START_FOLLOWERS='beginning-followers',
  START_FOLLOWING='beginning-following',
  FOLLOWING_END='command-end-following',
  FOLLOWERS_END='command-end-followers',
  ERROR_FOLLOWERS='error-followers',
  ERROR_FOLLOWING='error-following',
  FINISHED='finished',
  RESTRICTED='restricted',
  BEGINNING='beginning'
}
export function flagSite(insta:string,flag:FLAG,description:string,totals:string=''){
  fs.appendFileSync(CONTACTS+'/'+insta+'/'+VERSION,flag.toString()+'\n',{ encoding: 'utf8' });
  let text = description + '\n' + totals
  fs.writeFileSync(CONTACTS+'/'+insta+'/'+flag.toString(),text)
}