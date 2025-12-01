import { Headers } from "../types/headers";
import { convertTypeContacts, TYPE_CONTACTS } from "../types/type-contacts";

export const type_contacts:TYPE_CONTACTS = convertTypeContacts(process.env.TYPE_CONTACTS?.toLocaleLowerCase());

export enum LoginEnum {
  danilo511330="danilo511330", next="next.dj.yes", clarkmarrone="clark.marrone", clarkmorgaro="clark.morgaro", batista11danilo="batista1.1danilo"
  , vita0mentos="vita0mentos", mentorgreen="mentor.green", danilo20queiroz20="danilo20.queiroz20"
  , danilo10queiroz10="danilo10.queiroz10", danilo1000batista="danilo1000.batista", antonellidan07="antonellidan07"
  , danielhurich="daniel.hurich", danfantonelli08="danfantonelli08", kenhikken="kenhikken", daneshiul="daneshiul"
  , draklack="draklack", drackenlein="dracken.lein", dreicklepen="dreick.lepen"
  , jacnoblezoune="jacnoblezoune", dbqbatista="dbq.batista", daitansope="daitansope", ryuhadouken9="ryu.hadouken9"
  , louganmichigan="louganmichigan", aliscestooper="aliscestooper"
  , daneshbash="danesh.bash", naspzter="naspzter", morganfreemanstrickland="morgan.freeman.strickland", michelrusselpetrone="michel.russel.petrone"
  , robertleonardsmith="robert.leonard.smith"
}

export type BrowserConfig = { HOST:string, PORT:number };

export function getBrowserConfig(login:LoginEnum): BrowserConfig {
  return {HOST:"127.0.0.1", PORT:21221};
}

export function getVersion(login:LoginEnum): string {
  switch(login.toString()) {
    case "danilo511330":
      return "v1";
    case "next.dj.yes":
      return "v2";
    case "clark.marrone":
      return "v3";
    case "clark.morgaro":
      return "v4";
    case "batista1.1danilo":
      return "v5";
    case "vita0mentos":
      return "v6";
    case "mentor.green":
      return "v7";
    case "danilo20.queiroz20":
      return "v8";
    case "danilo10.queiroz10":
      return "v9";
    case "danilo1000.batista":
      return "v10";
    case "antonellidan07":
      return "v11";
    case "daniel.hurich":
      return "v12";
    case "danfantonelli08":
      return "v13";
    case "kenhikken":
      return "v14";
    case "daneshiul":
      return "v15";
    case "jacnoblezoune":
      return "v16";
    case "dbq.batista":
      return "v17";
    case "daitansope":
      return "v18";
    case "ryu.hadouken9":
      return "v19";
    case "danesh.bash":
      return "v20";
    case "draklack":
      return "v21";
    case "dracken.lein":
      return "v22";
    case "dreick.lepen":
      return "v23";
    case "naspzter":
      return "v24";
    case "aliscestooper":
      return "v25";
    case "louganmichigan":
      return "v26";
    case "morgan.freeman.strickland":
      return "v27";
    case "michel.russel.petrone":
      return "v28";
    case "robert.leonard.smith":
      return "v29";
  }
  throw Error("o login informado não confere com nenhuma configuração");
}

export function getHeaders(login:LoginEnum,insta:string): Headers {
  console.log("getHeaders");
  switch(login.toString()) {
      case "danilo511330":
        return {
          version: 'v1',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`datr=lscpaZHm2HcSl6j3sBe0SQT2; ig_did=280A4556-4CB8-4582-BD5C-D9AAB5C69250; wd=1875x906; mid=aSnHlgAEAAFvmrrcnk1LTBZBADiJ; ig_nrcb=1; ps_l=1; ps_n=1; csrftoken=OoLB9efRD5pRETFoaVOliAJgR9txvD1E; ds_user_id=77089262117; sessionid=77089262117%3AibAy4u2rdDwN1W%3A29%3AAYjqjF357fomALmklxtGPNFLB7rregMGekflzdPYnw; rur="NHA\05477089262117\0541795881863:01fe450e9ce4b59022703953a0a2a2a56090db1992a4fb41aff4130ba0fc86fa4e763a2e"`,
          x_csrf_token: 'OoLB9efRD5pRETFoaVOliAJgR9txvD1E',
          x_ig_www_claim: 'hmac.AR3theffZC9TcqBG1z4fX-UjV0-NL49wtALv-XDXszkgKKoI',
          x_web_session_id: 'qkhx7h:20pwzr:flythe',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 OPR/115.0.0.0',
          accept_language: 'en-US,en;q=0.5',
          priority:'',
          sec_ch_ua_full_version_list: '"Chromium";v="130.0.6723.170", "Opera";v="115.0.5322.119", "Not?A_Brand";v="99.0.0.0"',
          sec_ch_ua: '"Chromium";v="130", "Opera";v="115", "Not?A_Brand";v="99"',
          sec_ch_prefers_color_scheme:'light',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:'""',
          sec_ch_ua_platform:'"Linux"',
          sec_ch_ua_platform_version:'"6.8.0"',
          sec_fetch_dest:'empty',
          sec_fetch_mode:'cors',
          sec_fetch_site:'same-origin',
          sec_gpc:''
        }
      case "next.dj.yes":
        return {
          version: 'v2',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`csrftoken=HTCV5EKR2nV_41D6E601Yz; datr=Cs8paYi_dXXHzlWJOzAX2IjO; ig_did=38D7694A-A3C8-408F-8048-156926C1ED8B; wd=1875x906; mid=aSnPCgAEAAHmXfOmIQvABnLQ_VEC; sessionid=77162843425%3AIjLy4mBL6qWoxp%3A4%3AAYhjLC8SDHizZENFpjLgAIw6wvYI4canOdZ6GyhKBg; ds_user_id=77162843425; rur="NCG\05477162843425\0541795883695:01fe3d649d15c4a3ebe121ad0b5e413b95149524522167b229898f49e2f554027732d6cb"`,
          priority: 'u=1, i',
          x_csrf_token: 'HTCV5EKR2nV_41D6E601Yz',
          x_ig_www_claim: 'hmac.AR1BnJiPP9wfgf0JvKf2YYedmQUxeXuLmsS0AZRB6xIsIm-n',
          x_web_session_id: '92rvk5:w6q0wm:9r3a69',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "clark.marrone":
        return {
          version: 'v3',
          accept_language: 'en-US,en;q=0.9,pt;q=0.8',
          cookie: String.raw`datr=U-UlaWF-5KIC67_0cbxR5vGj; ig_did=605F1CED-D5A0-416A-BA2E-956A61930900; wd=1873x905; mid=aSXlUwAEAAG2exNpFHlWK0foktvO; ig_nrcb=1; csrftoken=2Hmuiud7qvJgOrvFVfPum6ffjnLVIBU2; ds_user_id=77201806244; sessionid=77201806244%3AGq8ZOT6J3gNksi%3A25%3AAYj7WkHs7wUFiODdWEBBPwAkpZ7No4A-k6N_8QB2mg; ps_l=1; ps_n=1; rur="NHA\05477201806244\0541795627503:01fed65dd00e966943a2b82dc559f29956ad685c3a93a95ebf399210045328bcdb985b79"`,
          x_csrf_token: '2Hmuiud7qvJgOrvFVfPum6ffjnLVIBU2',
          x_ig_www_claim: 'hmac.AR3j_nDCg99t5tLw7WOfSUlWIOsLCOr1bxgHTNZj0w6BhPwM',
          x_web_session_id: 'pw68kh:ze187u:26gypj',
          priority: 'u=1, i',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          sec_ch_prefers_color_scheme:'dark',
          sec_ch_ua:'"Not)A;Brand";v="8", "Chromium";v="138", "Microsoft Edge";v="138"',
          sec_ch_ua_full_version_list:'"Not)A;Brand";v="8.0.0.0", "Chromium";v="138.0.7204.184", "Microsoft Edge";v="138.0.3351.121"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:'""',
          sec_ch_ua_platform:'"Linux"',
          sec_ch_ua_platform_version:'"6.8.0"',
          sec_fetch_dest:'empty',
          sec_fetch_mode:'cors',
          sec_gpc:'',
          sec_fetch_site:"same-origin",
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0'
        }
      case "clark.morgaro":
        return {
          version: 'v4',
          accept_language: 'en-US,en;q=0.9',
          cookie: String.raw`csrftoken=MXGIaH5tJ_kDNLcjGa4Vlw; datr=Qs8gabpiBuEHfaYmgoqq15le; ig_did=D4CB3B04-ADE4-45A0-A7F9-8479CFFEE74F; mid=aSDPQgAEAAHwzhyJPrGfkXXC6TB-; ig_nrcb=1; ds_user_id=77547047993; wd=1873x905; sessionid=77547047993%3AnI6H36HZ7DqqRL%3A11%3AAYisfq7ZsnWddOrNrMaFnPVIMLlZzPmijjEWMGV25Q; ps_l=1; ps_n=1; rur="NHA\05477547047993\0541795295353:01fecf01426dd9cf14d8dd5909e2224c2184141b2593789ed82960cd97168d0b95a6a856"`,
          x_csrf_token: 'MXGIaH5tJ_kDNLcjGa4Vlw',
          x_ig_www_claim: 'hmac.AR2BhgwqlA4bcG_jfFV4Y36pM3R4_5vKRNbMwErzWO3IC2QR',
          x_web_session_id: 'j8sf35:bxxp4d:o4f42v',
          priority: 'u=1, i',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          sec_ch_prefers_color_scheme:'dark',
          sec_ch_ua:'"Not=A?Brand";v="24", "Chromium";v="140"',
          sec_ch_ua_full_version_list:'"Not=A?Brand";v="24.0.0.0", "Chromium";v="140.0.7339.207"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:'""',
          sec_ch_ua_platform:'"Linux"',
          sec_ch_ua_platform_version:'"6.8.0"',
          sec_fetch_dest:'empty',
          sec_fetch_mode:'cors',
          sec_gpc:'',
          sec_fetch_site:'same-origin',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36'
        }
      case "batista1.1danilo":
        return {
          version: 'v5',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`csrftoken=-ToZuzgS46OJ-cx2esd2yh; datr=gesoadr6GC_ROLyb7XNo16Lc; ig_did=40FAE5AA-817E-4A2D-B43F-7E714319130E; ps_l=1; ps_n=1; wd=1875x906; mid=aSjrgQAEAAEF-NW3s72_z4bByheS; sessionid=78361881121%3AwYyN1pGRqXsPH2%3A26%3AAYiSY2fGS-6vDODNmlC2M9CH_Q8J9hFuEmnNr05cZA; ds_user_id=78361881121; rur="NCG\05478361881121\0541795825547:01fe6b784ce172922ea0b07051bafc449d22db9247e2d2726c82de7f59932a7aec7e6f22"`,
          x_csrf_token: '-ToZuzgS46OJ-cx2esd2yh',
          x_ig_www_claim: 'hmac.AR2rEmVvUCjR43FaQ5aR70z9aOcHmdYjN7V8ssJt1_n0Mq52',
          x_web_session_id: 'qrvysj:9hkyav:ilt5y4',
          priority: 'u=1, i',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "vita0mentos":
        return {
          version: 'v6',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`csrftoken=_3unX1jza_hsMc6-BreoXm; datr=89klaZ4wBhGOKIdKe2bG0WIU; ig_did=77F10FF8-0238-476C-94A7-7DCDA233AD22; wd=1873x905; mid=aSXZ8wAEAAGhFjt2jYO17C4oBObD; sessionid=77969813961%3AwKPqcpSDUgKY1k%3A11%3AAYjWV5YcGyjQCqWab9DDTuZXP6KP-VegXzoWo87TpA; ds_user_id=77969813961; ps_l=1; ps_n=1; rur="LDC\05477969813961\0541795624614:01fe0750a1174359dc9ce8553d219d105f325121712e01e97aa1579d27f0132fc6423d5b"`,
          x_csrf_token: '_3unX1jza_hsMc6-BreoXm',
          x_ig_www_claim: 'hmac.AR1Y0kFLTlBVkcSI7GxGOLV3ldeD6qV72pwJFuRFfkpdsKzU',
          x_web_session_id: 'gjxxig:i0cg7v:y6r7gq',
          priority: 'u=1, i',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "mentor.green":
        return {
          version: 'v7',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`csrftoken=jUXK-UF59D_SK4pByXJahv; datr=yskgaSbIXwP6KFvSysP0ig4F; ig_did=1145C9F4-49D8-4D4F-926C-74D376C8630A; wd=1873x905; mid=aSDJygAEAAGfwarOLBE1j6GPGFtL; sessionid=78148061010%3AdvVUHpzSznpQ0n%3A18%3AAYhIvsPumJTPciKbX4cvWBZTI5o3sSeanC2SUV9M6g; ds_user_id=78148061010; rur="EAG\05478148061010\0541795292899:01fee476edaaf06af5be66c6add5a6dc132711b0ac9e7ff506883a83f7a2307b9808a280"`,
          x_csrf_token: 'jUXK-UF59D_SK4pByXJahv',
          x_ig_www_claim: 'hmac.AR1CmTBYjoW8JeRtTW05RI4aJY-XtHZ59Q48UzUqLyG51XyU',
          x_web_session_id: '51qac0:zq4vic:42zfb7',
          priority: 'u=1, i',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "danilo20.queiroz20":
        return {
          version: 'v8',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`csrftoken=Hl1mspDobvGvW25d4ZBctC; datr=wMggab96rO5RM3Yurn79PjBg; ig_did=A83EBBD6-79E6-4B8A-B1AF-C8E66B69D0A3; wd=1873x905; mid=aSDIwQAEAAEl4h3ubOy2mvxnc3Kr; sessionid=78142911565%3AOdMSsyphzXHLDP%3A20%3AAYg7XqOy63-_N_15yMCREiCiY12N-63i0hjbuX0mnA; ds_user_id=78142911565; rur="NHA\05478142911565\0541795292406:01fe7a660885480b6e58e91845fe917bfd719ef3dd7484d1dae211d523b90137f0ed8dad"`,
          x_csrf_token: 'Hl1mspDobvGvW25d4ZBctC',
          x_ig_www_claim: 'hmac.AR1uLGfLVLl4aolxHIFROAkHV6Tbp21hDk1n4vBr05o2Ynp0',
          x_web_session_id: 'wmmto9:3datj8:tuzcx9',
          priority: 'u=1, i',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "danilo10.queiroz10":
        return {
          version: 'v9',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`datr=yNspaSgAqAIqOjSucO9N_FjR; ig_did=0A0018E0-9A8D-487C-A47F-71110DC7F8C3; wd=1875x906; mid=aSnbyAAEAAHklUFJhHzYXsnVo6nl; ig_nrcb=1; csrftoken=Em3YNi5aOaRSaCMsYcj39BdaR96i7iRf; ds_user_id=78304399078; sessionid=78304399078%3A6Q6N5hvhLzeUQs%3A14%3AAYi0JUiqH_ZVQGyFNMMatGyiT9NuIRoaP7gEwVqQfQ; rur="PRN\05478304399078\0541795887000:01fe61ba6ca17d2c982dc9ea5be8b4ca9e2091417deac14a17d9fecda36de1b19a5929d5"`,
          x_csrf_token: 'Em3YNi5aOaRSaCMsYcj39BdaR96i7iRf',
          x_ig_www_claim: 'hmac.AR14NF2BeSdFtswUP4ptARoTJnuB_DlxTdT99cXIFa4i2fp4',
          x_web_session_id: '752jg7:xhchb8:jzp2iq',
          priority: 'u=1, i',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "danilo1000.batista":
        return {
          version: 'v10',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`csrftoken=4EubMDdLrWQzohuBj50WBH; datr=pt4laRUE4DAG9rh2tgVcYM76; ig_did=78A42C5C-E5D9-4B9A-9842-2D19C1769AF2; wd=1873x905; mid=aSXepgAEAAHV7NjfZ54m4mCFSMkW; sessionid=77975021365%3AiWSJ0Kdt0EfGVv%3A29%3AAYhnaPE9pn86I5rJ4ODs7UK0bjy2yd4qRBcaRe1cdg; ds_user_id=77975021365; rur="NHA\05477975021365\0541795625712:01fe8c5b541daf29da4718a3b602ade071e4f458646ffcc78970d7f584310ce814ca6f43"`,
          priority: 'u=1, i',
          x_csrf_token: '4EubMDdLrWQzohuBj50WBH',
          x_ig_www_claim: 'hmac.AR1oZt4wpIWcIcLM18X4pHL1aTC2lmuVuCfkLWf9eVceIAOU',
          x_web_session_id: 'a5cf75:3aikoy:wzg4z0',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "antonellidan07":
        return {
          version: 'v11',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`csrftoken=DdJh62kltzUiNV8I5-jZE-; datr=l8YgaRxRnQWbBPEliBkGXYlb; ig_did=BA4E958D-01B2-4035-95CA-F75EDB9FE25B; wd=1873x905; mid=aSDGlwAEAAH0hu1ic2o-40JGeL0N; sessionid=78497379733%3A5fQs1GY9DOjCaj%3A19%3AAYikWcIXwNP1eaI3bqRqZfnfOGLCI8jBluZiQ5xqcw; ds_user_id=78497379733; rur="NHA\05478497379733\0541795291807:01fe9f6ff4aeaa8f10f7e10a4ab4e441d265e05a8061e49dbfb9ea29889c7b17a0ee99ac"`,
          priority: 'u=1, i',
          x_csrf_token: 'DdJh62kltzUiNV8I5-jZE-',
          x_ig_www_claim: 'hmac.AR2kBbrWqJfqEDoUS6QKS5QeO2UvmSlwp0KlcPTiNqesJuS9',
          x_web_session_id: '0wf4yr:hx63ti:wz5n14',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "daniel.hurich":
        return {
          version: 'v12',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`ig_did=F1605625-F248-479B-B0E5-62DE26B713A3; datr=trt6aPPbYEHCI17AxBQ4iQOW; ps_l=1; ps_n=1; ig_nrcb=1; mid=aQQORwAEAAELCQPInndpQd7balp3; csrftoken=05bdGl5uY4p2gmZwDGnh9cXzpQKyMUT2; ds_user_id=78366201294; wd=1873x905; sessionid=78366201294%3AOuu1F9X8gnemy5%3A11%3AAYgRNXoSeUkM69USbm0mq4YF01ltNMjBJNnvESlaBg; rur="NHA\05478366201294\0541795273463:01fea65c3c49a7415e8402deafa8a6aed61909fccd61b24b784154371ca99942bb584a8a"`,
          priority: 'u=1, i',
          x_csrf_token: '05bdGl5uY4p2gmZwDGnh9cXzpQKyMUT2',
          x_ig_www_claim: 'hmac.AR3ZbyJphwPmCV5u0F5J3LYfOu-Pgm54yjNWjux6c9pwVNXY',
          x_web_session_id: 'ocdcdl:4ybhyg:gnz6dj',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "danfantonelli08":
        return {
          version: 'v13',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`csrftoken=sMvg1l_MOP0_Zkcx39lipr; datr=oMUgaaoGvt0CVyjDwGDAFmp2; ig_did=A357593F-9736-42A4-9529-001FCD3F38C6; wd=1873x905; mid=aSDFoAAEAAGXRbNZXTdpzj85CppF; sessionid=78536872522%3A0rjjD3yAoCKmIU%3A4%3AAYhi_h_TEHnZsFt8X9G9whu0yNW3YuhzLdNaCpartA; ds_user_id=78536872522; rur="ATG\05478536872522\0541795291593:01fe30a308fda9e4f241f264c1c78a9c60c4496548e643ec62f2c7646ed2f257ac59f815"`,
          priority: 'u=1, i',
          x_csrf_token: 'sMvg1l_MOP0_Zkcx39lipr',
          x_ig_www_claim: 'hmac.AR3t_XgpR356o6ZFGfWHp1Ax8x0BHgFU9MzTvFyn7BpJRZYw',
          x_web_session_id: 'n89cu2:yp2nay:ds41j0',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "kenhikken":
        return {
          version: 'v14',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`csrftoken=Qw9vLPve6b4I6JcuhTODfo; datr=EDcnaQ3uujbQqtukjAsMGVWH; ig_did=E2DFF372-FA9E-4279-993B-A1A5BCA8F7AA; ps_l=1; ps_n=1; wd=1873x905; mid=aSc3EAAEAAET0LD-ycLb4EjIrshJ; sessionid=78363865722%3AFfTvJyeZKb57vK%3A2%3AAYhjQv9YBZRgX-DJnPrm1JcRwnkcBhguX407REEWiw; ds_user_id=78363865722; rur="NHA\05478363865722\0541795713805:01fed318f7308d3364dc27c04c6de1964a4514f6134b2de55298ec5b4b66f4d2937c3511"`,
          priority: 'u=1, i',
          x_csrf_token: 'Qw9vLPve6b4I6JcuhTODfo',
          x_ig_www_claim: 'hmac.AR1sPnK8tuXU1MTIm9VVj-9_80zGHblKN5NVLJNvUO01CLK7',
          x_web_session_id: 'u11blc:phb261:hi2zz3',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "daneshiul":
        return {
          version: 'v15',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`csrftoken=Eu2eohg6oadQIh7WhREYYP; datr=UqMnadsE3ClHhK1NESN6MrBP; ig_did=8C46E189-D5FB-4941-A0F7-FAFF8ED169C7; wd=1873x905; mid=aSejUgAEAAFfwjdW30dyChLhDyat; sessionid=78322487530%3Abc8K2BNXWyBgFh%3A26%3AAYiQSvm9zgI73ZWXakSHLkPBgGlwH4onAJCXT0zjnw; ds_user_id=78322487530; ps_l=1; ps_n=1; rur="RVA\05478322487530\0541795741617:01fe86c909f7591f3f7eab4821022be761d570bb1dd465430b11ca393b8e064fa0172542"`,
          priority: 'u=1, i',
          x_csrf_token: 'Eu2eohg6oadQIh7WhREYYP',
          x_ig_www_claim: 'hmac.AR1ShpjRwIBQqF4cB8_jX2nZK0sW5Ogp3xosngtpUcb486Z-',
          x_web_session_id: 'ciw5ip:qod8fa:uhmhgc',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "jacnoblezoune":
        return {
          version: 'v16',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`csrftoken=8j78ky6hUyWJ_FsovrbKtS; datr=D6UnaaTQwzG-fG7ITWmO3MWb; ig_did=0B315A84-D1D0-43F8-A088-A6927C909561; wd=1873x905; mid=aSelDwAEAAF8OJAqzcIq2LETQRIq; sessionid=78520178840%3AMtmKg06rFsWrLw%3A1%3AAYgGtlSWXoYHHr5dOjV2NHirEAR2x1tg52FsKNJBXA; ds_user_id=78520178840; rur="VLL\05478520178840\0541795742022:01fe26d4cc5dd32f2ad981eff4008a774e986cdc535660c51e30c379ab840af58bda2b56"`,
          priority: 'u=1, i',
          x_csrf_token: '8j78ky6hUyWJ_FsovrbKtS',
          x_ig_www_claim: 'hmac.AR0acyfIEdu48sDL_dX2JiLElU9qgOlilpqiUUXmPDdQBvsx',
          x_web_session_id: 'r57r9m:pa0jbg:1ju7ic',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "dbq.batista":
        return {
          version: 'v17',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`csrftoken=gdEK_IFRvHW-OVI-avoTbQ; datr=22ooaRturOC-pYQ8ifXhGNBP; ig_did=9F6AB243-F1AA-4691-BC23-18C461535BDA; wd=1875x906; mid=aShq2wAEAAEWwfsCvExsKwy8yRFZ; sessionid=78363635879%3A1fVmKu0q4LL3a6%3A15%3AAYgVrR9Jw7dX9JifwCACdBIujaLaNjrdhOFgj0wC-w; ds_user_id=78363635879; rur="FRC\05478363635879\0541795792641:01fe6507ed110915b4362b45b6e4f6d74e6e0e3d7ed1352283741157f9c9ad00ade1d69c"`,
          priority: 'u=1, i',
          x_csrf_token: 'gdEK_IFRvHW-OVI-avoTbQ',
          x_ig_www_claim: 'hmac.AR1PR3uXKH7NMH4zdXoFMH84HKmX6CQM6rBLa4-VV0KvBCU8',
          x_web_session_id: '1rb623:5ymg5v:qaoo0s',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "daitansope":
        return {
          version: 'v18',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`csrftoken=L4HGMFBitt7knqzenkcGFS; datr=WqYnac5SbxB1VmXv4M8IZCrZ; ig_did=8145FAE6-7E77-44E8-A5AE-AD7E5E6EA346; wd=1873x905; mid=aSemWgAEAAFGSokaWbPW8XIIvwde; sessionid=78537546497%3Al14Df83HLqRYMB%3A1%3AAYjb266Ev5fgX7NQ12ap38ncYqn5Xx-6epUG4sCyCw; ds_user_id=78537546497; rur="RVA\05478537546497\0541795742473:01feffec48eba11e3c42fd31364113f46c0a73dca6869a989cea554d7001d457f2295a7b"`,
          priority: 'u=1, i',
          x_csrf_token: 'L4HGMFBitt7knqzenkcGFS',
          x_ig_www_claim: 'hmac.AR0U7B8xX-epkX_a1fkpE5iP9q2vJdVkTOGWlfF--FHBlvyC',
          x_web_session_id: '72m1ig:9i4ubg:urmt1o',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "ryu.hadouken9":
        return {
          version: 'v19',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`csrftoken=ZwX6e4skvls3dTwilKqJCz; datr=IBEnaatk194IoAEQ_mY_YQGE; ig_did=A1A23119-2CA5-4C35-95C0-75F8D1846579; wd=1873x905; mid=aScRIAAEAAGB9CzlU9aGyjKs1qZd; ig_nrcb=1; sessionid=78504845244%3Am76ZKltOoTZyAf%3A29%3AAYiV6tI9Y3aUQyFYe41Gm2y4dMsAM3BYhewV4xHvMw; ds_user_id=78504845244; rur="LDC\05478504845244\0541795704014:01fe522bd80643c68dd725b9d235ef94aaec862e2acc7438045262017140747e578c64b9"`,
          priority: 'u=1, i',
          x_csrf_token: 'ZwX6e4skvls3dTwilKqJCz',
          x_ig_www_claim: 'hmac.AR0R-y57yzfBjH8w7I7ZDQ-SX1ThOP-L0hR-eRBV9wV-FcRC',
          x_web_session_id: 'az63mq:xg1wy0:ivj4wc',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "danesh.bash":
        return {
          version: 'v20',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`ig_did=F1605625-F248-479B-B0E5-62DE26B713A3; datr=trt6aPPbYEHCI17AxBQ4iQOW; ps_l=1; ps_n=1; ig_nrcb=1; mid=aQQORwAEAAELCQPInndpQd7balp3; csrftoken=05bdGl5uY4p2gmZwDGnh9cXzpQKyMUT2; ds_user_id=78366201294; wd=1873x905; sessionid=78366201294%3AOuu1F9X8gnemy5%3A11%3AAYgJtUt212TdvYgd1N375KwAmMyRJklNEcCqGv4uYw; rur="NHA\05478366201294\0541795269408:01fe4324b88e70bed94b28839c8742073f07175819bfe464edcbc08e8ada399ed6c0ef82"`,
          priority: 'u=1, i',
          x_csrf_token: '05bdGl5uY4p2gmZwDGnh9cXzpQKyMUT2',
          x_ig_www_claim: 'hmac.AR3ZbyJphwPmCV5u0F5J3LYfOu-Pgm54yjNWjux6c9pwVLsm',
          x_web_session_id: '08yjkp:ilc9qe:8hv0bb',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "draklack":
        return {
          version: 'v21',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`ig_did=16414780-8FC7-404C-8A48-EDEFC3BBCC69; csrftoken=aBX14fYBqY1w9oA1yzuBYn; datr=34YoaQjsXNBz94I1n_LZqq3g; wd=1918x899; ig_nrcb=1; mid=aSiG3wAEAAGrkvrf20rucJFRx5nh; sessionid=78355919299%3A5nXxl7Ep1e0gbs%3A14%3AAYigNgjl8dNa6psRIhWCZvWsC4sgqksqQXioSviTJA; ds_user_id=78355919299; ps_l=1; ps_n=1; rur="NCG\05478355919299\0541795799775:01feeff2a9898dd489ef2ed91f03c5fcd49c049c0a8d2345be5806c019d366ce973310af"`,
          priority: 'u=1, i',
          x_csrf_token: 'aBX14fYBqY1w9oA1yzuBYn',
          x_ig_www_claim: 'hmac.AR0amfXSOZqq5GkX0pTu1i2tZcM3zk6vA2Jve7EX0YLgImmn',
          x_web_session_id: 'hxt6zi:7gkgs8:5gmyyb',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "dracken.lein":
        return {
          version: 'v22',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`csrftoken=qVTIxCf_7HNRM9geAoHJnG; datr=5K4naaHluCoPTTqJdNbZyU2z; ig_did=A1B22FEC-B140-469A-B41D-FB5F9D829D92; wd=1875x906; mid=aSeu5QAEAAFg_GUduSHomlHg0aw0; sessionid=78194846973%3A9PqfwgIuVaaDvZ%3A11%3AAYj_vha81-cCffKh87MbugSKwgnUERNuClyrqRtmYg; ds_user_id=78194846973; ps_l=1; ps_n=1; rur="NCG\05478194846973\0541795744496:01feb07b0a7d96dbd7b1945ad5f1334bb9e5cb4bef6c9ef5443152dcb10660a90f4ebc73"`,
          priority: 'u=1, i',
          x_csrf_token: 'qVTIxCf_7HNRM9geAoHJnG',
          x_ig_www_claim: 'hmac.AR2KnHwfk9O1YKm5pTmMHi6fffseb-rkKVS9O7fNAfGccoqn',
          x_web_session_id: 'l9o4of:wu4lpu:jyans0',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "dreick.lepen":
        return {
          version: 'v23',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`csrftoken=SHRSYmDcOjnFerGW2DDI6O; datr=3kgoaTyFerPgbMzP42Orw_w0; ig_did=8E6504CF-535B-408F-8298-7FDF9AB303B5; wd=1875x906; mid=aShI3gAEAAHvckEKkGJiZj3YwvEi; sessionid=78547963364%3AerE07Vdap7eh4l%3A5%3AAYgtNFw_5yOcjCFLYiM5oqAFdWdkwVrdWud9-E9ysQ; ds_user_id=78547963364; ps_l=1; ps_n=1; rur="NHA\05478547963364\0541795783950:01feff86178825b255331d4b91aed16f4c7dc1172f029872f9daac9e78e6c1c403a687d0"`,
          priority: 'u=1, i',
          x_csrf_token: 'SHRSYmDcOjnFerGW2DDI6O',
          x_ig_www_claim: 'hmac.AR2h1oqm9qkfJ8IYpGoGUxYOXD6SktetN9MBOo4RHotKC-F0',
          x_web_session_id: 'fy8tas:qir8po:fs3hwb',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "naspzter":
      return {
        version: 'v24',
        referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
        cookie: String.raw`csrftoken=ko7RPLycCavRQL27XvNYKY; datr=J0ooaU5nDUpppHRXVrSXHIMz; ig_did=29B927F4-28D3-4370-A891-2A4FCA336666; wd=1875x906; mid=aShKJwAEAAEiTuQmxf7mZwibrOPw; sessionid=78213923087%3A92bL0RUGB02jIp%3A14%3AAYiWlby3dlieUUhq1brug7Y2HiWqPLHiPqSYypbgJg; ds_user_id=78213923087; ps_l=1; ps_n=1; rur="NCG\05478213923087\0541795784307:01fef5e5810c551241b9bc1feb4eed2a9706ec24072113ef83b7766fd96ecb0f5c5fff93"`,
        priority: 'u=1, i',
        x_csrf_token: 'ko7RPLycCavRQL27XvNYKY',
        x_ig_www_claim: 'hmac.AR0Lmp1iOcL9ll9HR9JZSsydzuwcalok840ICWUsEeCPYIm0',
        x_web_session_id: 'sb3pxy:lsgjpk:siv6cd',
        user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
        accept_language: 'en-US,en;q=0.9',
        sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
        sec_ch_prefers_color_scheme:"",
        sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
        sec_ch_ua_mobile:'?0',
        sec_ch_ua_model:"",
        sec_ch_ua_platform:"Linux",
        sec_ch_ua_platform_version:"6.8.0",
        sec_fetch_dest:"",
        sec_fetch_mode:"cors",
        sec_fetch_site:"same-origin",
        sec_gpc:"1"
        }
      case "aliscestooper":
        return {
          version: 'v25',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`ig_did=2D33A09C-5AD2-4190-BAFE-0ACAC12EF0D4; csrftoken=cAu_VBkAvv9lOdNaLOzLCn; datr=A4QoaVuvS_84irUH09as5RS0; wd=1918x899; ig_nrcb=1; mid=aSiEAwAEAAF8XXxAHRI9AKsNruNq; ds_user_id=78720060656; sessionid=78720060656%3AlrZwY9m2GJEXHS%3A25%3AAYi9rEnjE74ofHJniujDaYbHIJjmjUlDgMDva_ptGA; rur="NHA\05478720060656\0541795799009:01fe92f8f9b7892f426fe25ecb1653745cdf5fb65525324587bda3b93f2deddce2ccaa7c"`,
          priority: 'u=1, i',
          x_csrf_token: 'cAu_VBkAvv9lOdNaLOzLCn',
          x_ig_www_claim: 'hmac.AR2SUVjim-dKcvovy6KpOiCHfSrLREwnjaXK83Asa_XUciUo',
          x_web_session_id: 'tbiw9w:8zq60d:yj3qsm',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "louganmichigan":
        return {
          version: 'v26',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`csrftoken=f_d3DoR5BUKgrWPj7fX3ke; datr=8pckaa7JGo0Rg8fA3xJdwD5O; ig_did=465AF33B-4A0D-46C3-8046-D50419DC2457; wd=1873x905; mid=aSSX8gAEAAHDsbbONZBrXxEGfkGV; sessionid=78511479521%3ARBzRfWqFYGufIT%3A4%3AAYjSUFxf2C3rko0HivMsvOXWIhF-YtW7gsWMYi4WSw; ds_user_id=78511479521; ps_l=1; ps_n=1; rur="ATG\05478511479521\0541795542322:01fe4df0f71b1f7905cb1bb1032ffe66412731f1ca740401b805cfefd11d9b5fa03e0fe6"`,
          priority: 'u=1, i',
          x_csrf_token: 'f_d3DoR5BUKgrWPj7fX3ke',
          x_ig_www_claim: 'hmac.AR2wJgzLdhWiKfDBiw7J3IEqV2hf-PHogI7F6qSec5Z4hrkV',
          x_web_session_id: 'd680z1:wtey8r:wkximp',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "morgan.freeman.strickland":
        return {
          version: 'v27',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`csrftoken=KuaJfKLZrBR7Qx-uEKjZbG; datr=AlsoaTiFm3d30skjOjxeOFLF; ig_did=C34168A2-3955-43E9-9B5C-D4D3FE0E24CE; wd=1875x906; mid=aShbAgAEAAGUTI8lqESrouPxRTbD; ig_nrcb=1; sessionid=78763081748%3ATyXLAWRR1LcnIG%3A26%3AAYhLc2NInZkyzYTLEgkS1biS21YB7pdmAD9D4_YBQA; ds_user_id=78763081748; ps_l=1; ps_n=1; rur="NCG\05478763081748\0541795788567:01fe3cc751ed8e59e4754d6e53792a3e8d7306ada3f1c55317042db9ecd7908070d8d666"`,
          priority: 'u=1, i',
          x_csrf_token: 'KuaJfKLZrBR7Qx-uEKjZbG',
          x_ig_www_claim: 'hmac.AR0phQX9N0jFuasDM-6hLZyAbX7FXvRJ7Ht1GHV8TkubRwqn',
          x_web_session_id: 'w4lwwo:s0a0j8:lpwhmp',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "michel.russel.petrone":
        return {
          version: 'v28',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`ig_did=48EC0B58-27E0-440E-988C-F1DDEC3936B9; csrftoken=5QYNGerHS6aDWc88Q3yjVS; datr=IoMoaXASeiaJSp_W4g4aZ0yq; wd=1918x899; ig_nrcb=1; mid=aSiDIgAEAAHK_DQRPG4ZgRmj_uYp; sessionid=78600681282%3A9Ld4B44y1ohmS4%3A14%3AAYjJdPQ6Kyx9hhHckHUxTduyfNTqvsS1qi24zlEQ9w; ds_user_id=78600681282; rur="NCG\05478600681282\0541795798737:01fe3c2f75ddcbf3e2f0089f87d47de4820f536d047d8d2001b18b24477b98830585d35b"`,
          priority: 'u=1, i',
          x_csrf_token: '5QYNGerHS6aDWc88Q3yjVS',
          x_ig_www_claim: 'hmac.AR17d3MZccXM6mG-Osyl4nFn3nlRiyFmj2xzfYWBQKFKlPkV',
          x_web_session_id: '4sdtw7:2a3pjp:9kppnl',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
      case "robert.leonard.smith":
        return {
          version: 'v29',
          referer: `https://www.instagram.com/${insta}/${type_contacts}/`,
          cookie: String.raw`ig_did=0907F449-E795-4EF0-9321-3A778CE90998; csrftoken=MTOgzjcKBb3lMZMgzXghwk; datr=nX0oaQAzlLDyhmBVS4BuArWb; wd=1918x899; ig_nrcb=1; mid=aSh9ngAEAAFiOOktufyYQimbFNfI; sessionid=78432618083%3AV0KYyFUYnTXmkQ%3A1%3AAYhLo3Aq0YA0Ir-ZSuVhPIqSTPlixTlMqeDUimC7rA; ds_user_id=78432618083; rur="NHA\05478432618083\0541795797371:01fed992215b2a38d0bfe2c8e3a1e86e382510570e74c3d6ed577d6a038e3d357b30b858"`,
          priority: 'u=1, i',
          x_csrf_token: 'MTOgzjcKBb3lMZMgzXghwk',
          x_ig_www_claim: 'hmac.AR2CfRuCIR2nHS4JblYHmzfcfel5BRhJY6kckHfFNm0-d26N',
          x_web_session_id: 'we2on3:izibfg:9knwx8',
          user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
          accept_language: 'en-US,en;q=0.9',
          sec_ch_ua_full_version_list:'"Brave";v="141.0.0.0", "Not?A_Brand";v="8.0.0.0", "Chromium";v="141.0.0.0"',
          sec_ch_prefers_color_scheme:"",
          sec_ch_ua:'"Brave";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
          sec_ch_ua_mobile:'?0',
          sec_ch_ua_model:"",
          sec_ch_ua_platform:"Linux",
          sec_ch_ua_platform_version:"6.8.0",
          sec_fetch_dest:"",
          sec_fetch_mode:"cors",
          sec_fetch_site:"same-origin",
          sec_gpc:"1"
        }
    }
    throw Error("o login informado não confere com nenhuma configuração");
}

/**
 * Brave: next.dj.yes / next.dj.yes@outlook.com
 * Opera: danilo511330 / dev.jitsu@outlook.com
 * Edge: clark.mar / clark.mar...@yahoo.com
 * Ungoogled: clark.bom / clark.bom..@mail.com
 */