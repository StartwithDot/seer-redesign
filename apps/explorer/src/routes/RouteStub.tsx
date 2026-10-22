import type { Route } from '../router';
import { findMarket, getMarkets } from '../data/markets';
import { readFilters, filterMarkets, filterParams } from '../data/filters';
import { navigate } from '../router';
import { format } from '../data/format';
import { marketLink } from '../data/links';
import { Plate } from '../components/Plate';
export function RouteStub({ route }: { route: Route }) {
 if (route.name === 'home') {
  const filters = readFilters(route.params), rows = filterMarkets(getMarkets(), filters);
  return <section className="foundation-home" data-align><div className="foundation-toolbar"><span>{rows.length} markets</span><a className="button secondary" href="#/create-market">Create Market</a></div>
   <form className="foundation-filters" onSubmit={e => e.preventDefault()}>{(['state','verif','chain','sort','dir','minLiq'] as const).map(key => <label key={key}>{({state:'Market States',verif:'Verification Status',chain:'Chain',sort:'Sort By',dir:'Desc/Asc',minLiq:'Minimum Liquidity'})[key]}<select aria-label={key} value={filters[key]} onChange={e => navigate('/', filterParams({...filters,[key]: e.target.value}))}>{({state:['','Reports not open yet','Reports open','Waiting for answer','In Dispute','Pending execution','Closed'],verif:['','Verified','Verifying','Challenged','Not Verified'],chain:['','Ethereum','OP Mainnet','Gnosis','Base'],sort:['','Liquidity','Volume','Open Interest','Opening Date','Creation Date'],dir:['','Asc','Desc'],minLiq:['','100','1000','10000']})[key].map(v => <option key={v} value={v}>{v || (key === 'sort' ? 'Default' : key === 'dir' ? 'Desc' : 'All')}</option>)}</select></label>)}</form>
   <div className="stub-market-list">{rows.map(m => <a className="stub-market" key={m.id} href={marketLink(m)}><span>{m.question}</span><span>{format(m.volumeUSD)} Vol.</span></a>)}</div></section>;
 }
 if (route.name === 'market') { const m = findMarket(route.chainId!, route.slug!); return m ? <><h1 className="route-title">{m.question}</h1><Plate /></> : <Plate title="Not in sample data" />; }
 const titles = { leaderboard: 'Leaderboard', create: 'Create Market', collections: 'My collections', plate: 'Not in this build', 'not-found': '404' };
 return <Plate title={titles[route.name]} />;
}
