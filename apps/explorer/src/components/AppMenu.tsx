import { HoverMenu } from './HoverMenu';
export const appLinks=['Explorer','Deep','Futarchy','Opportunity','Risk'].map(name=>[name,`/${name.toLowerCase()}/`]);
export function AppMenu(){return <HoverMenu label="App" selected={[]} options={appLinks.map(([label,value])=>({label:`${label} ↗`,value,href:value}))} onChange={()=>{}}/>;}
