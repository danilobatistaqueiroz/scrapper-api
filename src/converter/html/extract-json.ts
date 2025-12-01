import fs from 'fs';
import { getPhotoSaveFile } from '../photo/get-photo';
import { generateHtml } from '../html/gera-html';

import dotenv from 'dotenv';
import { convertTypeContacts, TYPE_CONTACTS } from '../../types/type-contacts';
import { User } from '../../types/contacts';
dotenv.config(); 

const SHARED: string|undefined = process.env.SHARED;
if(!SHARED) throw Error(`pasta SHARED não definida`);
const CONTACTS: string|undefined = process.env.CONTACTS;
if(!CONTACTS) throw Error(`pasta CONTACTS não definida`);
const TYPE: string|undefined = process.env.TYPE;
if(!TYPE) throw Error(`variavel TYPE não definida ${TYPE}`);

const type_contacts:TYPE_CONTACTS = convertTypeContacts(TYPE);

function removeDuplicatedUsers(all_users:User[]):User[]{
  const unique_users = all_users.filter((obj, index, self) =>
    index === self.findIndex((o) => o.username === obj.username)
  );
  return unique_users;
}

export async function extract(insta:string,use_excluded:boolean,excluded:string[],next_max_id:number) {
  //console.log(`gerando html para o site ${insta}`);
  let total_excluded:number = 0;
  try {
    const file = CONTACTS+"/"+insta+"/"+TYPE+".json";
    let txt = '';
    if(fs.existsSync(file)){
      txt = fs.readFileSync(file, 'utf8');
    } else {
      txt = '[]';
    }
    const data = JSON.parse(txt);
   
    const all_users:User[]=[];

    if(!fs.existsSync(CONTACTS+"/"+insta+"/"+"photos")){
      fs.mkdirSync(CONTACTS+"/"+insta+"/"+"photos");
    }

    for(let f=0; f<data.length; f++){
      //console.log('f',f);
      const usrs:User[] = [];
      if(!data[f].users){
        continue;
      }
      for(let u=0; u<data[f].users.length; u++){
        if(use_excluded && excluded.includes(data[f].users[u].username)){
          //console.log('\x1b[31m%s\x1b[0m', 'excluido', data[f].users[u].username);
          total_excluded++;
          continue;
        }
        //console.log('u',u, data[f].users[u].username);
        const user:User = new User();
        let photoFile = CONTACTS+"/"+insta+"/photos/"+data[f].users[u].username+".jpg";
        await getPhotoSaveFile(data[f].users[u].profile_pic_url,photoFile);
        user.profile_pic_url = `./photos/${data[f].users[u].username}.jpg`;
        user.full_name = data[f].users[u].full_name;
        user.username = data[f].users[u].username;
        user.is_private = data[f].users[u].is_private;
        usrs.push(user);
        //excluded.push(user.username);
      }
      all_users.push(...usrs);
      //console.log('length',all_users.length);
    }

    const unique_users = removeDuplicatedUsers(all_users);
    const html = await generateHtml(unique_users);
    //let unique_users = all_users; const html = await generateHtml(unique_users);

    fs.writeFileSync(CONTACTS+"/"+insta+"/"+TYPE+".total.excluded.txt", `${total_excluded}`, 'utf8');
    fs.writeFileSync(CONTACTS+"/"+insta+"/"+TYPE+".html", html, 'utf8');
  } catch (err) {
    console.error('Error reading file:', err);
  }
  //console.log(`finalizando geração de html para o site ${insta}, next_max_id: ${next_max_id}, type: ${type_contacts.toString()}`);
}


