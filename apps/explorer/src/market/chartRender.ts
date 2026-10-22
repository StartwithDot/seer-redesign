import { scaleLinear, scaleTime } from 'd3-scale';
import { line, curveStepAfter } from 'd3-shape';
import type { Market } from '../data/types';
import type { HistoryPoint } from '../data/history';
import { chartValue } from '../math/chart';
import { labelEngine, type LabelCanvas } from './labelEngine';
export function chartScales(m:Market,points:HistoryPoint[],width:number,height:number,zoom:boolean,domain:[number,number]){
 const scalar=m.type==='Scalar', values=points.map(p=>chartValue(p.percent,scalar,m.bounds.lower,m.bounds.upper));
 const low=scalar?m.bounds.lower:0,high=scalar?m.bounds.upper:100;
 return {x:scaleTime().domain(domain.map(t=>new Date(t*1000))).range([40,width-72]),y:scaleLinear().domain(zoom&&values.length?[Math.max(low,Math.min(...values)-2),Math.min(high,Math.max(...values)+2)]:[low,high]).range([height-32,6])};
}
export function renderChart(canvas:LabelCanvas,m:Market,points:HistoryPoint[],zoom:boolean,isolate:number|null,cursor:number|null,domain:[number,number]){
 const width=canvas.clientWidth,height=canvas.clientHeight,dpr=Math.min(devicePixelRatio||1,2);canvas.width=width*dpr;canvas.height=height*dpr;
 const ctx=canvas.getContext('2d');if(!ctx)return;ctx.scale(dpr,dpr);ctx.clearRect(0,0,width,height);
 const css=getComputedStyle(canvas),color=(s:string)=>css.getPropertyValue(s).trim();ctx.font='12px "Inter Tight Variable", sans-serif';
 const {x,y}=chartScales(m,points,width,height,zoom,domain),scalar=m.type==='Scalar';
 ctx.fillStyle=color('--text-2');ctx.strokeStyle=color('--nested');ctx.lineWidth=1;
 for(const tick of zoom||scalar?y.ticks(4):[0,25,50,75,100]){const py=y(tick);ctx.fillText(`${tick}${scalar?'':'%'}`,0,py+4);ctx.beginPath();ctx.moveTo(40,py);ctx.lineTo(width-72,py);ctx.stroke();}
 ctx.textAlign='center';for(const tick of x.ticks(6)){const text=tick.getUTCMonth()===0&&tick.getUTCDate()===1?String(tick.getUTCFullYear()):tick.toLocaleDateString('en-US',{month:'short',day:'numeric',timeZone:'UTC'});ctx.fillText(text,x(tick),height-8);}ctx.textAlign='left';
 const top=m.outcomes.map((_,i)=>i).filter(i=>m.odds[i]!==null).sort((a,b)=>(m.odds[b]??0)-(m.odds[a]??0)),palette=['--series-1','--series-2','--series-3'];
 const labels:Parameters<typeof labelEngine>[0]=[];
 ctx.save();ctx.beginPath();ctx.rect(40,6,Math.max(0,width-112),height-38);ctx.clip();
 for(const [rank,i] of top.entries()){
  const rows=points.filter(p=>p.outcome===i),stroke=color(palette[rank]??'--series-rest');ctx.globalAlpha=isolate!==null&&isolate!==i?.2:rank>2&&isolate!==i?.35:1;ctx.strokeStyle=stroke;ctx.lineWidth=rank<3?2:1;
  if(rows.length){ctx.beginPath();line<HistoryPoint>().x(p=>x(new Date(p.periodStartUnix*1000))).y(p=>y(chartValue(p.percent,scalar,m.bounds.lower,m.bounds.upper))).curve(curveStepAfter).context(ctx)(rows);ctx.stroke();}
  const latest=rows.at(-1);if(latest&&(rank<3||isolate===i))labels.push({text:`${m.outcomes[i]} ${scalar?chartValue(latest.percent,true,m.bounds.lower,m.bounds.upper).toFixed(2):latest.percent.toFixed(1)+'%'}`,x:width-68,y:y(chartValue(latest.percent,scalar,m.bounds.lower,m.bounds.upper)),w:68,h:16,color:stroke});
 }
 if(cursor!==null){ctx.globalAlpha=1;ctx.strokeStyle=color('--text-2');ctx.beginPath();ctx.moveTo(x(new Date(cursor*1000)),6);ctx.lineTo(x(new Date(cursor*1000)),height-32);ctx.stroke();}ctx.restore();
 if(top.length>3&&points.length)labels.push({text:`+${top.length-3} more`,x:width-68,y:height-48,w:68,h:16,color:color('--text-2')});
 canvas.__labels=points.length?labelEngine(labels,height-32):[];
 ctx.globalAlpha=1;for(const label of canvas.__labels){ctx.fillStyle=color('--card');ctx.fillRect(label.x-2,label.y,label.w,label.h);ctx.fillStyle=label.color;const parts=label.text.match(/^(.*) ([\d.]+%?)$/);let text=label.text;if(parts){let name=parts[1];while(ctx.measureText(`${name} ${parts[2]}`).width>66&&name.length>1)name=name.slice(0,-2)+'…';text=`${name} ${parts[2]}`;}ctx.fillText(text,label.x,label.y+12,66);}

 return {x,y};
}
