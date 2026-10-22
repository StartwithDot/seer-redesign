import { holders } from '../data/holders';
import { fixture, unwrap } from '../data/fixtures';
export function marketHolders(marketId:string,token:string){
 const data=unwrap(fixture<unknown>(`get-token-transactions-${marketId}`)) as {topHolders?:Record<string,{address:string;username?:string}[]>}|null;
 return holders(marketId,token).map(row=>({...row,name:data?.topHolders?.[token]?.find(h=>h.address===row.address)?.username??row.address}));
}
