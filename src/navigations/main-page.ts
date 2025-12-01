import { appendError2, appendFetchError, appendHttpError } from "../io/errors";
import { Headers } from "../types/headers";

export async function callMainPage(headers:Headers,page:string=''){
  console.log(`navegando para ${page}`);
  const response:Response = await fetch(`https://www.instagram.com/${page}`,{
    headers: {
      Cookie: headers.cookie
    }
  });
  console.log(response.status, `navegado para ${page}`);
}

export async function callPhoto(headers:Headers){
  console.log(`navegando para foto`);
  const response:Response = await fetch('https://www.instagram.com/mocidade.carmela7/p/DMJDLJeRYiB/'
  ,{
    headers: {
      Cookie: headers.cookie
    }
  });
  console.log(response.status, `navegado para foto`);
}

export async function callPostPage(headers:Headers,page:string=''){
  console.log(`enviando post para ${page}`);
  let response:Response;
  try{
    response = await fetch(`${page}`,{
      method:'POST',
      body:'jazoest=22776',
      headers: {
        'Cookie': headers.cookie,
        'X-CSRFToken': headers.x_csrf_token,
        'X-IG-WWW-Claim': headers.x_ig_www_claim,
        'X-Web-Session-ID': headers.x_web_session_id,
        'Host': 'www.instagram.com',
        'User-Agent': headers.user_agent,
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'X-IG-App-ID': '936619743392459',
        'X-ASBD-ID': '359341',
        'X-Requested-With': 'XMLHttpRequest',
        'Alt-Used': 'www.instagram.com',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://www.instagram.com',
        'Referer': 'https://www.instagram.com/',
        'X-Instagram-Ajax': '1030418319',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'TE': 'trailers'
      }
    });
    console.log(response.status, `concluido ${page}`);
  } catch (e) {
    appendError2((e as Error), 'erro ao enviar post');
    throw Error('erro ao enviar post');
  }
}

export async function callRandomPage(headers:Headers,p:number): Promise<number> {
  const pages = ['danesh.bash','jacnoblezoune','draklack','dreick.lepen','naspzter','aliscestooper','daitansope'
    ,'dbq.batista','nazsser1000','louganmichigan','danfantonelli08','daneshiul','kenhikken','antonellidan07'
    ,'daniel.hurich','danilo511330','next.dj.yes','clark.marrone','clark.morgaro','danilo20.queiroz20'
    ,'danilo10.queiroz10','danilo1000.batista','vita0mentos','mentor.green'
    ,'morgan.freeman.strickland','michel.russel.petrone','robert.leonard.smith'];
    if(p>pages.length-1){
      p=0;
    }
  const response:Response = await fetch(`https://www.instagram.com/${pages[p]}`,{
    headers: {
      Cookie: headers.cookie
    }
  });
  console.log(response.status, `navegado para ${pages[p]}`);
  return p+1;
}