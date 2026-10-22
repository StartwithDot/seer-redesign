import type { HistoryPoint } from '../data/history';
// A scalar quote maps probability p linearly into its declared [L,U] payout domain.
export const chartValue=(percent:number,scalar:boolean,lower:number,upper:number)=>scalar?lower+(upper-lower)*percent/100:percent;
// Nearest capture minimizes absolute elapsed time; ties retain the earlier capture.
export function nearestTimestamp(points:HistoryPoint[],timestamp:number){return points.reduce((best,p)=>Math.abs(p.periodStartUnix-timestamp)<Math.abs(best-timestamp)?p.periodStartUnix:best,points[0]?.periodStartUnix??timestamp);}
// Labels are projected forward then backward, preserving an 18px minimum baseline gap.
export function separateLabels<T extends {y:number}>(items:T[],height:number):T[]{const rows=items.map(p=>({...p})).sort((a,b)=>a.y-b.y);for(let i=0;i<rows.length;i++)rows[i].y=Math.max(10,rows[i].y,i?rows[i-1].y+18:10);for(let i=rows.length-1;i>=0;i--)rows[i].y=Math.min(height-10,rows[i].y,i<rows.length-1?rows[i+1].y-18:height-10);return rows;}
