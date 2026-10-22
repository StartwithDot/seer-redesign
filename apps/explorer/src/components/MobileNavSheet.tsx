import { Sheet } from './Sheet';
import { appLinks } from './AppMenu';
import { AccountMenu } from './AccountMenu';
import { useWallet } from '../data/wallet';
export function MobileNavSheet({onClose,onConnect,onHelp}:{onClose:()=>void;onConnect:()=>void;onHelp:()=>void}){
 const wallet=useWallet();
 return <Sheet label="Markets" onClose={onClose}><header className="sheet-heading"><span>seer</span><button className="icon-button" aria-label="Close" onClick={onClose}>×</button></header><nav className="mobile-nav-links">{[['Markets','#/'],['Leaderboard','#/leaderboard'],['Create Market','#/create-market'],['Verified Market Policy','#/policies/verified-market'],['Market Rules Policy','#/policies/market-rules'],...appLinks,['My collections','#/collections/default'],['Create New Market','#/create-market']].map(([label,href])=><a key={label} href={href} target={href.startsWith('https')?'_blank':undefined} rel="noreferrer" onClick={onClose}>{label}{href.startsWith('https')?' ↗':''}</a>)}<button onClick={()=>{onClose();onHelp();}}>Help</button>{wallet.connected?<AccountMenu/>:<button onClick={()=>{onClose();onConnect();}}>Connect</button>}</nav></Sheet>;
}
