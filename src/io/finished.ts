import fs from 'fs';
import dotenv from 'dotenv';
import { TYPE_CONTACTS, convertTypeContacts } from '../types/type-contacts';

dotenv.config(); 

const CONTACTS: string|undefined = process.env.CONTACTS;
if(!CONTACTS) throw Error(`pasta CONTACTS não definida`);

const type_contacts:TYPE_CONTACTS = convertTypeContacts(process.env.TYPE_CONTACTS?.toLocaleLowerCase());
const type:string = type_contacts.toString().toLowerCase();

export function hasFinished(insta: string) {
  const finished = fs.existsSync(CONTACTS+"/"+insta+"/"+`${type}.finished`);
  return finished;
}
export function isUnfinished(insta: string) {
  const isUnfinished = fs.existsSync(CONTACTS+"/"+insta+"/"+`${type}.incomplete`);
  return isUnfinished;
}
