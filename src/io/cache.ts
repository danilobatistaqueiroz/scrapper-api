export function getCache(name:string):string {
  const data = localStorage.getItem(name);
  if(!data) {
    throw Error(`localStorage vazio. ${name}`);
  }
  return data;
}
export function getIntCache(name:string):number {
  return Number.parseInt(getCache(name));
}

export function setJsonCache(name:string, value:any){
  localStorage.setItem(name,JSON.stringify(value));
}

export function setCache(name:string, value:string){
  localStorage.setItem(name,value);
}