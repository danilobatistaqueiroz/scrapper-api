import fs from 'fs';

import dotenv from 'dotenv';
dotenv.config(); 

const CONTACTS: string|undefined = process.env.CONTACTS;

export function flagScrapper(insta:string,scrapper:string){
  fs.appendFileSync(CONTACTS+'/'+insta+'/'+scrapper,'',{ encoding: 'utf8' });
}