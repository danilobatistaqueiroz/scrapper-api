import {Page} from 'puppeteer';

export async function getUserId(page:Page): Promise<string|undefined> {
  async function doUserId(page: any): Promise<string|null> {
    return await page?.evaluate(() => {
      let ini = document.body.textContent?.indexOf(`"user_id":`); 
      if(ini){
        let fim = document.body.textContent?.indexOf(`",`,ini);
        const userId = document.body.textContent?.substring(ini+`"user_id":`.length+1,fim);
        return userId;
      }
      return null;
    });
  }
  const userId:string|null|undefined = await doUserId(page);
  return userId??undefined;
}

export async function getTotalFollowers(page:Page): Promise<number|undefined>{
  async function doTotalFollowers(page: any): Promise<string|null> {
    return await page?.evaluate(() => {
      const totalFollow = document.querySelector("a.x1i10hfl.xjbqb8w.x1ejq31n.x18oe1m7.x1sy0etr.xstzfhl.x972fbf.x10w94by.x1qhh985.x14e42zd.x9f619.x1ypdohk.xt0psk2.x3ct3a4.xdj266r.x14z9mp.xat24cr.x1lziwak.xexx8yu.xyri2b.x18d9i69.x1c1uobl.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz.x5n08af.x9n4tj2._a6hd")?.textContent?.replace(` followers`,'').replace(",","");
      return totalFollow;
    });
  }
  let totalFollow:string|null = await doTotalFollowers(page);
  let total:number|null = convertToNumber(totalFollow);
  return total??undefined;
}

export async function getTotalFollowing(page:Page): Promise<number|undefined>{
  async function doTotalFollowing(page: any): Promise<string|null> {
    return await page?.evaluate(() => {
      const totalFollow = document.querySelectorAll("span.x1lliihq.x1plvlek.xryxfnj.x1n2onr6.xyejjpt.x15dsfln.x193iq5w.xeuugli.x1fj9vlw.x13faqbe.x1vvkbs.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.x1i0vuye.xvs91rp.xo1l8bm.x5n08af.x1yc453h.x10wh9bi.xpm28yp.x8viiok.x1o7cslx")[2].textContent?.replace(" following","");
      return totalFollow;
    });
  }
  let totalFollow:string|null = await doTotalFollowing(page);
  let total:number|null = convertToNumber(totalFollow);
  return total??undefined;
}

export async function getFullName(page:Page): Promise<string|undefined> {
  async function doFullName(page: any): Promise<string|null> {
    return await page?.evaluate(() => {
      return document.querySelector("span.x1lliihq.x1plvlek.xryxfnj.x1n2onr6.xyejjpt.x15dsfln.x193iq5w.xeuugli.x1fj9vlw.x13faqbe.x1vvkbs.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.x1i0vuye.xvs91rp.xo1l8bm.x5n08af.x10wh9bi.xpm28yp.x8viiok.x1o7cslx")?.textContent;
    });
  }
  return await doFullName(page)??undefined;
}

export async function getDescription(page:Page):Promise<string|undefined> {
  async function doDescription(page: any): Promise<string|null> {
    return await page?.evaluate(() => {
      if(document.querySelector("section.xqui205 div.html-div.x14z9mp div[role='button']")){
        (document.querySelector("section.xqui205 div.html-div.x14z9mp div[role='button']") as HTMLButtonElement).click(); 
      }
      return document.querySelector("main.x78zum5 header.x11t971q section.xqui205 div.html-div")?.textContent;
    });
  }
  return await doDescription(page)??undefined;
}

export async function checkPrivate(page:Page): Promise<boolean> {
  async function doPrivate(page: any): Promise<boolean> {
    return await page?.evaluate(() => {
      let content = document?.querySelector("body")?.textContent ?? '';
      const i:number|undefined = content.indexOf("This account is private");
      if(!i) return true;
      return (i>-1);
    });
  }
  return await doPrivate(page);
}

export async function checkUnavailable(page:Page): Promise<boolean> {
  async function doUnavailable(page: any): Promise<boolean> {
    return await page?.evaluate(() => {
      const i:number|undefined = document?.querySelector("body")?.textContent?.indexOf("Sorry, this page isn't available");
      if(i && i>-1) return true;
      const j:number|undefined = document?.querySelector("body")?.textContent?.indexOf("Profile isn't available");
      if(j && j>-1) return true;
      return false;
    });
  }
  return await doUnavailable(page);
}

function convertToNumber(totalFollow:string|null):number|null{
  if(!totalFollow){
    return null;
  }
  const m = totalFollow.indexOf("M");
  if(m>-1){
    totalFollow = totalFollow.replace("M","");
    const dot = totalFollow.indexOf(".");
    if(dot==-1){
      totalFollow = totalFollow + "000000";
    } else {
      const len = totalFollow.length-1;
      if(len>-1){
        if(len-dot==1){
          totalFollow = totalFollow.replace(".","")+"00000";
        }
        if(len-dot==2){
          totalFollow = totalFollow.replace(".","")+"0000";
        }
      }
    }
  }
  const k = totalFollow.indexOf("K");
  if(k>-1){
    totalFollow = totalFollow.replace("K","");
    const dot = totalFollow.indexOf(".");
    if(dot==-1){
      totalFollow = totalFollow + "000";
    } else {
      const len = totalFollow.length-1;
      if(len>-1){
        if(len-dot==1){
          totalFollow = totalFollow.replace(".","")+"00";
        }
        if(len-dot==2){
          totalFollow = totalFollow.replace(".","")+"0";
        }
      }
    }
  } else {
    totalFollow = totalFollow.replace(",","");
  }
  return Number(totalFollow);
}
