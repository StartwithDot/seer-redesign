import { SeerMark, ProductNav } from './SeerShell';
import { useEffect, useState } from 'react';
import type { Route } from '../router';
import { SearchPill } from './SearchPill';
import { CommandPalette } from './CommandPalette';
import { useWallet } from '../data/wallet';
import { ThemeToggle } from './ThemeToggle';
import { PoliciesMenu } from './PoliciesMenu';
import { AppMenu } from './AppMenu';
import { AccountMenu } from './AccountMenu';
import { ConnectDialog } from './ConnectDialog';
import { MobileNavSheet } from './MobileNavSheet';
import { GuidedTour } from './GuidedTour';
import './header.css';
export function Header({ route }: { route: Route }) {
 const [theme, setTheme] = useState<'dark' | 'light'>(() => localStorage.getItem('explorer.theme') === 'light' ? 'light' : 'dark');
 const [mobile, setMobile] = useState(false);
 const wallet = useWallet();
 const [connecting,setConnecting]=useState(false),[tour,setTour]=useState(false);
 useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem('explorer.theme',theme);},[theme]);
 const [palette, setPalette] = useState(false);
 useEffect(() => { const key = (e: KeyboardEvent) => { const editing = e.target instanceof HTMLElement && !!e.target.closest('input,textarea,[contenteditable]'); if ((e.key === '/' && !editing) || (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey))) { e.preventDefault(); setPalette(true); } }; window.addEventListener('keydown', key); return () => window.removeEventListener('keydown', key); }, []);
 const items = [['Markets', '#/'], ['Leaderboard', '#/leaderboard'], ['Create Market', '#/create-market']];
 return <><header className="header"><div className="header-inner page" data-align>
  <a className="brand" href="/" aria-label="Seer home"><SeerMark /></a>
  <nav aria-label="Markets" className="desktop-nav">{items.map(([label, href]) => <a key={href} href={href} aria-current={route.path === href.slice(1) ? 'page' : undefined}>{label}</a>)}
   <PoliciesMenu/><AppMenu/>
  </nav><div className="header-search"><SearchPill route={route} onOpen={()=>setPalette(true)}/></div><div className="header-actions">
  <button className="icon-button mobile-search" aria-label="Search" onClick={() => setPalette(true)}>⌕</button>
  <button className="icon-button help" aria-label="Help" title="Take the tour" onClick={()=>setTour(true)}>?</button>
  <ThemeToggle theme={theme} onChange={() => { const next = theme === 'dark' ? 'light' : 'dark'; setTheme(next); document.documentElement.dataset.theme = next; }} />
  <div className="desktop-account">{wallet.connected ? <AccountMenu/> : <button className="button primary connect" onClick={()=>setConnecting(true)}>Connect</button>}</div>
  <button className="icon-button mobile-menu" aria-label="Markets" aria-expanded={mobile} onClick={() => setMobile(!mobile)}>☰</button>
  </div><ProductNav current="explorer" /></div></header>
  {mobile && <MobileNavSheet onClose={()=>setMobile(false)} onConnect={()=>setConnecting(true)} onHelp={()=>setTour(true)}/>}
 {connecting&&<ConnectDialog onClose={()=>setConnecting(false)}/>}{tour&&<GuidedTour onClose={()=>setTour(false)}/>}
 {palette && <CommandPalette onClose={() => setPalette(false)} />}
 </>;
}
