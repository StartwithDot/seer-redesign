import type { Market } from '../data/types';
import { markets } from '../data/markets';
import { kleros, marketLink } from '../data/links';
export function Banners({ market: m }: { market: Market }) {
 const parent = markets.find(p => p.id === m.parentId);
 return <div className="market-banners">{m.conditional && <aside className="market-banner conditional"><span aria-hidden="true">ⓘ</span><div><h2>Conditional Market</h2><p>This market is conditional on the resolution of "{parent ? <a href={marketLink(parent)}>{parent.question}</a> : m.parentId}" being "{m.parentOutcomeName}". If the main market resolves to a different outcome, the tokens of this market will be worthless.</p></div></aside>}{m.verification === 'Not Verified' && <aside className="market-banner warning"><span aria-hidden="true">⚠</span><div><h2>This market is unverified (it didn't go through the curation process)</h2><p>It may be invalid, tricky and have misleading token names. Exercise caution while interacting with it.</p><a href={kleros()} target="_blank" rel="noreferrer">Verify it ↗</a></div></aside>}</div>;
}
