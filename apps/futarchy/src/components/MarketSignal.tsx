import { compactUsd } from '../format';
import { Tooltip } from './Tooltip';
import { useCallback, useMemo, useState } from 'react';
import type { ActiveMilestone } from '../data/milestones';
import { marketSignal, publishSignal, useSignalPoint } from '../data/signals';
import { type Series } from '../math/series';
import { twapGap } from '../math/twap';
import { ForkChart } from './ForkChart';
import { RollingNumber } from './RollingNumber';
import { MicroGauge } from './MicroGauge';
import { verdict } from '../math/twap';
import { LeanChip } from './Chips';
export function useMarketSignal(market: ActiveMilestone) {
  const series = useMemo(() => marketSignal(market), [market]);
  const [live, setLive] = useState(series);
  const update = useCallback((_time: number, next: Series) => { setLive(next); publishSignal(market.id, next); }, [market.id]);
  const point = useSignalPoint(market);
  const lean = twapGap(live.points, live.params.now, live.params.T, live.params.kappa, live.params.theta);
  return { series, update, point, lean };
}
export function SignalTiles({ yes, no }: { yes: number; no: number }) {
  return <div className="signal-tiles">{[
    ['YES Price', yes, 'yes-value'], ['NO Price', no, 'no-value'], ['Impact', (yes - no) / no * 100, `verdict-${verdict((yes - no) / no).toLowerCase()}`],
  ].map(([label, value, color]) => <Tooltip key={label} text={label === 'YES Price' ? 'Price if the proposal passes' : label === 'NO Price' ? 'Price if it fails' : 'YES vs NO gap'}><div tabIndex={0} data-tour={label === 'Impact' ? 'impact' : undefined}><span>{label}</span><RollingNumber value={Number(value)} decimals={Number(value) < 1 && label !== 'Impact' ? 4 : 2} signed={label === 'Impact'} suffix={label === 'Impact' ? '%' : ''} flash className={String(color)} />{label === 'Impact' && <MicroGauge value={(yes - no) / no} />}</div></Tooltip>)}</div>;
}
export function MarketSignal({ market, mini = false, board = false }: { market: ActiveMilestone; mini?: boolean; board?: boolean }) {
  const { series, update, point, lean } = useMarketSignal(market);
  return <><div className={mini ? 'mini-chart' : 'board-chart'}><ForkChart series={series} nowIndex={series.nowIndex} mode={mini ? 'mini' : 'card'} onNowChange={update} /></div><div className="signal-data"><SignalTiles yes={point.yes} no={point.no} />{!board && <div className="milestone-card-footer"><LeanChip value={lean} />{mini ? <span>Volume {compactUsd(market.volume)}</span> : <a href={`#/m/${market.id}`} className="button btn-bubbles">Open <span aria-hidden="true">›</span></a>}{mini && <span className="card-arrow" aria-hidden="true">›</span>}</div>}</div></>;
}
