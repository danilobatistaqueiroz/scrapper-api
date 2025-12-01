import fs from 'fs';
import { readExcluded, addExcluded, backupExcluded } from './excluded/excluded';
const CONTACTS = '/home/element/contatos/contacts'
const type='followers'
const TYPE='FOLLOWERS'

const excluded:string[] = readExcluded();

async function jsonToHtml(use_excluded:boolean,insta:string,next_max_id:number) {
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

jsonToHtml(true,'divorciadosevangelic',0);