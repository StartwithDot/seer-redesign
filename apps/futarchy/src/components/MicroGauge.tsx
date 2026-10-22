import { Tooltip, impactExplanation } from './Tooltip';
import { verdict } from '../math/twap';
export function MicroGauge({ value }: { value: number }) {
  return <Tooltip text={impactExplanation(value)}><div tabIndex={0} className={`micro-gauge verdict-${verdict(value).toLowerCase()}`} role="img" aria-label={`Impact ${ (value * 100).toFixed(2)}%`}><span className="micro-zone" /><i style={{ left: `${Math.max(0, Math.min(100, (value + .03) / .06 * 100))}%` }} /></div></Tooltip>;
}
