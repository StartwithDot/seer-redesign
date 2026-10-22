import { activity } from '../data/activity';
import { fixture, unwrap } from '../data/fixtures';
import type { Market } from '../data/types';
export function marketActivity(m:Market){
 const data=unwrap(fixture<unknown>(`get-token-transactions-${m.id}`)) as {recentActivity?:Record<string,unknown>[]}|null;
 if(!Array.isArray(data?.recentActivity))return activity(m.id).map(r=>({...r,name:r.address}));
 return data.recentActivity.flatMap(r=>{const i=m.wrappedTokens.findIndex(t=>t.toLowerCase()===String(r.outcomeToken).toLowerCase()),action=({bought:'Bought',sold:'Sold',split:'Split',merged:'Merged'} as Record<string,string>)[String(r.type).toLowerCase()];if(i<0||!action||typeof r.trader!=='string'||!Number.isFinite(Number(r.amount)))return [];return [{address:r.trader,name:String(r.username??r.traderName??r.trader),action,amount:Number(r.amount),outcome:m.outcomes[i],timestamp:Number(r.timestamp),transactionHash:String(r.transactionHash)}];});
}
