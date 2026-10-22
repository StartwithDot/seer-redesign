export interface LiquidityTick{tickIdx:string;liquidityNet:string;price0:string;price1:string}
// Concentrated liquidity: Δtoken0=L(1/√Pa−1/√Pb), Δtoken1=L(√Pb−√Pa).
// Liquidity net updates at each lower boundary; ERC20 amounts use 18 decimals.
export function liquidityLadder(ticks:LiquidityTick[],outcomeIsToken0:boolean){let active=0;const sorted=[...ticks].sort((a,b)=>+a.tickIdx-+b.tickIdx);return sorted.slice(0,-1).flatMap((tick,i)=>{active+=Number(tick.liquidityNet)/1e18;const a=Math.sqrt(Number(tick.price0)),b=Math.sqrt(Number(sorted[i+1].price0)),shares=Math.max(0,active*(outcomeIsToken0?1/a-1/b:b-a)),price=Number(outcomeIsToken0?tick.price0:tick.price1);if(price<0||price>1||!Number.isFinite(shares))return [];return [{price,shares}];}).sort((a,b)=>a.price-b.price).map((row,i,rows)=>({...row,total:rows.slice(0,i+1).reduce((sum,r)=>sum+r.shares,0)}));}
// Last ladder price uses the captured tick: token1/token0 = 1.0001^tick.
// Q64.96 sqrt price supplies the pool spot price when a tick is unavailable.
export function poolPrice(sqrtPrice:string,outcomeIsToken0:boolean,tick?:string){const ratio=tick===undefined?(Number(sqrtPrice)/2**96)**2:1.0001**Number(tick);return outcomeIsToken0?ratio:1/ratio;}
