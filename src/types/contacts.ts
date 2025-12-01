export class Contacts {
  has_more:boolean=true;
  next_max_id:number=0;
  users: User[]=[];
}

export class User {
  full_name:string='';
  id:string='';
  is_private:boolean=false;
  profile_pic_url:string='';
  username:string='';
}