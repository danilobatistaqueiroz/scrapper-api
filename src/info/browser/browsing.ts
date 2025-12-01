import puppeteer, {Browser, Page} from 'puppeteer';

import dotenv from 'dotenv';
import { BrowserConfig } from './config';
import { appendError2 } from '../../io/errors';
import { waitFiveSeconds } from '../../util';
dotenv.config(); 

export type perfil = {following:Boolean,followers:Boolean,insta:string,rescan:Boolean};

/** start browsing to the url passed by parameter */
export async function startBrowsingToUrl(config:BrowserConfig):Promise<Page> {
  console.log("startBrowsingToUrl");
  const browserURL = 'http://'+config.HOST+':'+config.PORT;
  const browser:Browser = await puppeteer.connect({
    browserURL,
    protocolTimeout: 60000, // 600 seconds, 10min
  });
  //const browser = await puppeteer.launch({headless: true, protocolTimeout:600000});

  let pages:Page[] = await browser.pages();
  let page:Page = pages[0];

  return page;
}

export async function goTo(page:Page,site:string){
  let retries = 0;
  while(retries<3){
    console.log(`retries: ${retries}`);
    try {
      if(retries==0){
        await page.goto('https://www.instagram.com/'+site, {
          waitUntil: 'networkidle0',
          timeout: 60000
        });
      } else {
        await page.reload({
          waitUntil: 'networkidle0',
          timeout: 60000
        });
      }
      break;
    } catch (e) {
      appendError2((e as Error),`Erro ao tentar navegar.`);
      await page.bringToFront();
      await waitFiveSeconds();
      retries++;
    }
  }
}