export type Follows = 
{
  id:number,
  name:string,
  total_follows?:number,
  scrapper?:string,
  next_max_id?:number,
  is_private?:boolean,
  is_unavailable?:boolean,
  error_follow?:boolean,
  limit_to_see?:boolean,
  latest_update?:Date,
  finished?:boolean
}