// import fs from 'fs';
// import { todayFormattedYYYMMDDHHmmss } from '../util';

// import dotenv from 'dotenv';
// import { Contacts, User } from '../types/contacts';
// dotenv.config(); 

// const SHARED: string|undefined = process.env.SHARED;
// if(!SHARED) throw Error(`a variável SHARED não foi configurada!`);
// const EXCLUDED_PATH = `${SHARED}/excluded/excluded.txt`;
// const BACKUP_PATH = `${SHARED}/excluded/backup`;

// function removeOldest(){
//   let files = fs.readdirSync(BACKUP_PATH);
//   let block = files.slice(-30);
//   files.forEach(f => {
//     if(block.includes(f)==false){
//       const s = fs.statSync(`${BACKUP_PATH}/${f}`);
//       const createdTime = new Date(s.ctimeMs).getTime();
//       const today = new Date().getTime();
//       let diffDays = (today - createdTime);
//       diffDays = diffDays/1000/60/60/24;
//       const size = (s.size/1000/1000);
//       if(size>50 && diffDays>30){
//         fs.rmSync(`${BACKUP_PATH}/${f}`);
//       }
//     }
//   })
// }

// export function backupExcluded() {
//   try {
//     removeOldest();
//     const excluded = readExcluded();
//     fs.writeFileSync(`${BACKUP_PATH}/excluded_${todayFormattedYYYMMDDHHmmss()}.bkp`, excluded.join('\n'), {encoding:'utf-8'});
//   } catch (e) {
//     console.error(e,"problema ao tentar fazer backup do arquivo excluded.txt");
//     throw Error("problema ao tentar fazer backup do arquivo excluded.txt");
//   }
// }

// export function addExcluded(excluded:string[]) {
//   try {
//     excluded = [...new Set(excluded)];
//     excluded = excluded.filter(e => e.trim()!='');
//     fs.writeFileSync(EXCLUDED_PATH, excluded.join('\n'), {encoding:'utf-8'});
//   } catch (e) {
//     console.error(e,"problema ao tentar gravar no arquivo excluded.txt");
//     throw Error("problema ao tentar gravar no arquivo excluded.txt");
//   }
// }

// export function readExcluded():string[]{
//   let lines:string[] = [];
//   if(!fs.existsSync(EXCLUDED_PATH)){
//     throw Error("a lista de contatos excluídos não foi encontrada!");
//   }
//   try {
//     const data = fs.readFileSync(EXCLUDED_PATH, {encoding:'utf8',flag:'r'});
//     lines = data.split('\n');
//   } catch (e) {
//     console.error(e,"problema ao tentar ler o arquivo excluded.txt");
//     throw Error("problema ao tentar ler o arquivo excluded.txt");
//   }
//   return lines;
// }

// export function updateExcluded(listOfContactsScanned: Contacts[]) {
//   let arrayOfArrayOfUsersScanned:User[][] = listOfContactsScanned.map(c => c.users);
//   let listOfExcluded:string[] = readExcluded();
//   let usersScanned:User[]=[];
//   usersScanned = usersScanned.concat(...arrayOfArrayOfUsersScanned);
//   const scanned = usersScanned.map(u => u.username);
//   listOfExcluded = listOfExcluded.concat(scanned);
//   listOfExcluded = listOfExcluded.map(e => e.trim()).filter(e => e!='');
//   listOfExcluded = [...new Set(listOfExcluded)];
//   saveExcluded(listOfExcluded);
// }

// function saveExcluded(listOfExcluded:string[]){
//   fs.appendFileSync(EXCLUDED_PATH, listOfExcluded.join('\n'), {encoding:'utf8',flag:'w'});
// }