import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const here=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),project=path.resolve(here,'../../../../../');
const runtime=new Set(['index.html','app.js','app.css','icons.js','seer-shell.js','seer-shell.css','seer-subbar.css','subbar.css']);
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.woff2':'font/woff2'};
http.createServer(async(req,res)=>{try{const url=decodeURIComponent(new URL(req.url,'http://localhost').pathname);let root,relative;
 if(url.startsWith('/previews/h/')){root=here;relative=url.slice(12);if(!runtime.has(relative)&&!relative.startsWith('assets/')&&!relative.startsWith('data/')){res.writeHead(404);res.end('Not a runtime file');return;}}
 else if(url.startsWith('/previews/g/')){root=path.join(project,'site/explorer/previews/g');relative=url.slice(12);}
 else if(url.startsWith('/previews/data/')){root=path.join(project,'apps/explorer/public/previews/data');relative=url.slice(15);}
 else{root=path.join(project,'site');relative=url.slice(1);}
 let file=path.resolve(root,relative||'index.html');if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}if((await fs.stat(file)).isDirectory())file=path.join(file,'index.html');const data=await fs.readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data);
}catch{res.writeHead(404,{'Content-Type':'text/plain'});res.end('Not found');}}).listen(Number(process.env.PORT||5296),'127.0.0.1',()=>console.log('Integration preview: http://127.0.0.1:'+Number(process.env.PORT||5296)+'/explorer/previews/h/index.html'));
