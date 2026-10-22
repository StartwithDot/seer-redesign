import { marketSignal, publishSignal } from './data/signals';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ConnectModal } from './components/ConnectModal';
import { LiquidityModal } from './components/LiquidityModal';
import { MilestoneCard } from './components/MilestoneCard';
import { Avatar } from './components/Avatar';
import { orgAvatars } from './data/avatars';
import { MiniFork } from './components/ClosedStrip';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { buildSeries, presets } from './math/series';
import { twapGap } from './math/twap';
import { ForkChart } from './components/ForkChart';
import { MetricStrip } from './components/MetricStrip';
import { VerdictGauge } from './components/VerdictGauge';
import { DetailHeading } from './components/DetailHeading';
import { TradePanel } from './components/TradePanel';
import { ActivityTable } from './components/ActivityTable';
import { CreateMarket } from './components/CreateMarket';
import { Landing } from './components/Landing';
import { GuidedTour } from './components/GuidedTour';
import { CommandPalette } from './components/CommandPalette';
import { useRoute, backToLanding } from './router';
import { activeMilestones, closedMilestones, activeMilestone, findMilestone, organizations, verdictPresets } from './data/milestones';

export type Theme = 'dark' | 'light';
export default function App() {
  const view = useRoute();
  const [liquidity, setLiquidity] = useState(false);
  const [connect, setConnect] = useState(false);
  const [palette, setPalette] = useState(false);
  const [tour, setTour] = useState<number | null>(null);
  const market = view.kind === 'detail' ? findMilestone(view.id) ?? activeMilestone : activeMilestone;
  const closed = market.status !== 'Active';
  const related = [...activeMilestones, ...closedMilestones].filter(m => m.orgSlug === market.orgSlug && m.id !== market.id).slice(0, 3);
  const orgName = organizations.find(o => o.slug === market.orgSlug)?.name;
  useEffect(() => {
    const applyTheme = (theme: Theme) => {
      document.documentElement.dataset.theme = theme;
      document.documentElement.classList.toggle('light', theme === 'light');
      try { localStorage.setItem('futarchy-theme', theme); } catch { /* Storage is optional. */ }
    };
    const onTheme = (event: Event) => {
      const theme = (event as CustomEvent<{ theme: Theme }>).detail.theme;
      if (theme === 'dark' || theme === 'light') applyTheme(theme);
    };
    const onConnect = (e: Event) => { (e as any).seerHandled = true; setConnect(true); };
    window.addEventListener('seer:theme', onTheme);
    window.addEventListener('seer:connect', onConnect);
    try { applyTheme(localStorage.getItem('seer.theme') === 'light' ? 'light' : 'dark'); }
    catch { applyTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'); }
    return () => {
      window.removeEventListener('seer:theme', onTheme);
      window.removeEventListener('seer:connect', onConnect);
    };
  }, []);
  useEffect(() => {
    const wallet = (window as Window & { ethereum?: { on?(e: string, f: (a: unknown) => void): void; removeListener?(e: string, f: (a: unknown) => void): void } }).ethereum;
    if (!wallet?.on) return;
    const onAccounts = (accounts: unknown) => {
      const shell = (window as Window & { seerShell?: { setConnected(a: string | null): void } }).seerShell;
      const a = Array.isArray(accounts) ? accounts[0] : null;
      shell?.setConnected(typeof a === 'string' ? `${a.slice(0, 6)}...${a.slice(-4)}` : null);
    };
    wallet.on('accountsChanged', onAccounts);
    return () => wallet.removeListener?.('accountsChanged', onAccounts);
  }, []);
  const [loading, setLoading] = useState(true);
  useEffect(() => { const timer = window.setTimeout(() => setLoading(false), 400); return () => clearTimeout(timer); }, []);
  const [preset, setPreset] = useState(0);
  useEffect(() => { setPreset(0); }, [market.id]);
  const series = useMemo(() => !closed && preset === 0 && 'spot' in market ? marketSignal(market) : buildSeries(market.seed, { theta: closed ? market.impact : preset === 0 ? verdictPresets[market.preset] : presets[preset], spot: 'spot' in market ? market.spot : 128.42 }), [preset, market, closed]);
  const [chartState, setChartState] = useState({ time: 0, series });
  const updateChart = useCallback((time: number, next: typeof series) => { setChartState({ time, series: next }); if (!closed && preset === 0 && time >= next.params.now) publishSignal(market.id, next); }, [market.id, closed, preset]);
  const point = chartState.series.points.reduce((a, b) => Math.abs(b.t - chartState.time) < Math.abs(a.t - chartState.time) ? b : a);
  const estimate = twapGap(chartState.series.points, chartState.time, series.params.T, series.params.kappa, series.params.theta);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target;
      if (tour !== null) return;
      if ((event.key === '/' || ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k')) && !(target instanceof HTMLElement && target.closest('input, textarea, select'))) { event.preventDefault(); setPalette(true); return; }
      if (palette || tour !== null || document.querySelector('dialog[open]')) return;
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey ||
        (target instanceof HTMLElement && (target.isContentEditable || target.closest('input, textarea, select')))) return;
      if (event.key === 'Escape' && view.kind === 'detail') backToLanding();
      if (event.key.toLowerCase() === 'v' && !event.repeat) setPreset(p => (p + 1) % presets.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [view.kind, palette, tour]);
  return <div className="app-shell" data-view={view.kind} data-milestone={view.kind === 'detail' ? view.id : undefined} data-verdict-preset={presets[preset]}>
    <Header onSearch={() => setPalette(true)} onTour={() => setTour(0)} />
    <main id="main" className={view.kind === 'list' ? 'page landing-main' : 'page foundation-main'} aria-label="Active Milestones">
      {view.kind === 'create' ? <CreateMarket /> : view.kind === 'list' ? <Landing org={view.org} loading={loading} /> : <>
      <nav className="detail-breadcrumb" data-align aria-label="Breadcrumb"><button className="icon-button" aria-label="Back" onClick={backToLanding}>‹</button><a href="#/">Milestones</a><span>›</span><a href={`#/org/${market.orgSlug}`}><Avatar avatar={orgAvatars[market.orgSlug]} size={20} />{organizations.find(o => o.slug === market.orgSlug)?.name}</a><span>›</span><a href={`#/m/${market.id}`}><Avatar avatar={market.token} size={20} />{market.token} · {market.proposal}</a></nav>
      <DetailHeading market={market} impact={closed ? market.impact : (point.yes - point.no) / point.no} onLiquidity={() => setLiquidity(true)} />
      <div data-align className="signature-grid"><div className="card chart-card" style={{ viewTransitionName: 'milestone-chart' }}><ForkChart header={<MetricStrip pair={'pair' in market ? market.pair : `${market.token}/USDS`} yes={point.yes} no={point.no} spot={point.spot} />} series={series} key={market.id} nowIndex={closed ? series.points.length - 1 : series.nowIndex} mode="detail" onNowChange={updateChart} /></div>
      <aside><TradePanel key={market.id} yes={point.yes} no={point.no} disabled={closed} status={market.status} /><VerdictGauge value={closed ? market.impact : estimate} locked={closed || chartState.time >= series.params.T} /></aside></div>
      <ActivityTable key={market.id} historical={closed} />
      {related.length > 0 && <section data-align className="more-section"><div className="section-heading"><h2>More from {orgName}</h2></div><div className="more-strip">{related.map(m => 'spot' in m ? <MilestoneCard key={m.id} milestone={m} /> : <a key={m.id} className="card closed-card" data-avatar={m.token} data-org={m.orgSlug} href={`#/m/${m.id}`}><Avatar avatar={m.token} size={32} /><h3>{m.question.pre}<span>{m.question.cond}</span></h3><MiniFork outcome={m.outcome} /><span className="chip">{m.status} {m.outcome}</span><span>Impact {(m.impact * 100).toFixed(2)}%</span></a>)}</div></section>}
    </>}
    </main>
    <Footer />
    {connect && <ConnectModal onClose={() => setConnect(false)} />}
    {liquidity && <LiquidityModal onClose={() => setLiquidity(false)} />}
    {palette && <CommandPalette onClose={() => setPalette(false)} onTour={() => setTour(0)} />}
    {tour !== null && <GuidedTour initialStep={tour} onClose={() => { setTour(null); }} /> }
  </div>;
}

