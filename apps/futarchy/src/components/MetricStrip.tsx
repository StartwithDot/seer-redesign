import { Tooltip } from './Tooltip';
import { verdict } from '../math/twap';
import { RollingNumber } from './RollingNumber';
interface Props { pair?: string; yes: number; no: number; spot: number }
export function MetricStrip({ pair = 'WETH/USDS', yes, no, spot }: Props) {
  return <dl className="metric-strip"><div><dt>Trading Pair</dt><dd>{pair}</dd></div>{[
    { label: 'YES Price', value: yes, className: 'yes-value' }, { label: 'NO Price', value: no, className: 'no-value' },
    { label: 'Spot Price', value: spot, className: '' }, { label: 'Impact (spot)', value: (yes - no) / no * 100, className: `verdict-${verdict((yes - no) / no).toLowerCase()}` },
  ].map(({ label, value, className }) => <Tooltip key={label} text={label === 'YES Price' ? 'Price if the proposal passes' : label === 'NO Price' ? 'Price if it fails' : label === 'Spot Price' ? 'Current unconditional token price' : 'YES vs NO gap'}><div tabIndex={0}><dt>{label}</dt><dd className={className}><RollingNumber value={value} signed={label === 'Impact (spot)'} suffix={label === 'Impact (spot)' ? '%' : 'USDS'} decimals={2} flash={label === 'Impact (spot)'} /></dd></div></Tooltip>)}</dl>;
}
