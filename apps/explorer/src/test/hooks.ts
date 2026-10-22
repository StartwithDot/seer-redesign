import { getMarkets, markets } from '../data/markets';
import { format } from '../data/format';
import { quote } from '../data/quote';
import { setNow } from '../data/clock';
import { connect, disconnect, setBalance } from '../data/wallet';
function data() {
 const rows = getMarkets();
 const types = Object.fromEntries(['Categorical', 'Multi Categorical', 'Scalar', 'Multi Scalar'].map(type => [type, rows.filter(m => m.type === type).length]));
 const lePen = rows.find(m => m.id.startsWith('0xe1793927'))!;
 return { markets: rows, counts: { types, templateId: types, verified: rows.filter(m => m.verification === 'Verified').length,
  conditional: rows.filter(m => m.conditional).length, rewards: rows.filter(m => m.rewards).length }, types,
  lePen, format, quote, status: lePen.status, collateralSymbol: rows.find(m => m.id.startsWith('0xbbf8'))?.collateralSymbol };
}
const hooks = { get data() { return data(); }, setNow, setBalance, connect, disconnect,
 tick(id: string, delta: number) {
  const market = markets.find(m => m.id === id);
  if (!market || !Number.isFinite(delta)) return;
  const ranked = market.outcomes.map((name, index) => ({ name, index })).filter(o => o.name !== 'Invalid').sort((a, b) => (market.odds[b.index] ?? -Infinity) - (market.odds[a.index] ?? -Infinity));
  const index = market.layout === 'binary' ? ranked.find(o => o.index === 0)?.index : ranked[1]?.index;
  if (index === undefined) return;
  hooks.tickOdds(id, index, Math.max(0, Math.min(100, (market.odds[index] ?? 0) + delta)));
 },
 tickOdds(id: string, index: number, value: number) {
  const market = markets.find(m => m.id === id);
  if (market && Number.isFinite(value) && value >= 0 && value <= 100 && index >= 0 && index < market.odds.length) {
   market.raw.odds[index] = value; market.odds[index] = value;
   window.dispatchEvent(new CustomEvent('explorer:odds', { detail: { id, index, value } }));
  }
 }, hero: { index: 0, paused: true }, reel: (id: string) => document.querySelector(`[data-market-id="${CSS.escape(id)}"] .rolling-number`) };
declare global { interface Window { __explorerTest?: typeof hooks } }
export function installTestHooks() {
 if (import.meta.env.DEV || new URLSearchParams(location.search).get('test') === '1') window.__explorerTest = hooks;
}
