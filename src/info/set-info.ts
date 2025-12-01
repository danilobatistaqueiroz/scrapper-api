import { appendHttpError } from "../io/errors";
import { INFOS } from "../types/site-infos";
import { nowBr } from "../util";

export async function setInfos(infos:INFOS){
  let builder = [];
  builder.push(`"name":"${infos.name}"`);
  if(infos.error){
    let errors = JSON.stringify(infos.error).replace(/"/g,' ').replace(/'/g,' ').replace(/>/g,' ').replace(/</g,' ');
    builder.push(`"error":"${errors}"`);
  } else {
    if(infos.user_id) builder.push(`"user_id":"${infos.user_id}"`);
    if(infos.total_followers) builder.push(`"total_followers":${infos.total_followers}`);
    if(infos.total_following) builder.push(`"total_following":${infos.total_following}`);
    if(infos.full_name) builder.push(`"full_name":"${infos.full_name}"`);
    if(infos.description) builder.push(`"description":"${infos.description}"`);
    if(infos.private) builder.push(`"private":${infos.private}`);
    if(infos.unavailable) builder.push(`"unavailable":${infos.unavailable}`);
  }
  let payload = "{" + builder.join(",") + "}";
  console.log(nowBr(), "setInfos", payload);
  const response:Response = await fetch(
    `http://localhost:3000/site-infos`,
    {
      method:'POST',
      body:payload, 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
  if(response.status!=201){
    const msg = `Ocorreu um problema ao inicializar o scan do site ${infos.name}`;
    const responseBody = await response.json();
    appendHttpError(response.status,response.statusText,responseBody,msg);
  }
}