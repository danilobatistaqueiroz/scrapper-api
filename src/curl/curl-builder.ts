import { Headers } from "../types/headers";
import { TYPE_CONTACTS } from "../types/type-contacts";

/** não foi possível executar chamadas usando ajax nem axios nem fetch, eles não decomprimiam os dados puxados */
export function buildCurl(userId:string,paramMaxId:string,headers:Headers,type:TYPE_CONTACTS):string{
  const strType = type.toString().toLowerCase();
  let command = `curl \
  --proxy socks5h://localhost:9050 \
  --location 'https://www.instagram.com/api/v1/friendships/${userId}/${strType}/?count=12${paramMaxId}&search_surface=follow_list_page' \
  --header 'Host: www.instagram.com' \
  --header 'User-Agent: ${headers.user_agent}' \
  --header 'Accept-Language: en-US,en;q=0.5' \
  --header 'Accept-Encoding: gzip, deflate, br, zstd' \
  --header 'X-CSRFToken: ${headers.x_csrf_token}' \
  --header 'X-IG-App-ID: 936619743392459' \
  --header 'X-ASBD-ID: 359341' \
  --header 'X-IG-WWW-Claim: ${headers.x_ig_www_claim}' \
  --header 'X-Web-Session-ID: ${headers.x_web_session_id}' \
  --header 'X-Requested-With: XMLHttpRequest' \
  --header 'Alt-Used: www.instagram.com' \
  --header 'Connection: keep-alive' \
  --header 'Referer: ${headers.referer}' \
  --header 'Cookie: ${headers.cookie}' \
  --header 'Sec-Fetch-Dest: empty' \
  --header 'Sec-Fetch-Mode: cors' \
  --header 'Sec-Fetch-Site: same-origin' \
  --header 'TE: trailers' \
  --compressed`;
  return command;
}