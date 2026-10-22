import {build} from 'vite';
import {fileURLToPath} from 'node:url';
let pending;
export function adapters(){
 return pending??= (async()=>{
  await build({configFile:false,root:fileURLToPath(new URL('../',import.meta.url)),logLevel:'error',build:{outDir:fileURLToPath(new URL('./out/adapters/',import.meta.url)),emptyOutDir:true,lib:{entry:fileURLToPath(new URL('./adapters.ts',import.meta.url)),formats:['es'],fileName:()=> 'adapters.mjs'},minify:false}});
  return import(new URL('./out/adapters/adapters.mjs',import.meta.url).href);
 })();
}
