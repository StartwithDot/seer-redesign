import {useEffect,useId,useRef,useState} from 'react';
import {createPortal} from 'react-dom';
export function Tooltip({text,children}:{text:string;children:React.ReactNode}){
 const id=useId(),ref=useRef<HTMLSpanElement>(null),timer=useRef<ReturnType<typeof setTimeout>|undefined>(undefined),[open,setOpen]=useState(false),[point,setPoint]=useState({left:0,top:0});
 const hide=()=>{clearTimeout(timer.current);setOpen(false);};
 const show=()=>{clearTimeout(timer.current);timer.current=setTimeout(()=>{const r=ref.current?.getBoundingClientRect();if(r){setPoint({left:Math.max(8,Math.min(r.left,innerWidth-248)),top:r.top>=112?r.top-104:Math.min(innerHeight-104,r.bottom+8)});setOpen(true);}},300);};
 useEffect(()=>{window.addEventListener('scroll',hide,true);return()=>{clearTimeout(timer.current);window.removeEventListener('scroll',hide,true);};},[]);
 return <span className="tooltip-anchor" ref={ref} tabIndex={0} aria-describedby={open?id:undefined} onFocus={show} onBlur={hide} onPointerEnter={show} onPointerLeave={hide} onKeyDown={e=>{if(e.key==='Escape')hide();}}>{children}{open&&createPortal(<span className="tooltip" role="tooltip" id={id} style={point}>{text}</span>,ref.current?.closest('dialog')??document.body)}</span>;
}
