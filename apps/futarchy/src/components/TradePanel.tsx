import { useState } from 'react';
import { Segmented } from './Segmented';
import { RollingNumber } from './RollingNumber';
export function TradePanel({ yes, no, disabled = false, status = 'Resolved' }: { yes: number; no: number; disabled?: boolean; status?: string }) {
  const [world, setWorld] = useState('yes'), [side, setSide] = useState('buy'), [amount, setAmount] = useState('100');
  const value = Number(amount) || 0;
  const clamp = (next: number) => setAmount(String(Math.min(1000000, Math.max(0, Math.round(next * 100) / 100))));
  return <section data-tour="trade" className={`card trade-panel trade-panel--${world}`} aria-label="Amount (USDS)">
    <fieldset disabled={disabled} className="trade-fields"><Segmented label="Outcome" value={world} onChange={setWorld} options={[{ value: 'yes', label: 'If Yes' }, { value: 'no', label: 'If No' }]} />
    <Segmented label="Buy" value={side} onChange={setSide} options={[{ value: 'buy', label: 'Buy' }, { value: 'sell', label: 'Sell' }]} variant="underline" />
    <div className="amount-label"><label htmlFor="trade-amount">Amount (USDS)</label><button type="button" onClick={() => clamp(0)}>Max</button></div>
    <input id="trade-amount" inputMode="decimal" type="number" min="0" max="1000000" step="0.01" value={amount} onChange={event => { const raw = event.target.value; if (raw === '') setAmount(''); else if (Number.isFinite(Number(raw))) clamp(Number(raw)); }} onBlur={() => clamp(value)} />
    <div className="quick-amounts">{[1, 5, 20, 100].map(n => <button type="button" key={n} onClick={() => clamp(value + n)}>+${n}</button>)}</div>
    <div className="available"><span>Available</span><span>−</span></div>
    <div className="trade-outcomes"><div><span>If Yes</span><span>Receive <RollingNumber value={value / (world === 'yes' ? yes : no)} decimals={7} suffix=" WETH" /></span></div><div><span>If No</span><span>Recover <RollingNumber value={value} suffix=" USDS" /></span></div></div>
    <button type="button" className="button btn-bubbles button-primary" onClick={() => window.dispatchEvent(new CustomEvent('seer:connect'))}>{disabled ? status : 'Review trade'}</button></fieldset>
  </section>;
}
