import { HoverMenu } from './HoverMenu';
export function PoliciesMenu(){return <HoverMenu label="Policies" selected={[]} options={[{label:'Verified Market Policy',value:'#/policies/verified-market'},{label:'Market Rules Policy',value:'#/policies/market-rules'}]} onChange={v=>{location.hash=v[0];}}/>;}
