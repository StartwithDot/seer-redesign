import type { Market } from '../data/types';
import { marketHolders } from './marketHolders';
import { compact, address } from '../data/format';
import { explorer } from '../data/links';
export function HoldersTab({market:m}:{market:Market}){return <div className="holders-tab">{m.outcomes.map((name,i)=><section key={i}><h3>{name}</h3><table><thead><tr><th>Account</th><th>Balance</th></tr></thead><tbody>{marketHolders(m.id,m.wrappedTokens[i]).map(h=><tr key={h.address}><td><a title={h.address} href={explorer(m.chainId,h.address)??undefined} target="_blank" rel="noreferrer">{h.name===h.address?address(h.address):h.name}</a></td><td>{h.balance>0&&h.balance<.001?'<0.001':compact(h.balance)}</td></tr>)}</tbody></table></section>)}</div>;}
