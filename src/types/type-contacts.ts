export enum TYPE_CONTACTS {
  NOTHING="",
  FOLLOWING = "following",
  FOLLOWERS = "followers"
}

function toTypeContacts(value:string):TYPE_CONTACTS{
  switch(value){
    case 'following':
      return TYPE_CONTACTS.FOLLOWING;
    case 'followers':
      return TYPE_CONTACTS.FOLLOWERS;
    default:
      console.error("TYPE_CONTACTS environment variable mal definida!",value);
      throw new Error("TYPE_CONTACTS environment variable mal definida!"+value);
  }
}

export function convertTypeContacts(type:string|undefined): TYPE_CONTACTS{
  if(!type){
    console.error("TYPE_CONTACTS environment variable não definida!");
    throw Error("TYPE_CONTACTS environment variable não definida!");
  }
  const data = toTypeContacts(type);
  return data;
}