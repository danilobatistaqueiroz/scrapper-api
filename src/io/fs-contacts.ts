import { appendError } from "./errors";
import fs from 'fs';
import onlyPath from 'path';

import dotenv from 'dotenv';
dotenv.config();

import { TYPE_CONTACTS } from "../types/type-contacts";
import { readExcluded } from "../excluded/excluded";
import { Contacts } from "../types/contacts";
import { appendConsole, writeCatLog } from "./logs";
import { toISO, nowBr } from "../util";

const CONTACTS: string|undefined = process.env.CONTACTS;
if(!CONTACTS) throw Error(`a definição para a pasta CONTACTS não foi configurada.`);
const folderContacts:string = CONTACTS;

export function flagIsPrivate(insta:string){
  fs.writeFileSync(CONTACTS+"/"+insta+"/isprivate",`${toISO()} \t ${nowBr()}`,{encoding:'utf-8'});
}
export function flagIsUnavailable(insta:string){
  fs.writeFileSync(CONTACTS+"/"+insta+"/isunavailable",`${toISO()} \t ${nowBr()}`,{encoding:'utf-8'});
}

export function saveTotals(insta:string,type:TYPE_CONTACTS,totalContacts:number,total_follows:number) {
  fs.writeFileSync(onlyPath.join(folderContacts, insta, `${type}-${type}.totals`), `totalContacts:${totalContacts} - total_follows:${total_follows}`, {encoding:'utf8'});
}

export function finishFlag(insta:string,type:TYPE_CONTACTS) {
  const incomplete = onlyPath.join(folderContacts, insta, `${type}.incomplete`);
  if(fs.existsSync(incomplete)) {
    fs.rmSync(incomplete);
  }
  const finished = onlyPath.join(folderContacts, insta, `${type}.finished`);
  if(fs.existsSync(finished)==false) {
    fs.writeFileSync(finished, `${toISO()} \t ${nowBr()}`, {encoding:'utf8'});
  }
}
export function startFlag(insta:string,type:TYPE_CONTACTS) {
  fs.writeFileSync(onlyPath.join(folderContacts, insta, `${type}.incomplete`), `${toISO()} \t ${nowBr()}`, {encoding:'utf8'});
}

export function convertAndSaveContacts(insta:string,type:TYPE_CONTACTS,fetchResult:string) {
  //console.log('iniciando convertAndSave')
  let has_more:boolean = true;
  try{
    console.log(fetchResult.substring(0,300)); writeCatLog(insta,fetchResult);
    const contacts:Contacts = JSON.parse(fetchResult);
    //console.log('parse do result');
    has_more = contacts.has_more;
    const listOfContacts:Contacts[] = readContacts(insta,type);
    listOfContacts.push(contacts);
    //const listOfContactsToBeSaved = removeExcludedUsers(listOfContacts);
    //updateExcluded(listOfContacts);
    saveContacts(insta,type,listOfContacts);
  } catch (e) {
    const msg = `Erro ao converter o response em Contacts`;
    appendError(insta, e, msg);
    throw Error(msg);
  }
  return has_more;
}

function removeExcludedUsers(listOfContactsScanned: Contacts[]): Contacts[] {
  let listOfExcluded:string[] = readExcluded();
  let listOfContacts:Contacts[]=[];
  listOfContacts = listOfContactsScanned.map(c => {
    c.users = c.users.filter(u => listOfExcluded.indexOf(u.username)==-1);
    return c;
  });
  return listOfContacts;
}

export function countContacts(insta:string,type:TYPE_CONTACTS){
  const list:Contacts[] = readContacts(insta,type);
  let totalUsers = 0;
  for(let c of list){
    if(c.users) totalUsers+=c.users.length;
  }
  return totalUsers;
}

function readContacts(insta:string,type:TYPE_CONTACTS):Contacts[] {
  if(!fs.existsSync(onlyPath.join(folderContacts, insta, `${type}.json`))){
    return [];
  }
  const content:string = fs.readFileSync(onlyPath.join(folderContacts, insta, `${type}.json`), 'utf8');
  //console.log('parsear contatos')
  const contacts = JSON.parse(content);
  //console.log('contatos parseados')
  return contacts;
}

function saveContacts(insta:string,type:TYPE_CONTACTS,listOfContacts:Contacts[]){
  const strToSave = JSON.stringify(listOfContacts);
  //console.log('contatos para string')
  fs.appendFileSync(onlyPath.join(folderContacts, insta, `${type}.json`), strToSave, {encoding:'utf8',flag:'w'});
}
