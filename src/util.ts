import { writeConsole } from "./io/logs";

import dotenv from 'dotenv';
dotenv.config(); 

export function diffInHours(now:Date,latestUpdate:Date):number {
  let followMilli = latestUpdate.getTime();
  const nowMilli = now.getTime();
  const millisecondDifference = nowMilli - followMilli!;
  const hoursDifference = millisecondDifference / (1000 * 60 * 60);
  return hoursDifference;
}

export function nowBr():string {
  const dt = new Date();
  let datetime = dt.toLocaleString("br-BR");
  datetime = datetime.replace(' ','T');
  return datetime;
}

export function todayFormattedYYYMMDDHHmmss() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

export function toISO():string {
  const dt = new Date();
  return dt.toISOString()
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function waitThreeSeconds(insta:string=''){
  writeConsole('aguardando 3 segundos',insta);
  await sleep(1000*3);
}

export async function waitFiveSeconds(insta:string=''){
  writeConsole('aguardando 5 segundos',insta);
  await sleep(1000*5);
}

export async function waitTenSeconds(insta:string=''){
  writeConsole('aguardando 10 segundos',insta);
  await sleep(1000*10);
}

export async function waitOneMinute(insta:string=''){
  writeConsole('aguardando 1 minuto',insta);
  await sleep(1000*60);
}

export async function waitThreeMinutes(insta:string=''){
  writeConsole('aguardando 3 minutos',insta);
  await sleep(3000*60);
}

export async function waitFiveMinutes(insta:string=''){
  writeConsole('aguardando 5 minutos',insta);
  await sleep(5000*60);
}

export async function waitTenMinutes(insta:string=''){
  writeConsole('aguardando 10 minutos',insta);
  await sleep(10*1000*60);
}