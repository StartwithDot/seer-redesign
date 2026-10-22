import { useState } from 'react';
/** Futarchy's fixed-size avatar slot, adapted to Explorer's captured images and labels. */
export function Avatar({name,src,size=24}:{name:string;src?:string;size?:24|32|44|56}){
 const [failed,setFailed]=useState(false);
 return <span className="explorer-avatar" data-avatar={src||name} style={{width:size,height:size}}>{src&&!failed?<img src={src} alt="" onError={()=>setFailed(true)}/>:<span aria-hidden="true">{name.replace(/^0x/,'').slice(0,2).toUpperCase()}</span>}</span>;
}
