import zcash from './real/contests/zcash.json';
import nu7 from './real/contests/zcash-nu7.json';
import octant from './real/contests/octant.json';
import round2 from './real/contests/round2.json';
import l1 from './real/contests/round2-l1.json';
import l2 from './real/contests/round2-l2.json';
import type { Contest, ContestRow } from './contests';
type RawMarket={id:string;marketName?:string;outcomes?:string[];prices?:(number|null)[];upPrice?:number;downPrice?:number;yesPrice?:number;noPrice?:number;price?:number};
type Chart={series:{outcomeName:string;points:number[][]}[]};
type Fixture={markets:{marketsData?:Record<string,RawMarket>;markets?:RawMarket[]};charts:Record<string,Chart>};
function adapt(id:string,name:string,kind:string,fixture:unknown):Contest {
 const f=fixture as Fixture;const rows:ContestRow[]=[];
 if(f.markets.marketsData)for(const [name,m] of Object.entries(f.markets.marketsData)){
  const chart=f.charts[m.id.toLowerCase()]?.series??[];
  if(m.prices){m.prices.forEach((price,i)=>{const s=chart[i];rows.push({id:`${m.id.toLowerCase()}:${i}`,name:s?.outcomeName??`Outcome ${i+1}`,group:name,price,other:null,points:s?.points??[],downPoints:[]});});}
  else rows.push({id:m.id.toLowerCase(),name,price:m.upPrice??m.yesPrice??m.price??null,other:m.downPrice??m.noPrice??null,points:(chart.find(s=>s.outcomeName.toUpperCase()===(kind==='YES / NO'?'YES':'UP'))??chart[0])?.points??[],downPoints:(chart.find(s=>s.outcomeName.toUpperCase()===(kind==='YES / NO'?'NO':'DOWN')))?.points??[]});
 } else for(const m of f.markets.markets??[])m.outcomes?.forEach((name,i)=>{rows.push({id:`${m.id.toLowerCase()}:${i}`,name,group:m.marketName,price:m.prices?.[i]??null,other:null,points:f.charts[m.id.toLowerCase()]?.series.find(s=>s.outcomeName===name)?.points??[],downPoints:[]});});
 // L2 outcome names and ordering come from the API's market definitions, not pool order labels.
 if(id==='round2-l2')for(const row of rows){const [marketId,index]=row.id.split(':');const def=f.markets.markets?.find(m=>m.id.toLowerCase()===marketId);row.name=def?.outcomes?.[Number(index)]??row.name;}
 return {id,name,kind,live:false,rows,marketCount:f.markets.marketsData?Object.keys(f.markets.marketsData).length:(f.markets.markets?.length??0)};
}
const sources:Record<string,[string,string,unknown]>={'zcash-nu7':['Zcash · NU7','Multi-outcome',nu7],'zcash-grants':['Zcash · Grants','YES / NO',zcash],'octant':['Octant','Single price',octant],'round2-l2':['Round 2 · L2','Multi-outcome',l2],'round2-l1':['Round 2 · L1','Single price',l1],'round2-originality':['Round 2 · Originality','UP / DOWN',round2]};
export const archivedIds=Object.keys(sources);
export const fullContest=(id:string)=>{const [n,k,f]=sources[id];return adapt(id,n,k,f);};
