const { spawn } = require('node:child_process');
import { appendError } from "../../io/errors";

export async function converter(insta:string) {
  try{
    console.log("iniciando converter",insta);
    
    const npm = spawn('npm', ['run', 'convert', '--', 'false', insta], {
      cwd: '/home/element/contatos/callAPI/converter-json-html'
    });

    npm.stdout.on('data', (data:any) => {
      console.log(`stdout: ${data}`);
    });
    
    npm.stderr.on('data', (data:any) => {
      console.error(`stderr: ${data}`);
    });
    
    npm.on('close', (code:any) => {
      console.log(`child process exited with code ${code}`);
    });

    console.log("finalizado converter",insta);
  } catch (e) {
    appendError(insta, e, `Ocorreu um problema no converter.`);
    throw Error(`Ocorreu um problema no converter. ${insta}`);
  }
}
