export type INFOS = {
  name:string,
  full_name?:string,
  description?:string,
  user_id:string,
  total_followers:number,
  total_following:number,
  private?:boolean,
  unavailable?:boolean,
  error?:{message:string,stack:string}
}