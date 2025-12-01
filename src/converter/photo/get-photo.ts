//const img_addr = `https://scontent-bog2-1.cdninstagram.com/v/t51.2885-19/561128922_17934713964095680_791795338843331782_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-bog2-1.cdninstagram.com&_nc_cat=104&_nc_oc=Q6cZ2QH8WQrroR69DFOrIKka0Vkxs37gsnhSiKz3oBAEndUwyf8LtGxXBYWFhGvxwmJvK0Q&_nc_ohc=7E9YQVO7KxUQ7kNvwHkj9cW&_nc_gid=6YsvA7AZP-iumqjj7SXjZQ&edm=APQMUHMBAAAA&ccb=7-5&oh=00_Aff4ck-WbegoCebg8FbUdvtFPPRmD3qkyanCXH3KPbKTVg&oe=68FD7E4D&_nc_sid=6ff7c8`;
import fs from 'fs';
import { writeFile } from 'node:fs/promises';
import { Readable } from 'node:stream';
import { ReadableStream } from 'node:stream/web';

function arrayBufferToBase64(buffer:ArrayBuffer):string {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export async function getPhotoBase64(img_addr:string):Promise<string> {
  const arrayBuffer = await (await fetch(img_addr)).arrayBuffer();
  return arrayBufferToBase64(arrayBuffer);
}

export async function getPhotoSaveFile(url:string,filePath:string){
  if(!fs.existsSync(filePath)){
    try {
      const response = await fetch(url);
      if(!response.ok){
        console.error(response.status, response.statusText);
        const json = await response.json();
        console.error(json);
      }
      let body = response.body;
      if(body){
        await writeFile(filePath, Readable.fromWeb((body as ReadableStream<any>)));
      } else {
        console.error(`não foi possível salvar a imagem ${url} - ${response.status}`)
      }
    } catch (e) {
      const error:Error = (e as Error);
      console.error(error.message, error.name);
      console.error(error.stack);
      console.error(`ocorreu um problema ao requisitar a imagem ${url}`);
      fs.cpSync('/home/element/contatos/callAPI/converter-json-html/default-profile.jpg',filePath);
    }
  }
}