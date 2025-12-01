import { isFinished, getStarted, listSites } from "../io/db-manager";
import { Follows } from "../types/follows";
import { TYPE_CONTACTS } from "../types/type-contacts";

export type HasScanned = { finished:boolean, next_max_id:number, scrapper?:string, latest_update?:Date};

export async function checkScanned(insta:string,type_contacts:TYPE_CONTACTS):Promise<HasScanned>{
  console.log("checkScanned");
  const data:string = await listSites();
  const sites:Follows[] = JSON.parse(data);
  let started:Follows|null = getStarted(insta,sites);
  if(started){
    console.log(`o scan do site ${insta} já foi iniciado em outra ocasião, para ${type_contacts} e rastreou ${started.next_max_id} ids`);
    console.log('o processo será reiniciado para o site.', `rastreou ${started.next_max_id} ids`);
  }
  let finished = isFinished(insta,sites);
  if(finished){
    console.log(`o scan do site ${insta} já foi finalizado em outra ocasião, para ${type_contacts}`);
    console.log(`o processo está sendo encerrado!`);
    return {finished:true,next_max_id:0};
  }
  return {finished:false,next_max_id:started?.next_max_id??0,scrapper:started?.scrapper,latest_update:started?.latest_update};
}