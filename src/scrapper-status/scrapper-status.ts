import { appendHttpError } from "../io/errors";

const VERSION: string|undefined = process.env.VERSION;

export enum SCRAPPER_STATUS {
  started="started",
  running="running",
  stopped="stopped",
  finished="finished"
}

export async function updateScrapperStatus(status:SCRAPPER_STATUS,uuid:string=''){
    let payload = `{"version":"${VERSION}", "status":"${status}", "uuid":"${uuid}"}`;
    console.log('updateScrapperStatus',payload);
    const response:Response = await fetch(
      `http://localhost:3000/scrapper-status/${VERSION}`,
      {
        method:'PATCH',
        body:payload, 
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
    if(response.status!=200){
      const msg = `Ocorreu um problema ao atualizar o status do scrapper: ${VERSION}, status: ${status}`;
      const responseBody = await response.json();
      appendHttpError(response.status,response.statusText,responseBody,msg);
      process.abort();
    }
}