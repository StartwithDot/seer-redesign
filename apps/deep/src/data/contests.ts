import { markets } from './markets';
import liveCharts from './real/get-market-charts.json';
import summary from './contest-summary.json';
export type ContestRow={id:string;name:string;price:number|null;other:number|null;group?:string;points:number[][];downPoints:number[][]};
export type Contest={id:string;name:string;kind:string;live:boolean;rows:ContestRow[];marketCount:number|null};
// Archived contests ship only a light summary (names, prices, counts); their price histories (~4.7MB) load on demand via loadContest().
type Summary=Omit<Contest,'rows'>&{prices:(number|null)[]};
const archived:Contest[]=(summary as Summary[]).map(({prices,...c})=>({...c,rows:prices.map((price,i)=>({id:`${c.id}:${i}`,name:'',price,other:null,points:[],downPoints:[]}))}));
const byId=new Map(archived.map(c=>[c.id,c]));
export const contests:Contest[]=[{id:'round3',name:'Round 3 · Originality',kind:'UP / DOWN',live:true,marketCount:markets.length,rows:markets.map(m=>({id:m.id,name:m.name,price:m.up,other:m.down,points:liveCharts[m.id as keyof typeof liveCharts]?.series.find(s=>s.outcomeName==='UP')?.points??[],downPoints:[]}))},...['zcash-nu7','zcash-grants','octant','round2-l2','round2-l1','round2-originality'].map(id=>byId.get(id)!),{id:'round1',name:'Round 1',kind:'Not in live API',live:false,rows:[],marketCount:null}];
const loaded=new Map<string,Promise<Contest>>();
export function loadContest(id:string):Promise<Contest>{const known=contests.find(c=>c.id===id);if(!known||!byId.has(id))return Promise.resolve(known as Contest);let p=loaded.get(id);if(!p){p=import('./contests-full').then(m=>m.fullContest(id));loaded.set(id,p);}return p;}
export const contestById=(id:string)=>contests.find(c=>c.id===id);
export function contestMedian(c:Contest){const values=c.rows.flatMap(r=>r.price===null?[]:[r.price]).sort((a,b)=>a-b);const n=values.length;return n?(values[Math.floor((n-1)/2)]+values[Math.floor(n/2)])/2:null;}
