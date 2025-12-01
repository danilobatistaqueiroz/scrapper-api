const { execSync } = require('child_process');
import { appendError, appendTextError } from "../../io/errors";

export async function convert(insta:string) {
  const command = `./converter.sh ${insta}`
  let result = null;
  try{
    console.log("iniciando converter",insta);
    result = execSync(command);
    console.log("finalizado converter",insta,result);
  } catch (e) {
    appendError(insta, e, `Ocorreu um problema no converter. ${insta}`);
    appendTextError(insta, result);
    throw Error(`Ocorreu um problema no converter. ${insta}`);
  }
}