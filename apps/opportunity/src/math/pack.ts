export interface PackedCircle {id:string;x:number;y:number;diameter:number}
/** Radius ∝ sqrt(odds), so area ∝ odds. Deterministic candidates keep label hit boxes disjoint, including hover expansion. */
export function pack(items:{id:string;weight:number}[],width:number){
 const circles:PackedCircle[]=[],max=Math.max(...items.map(o=>o.weight),.01),w=Math.max(56,width);
 for(const item of items){
  const diameter=Math.min(w,Math.max(56,112*Math.sqrt(item.weight/max))),r=diameter/2;
  const candidates=[{x:r+2,y:r+2}];
  for(const c of circles){const cr=c.diameter/2;for(let a=0;a<24;a++){const angle=a*Math.PI/12;candidates.push({x:c.x+Math.cos(angle)*(cr+r+8),y:c.y+Math.sin(angle)*(cr+r+8)});}}
  const valid=candidates.filter(p=>p.x>=r&&p.x+r<=w&&p.y>=r&&circles.every(c=>Math.abs(p.x-c.x)>=r+c.diameter/2+8||Math.abs(p.y-c.y)>=r+c.diameter/2+8));
  valid.sort((a,b)=>(a.y+r)-(b.y+r)||a.x-b.x);
  const p=valid[0]??{x:r,y:Math.max(0,...circles.map(c=>c.y+c.diameter/2))+r+8};
  circles.push({id:item.id,...p,diameter});
 }
 return {circles,height:Math.max(0,...circles.map(c=>c.y+c.diameter/2+4))};
}
/** Log intensity interpolates the approved low/mid/leader ramp continuously. */
export function intensity(value:number,min:number,max:number){const floor=Math.max(.001,min);return max<=floor?1:Math.max(0,Math.min(1,Math.log(Math.max(value,floor)/floor)/Math.log(max/floor)));}
