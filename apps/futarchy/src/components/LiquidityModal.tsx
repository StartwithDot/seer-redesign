import { useEffect, useRef, useState } from 'react';
export function LiquidityModal({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [amounts, setAmounts] = useState({ USDS: '', WETH: '' });
  useEffect(() => { const previous = document.activeElement; dialog.current?.showModal(); return () => { if (previous instanceof HTMLElement) previous.focus(); }; }, []);
  const update = (token: 'USDS' | 'WETH', value: string) => setAmounts(a => ({ ...a, [token]: value === '' ? '' : String(Math.min(1000000, Math.max(0, Number(value) || 0))) }));
  return <dialog ref={dialog} className="card liquidity-modal" aria-labelledby="liquidity-title" onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="section-heading"><h2 id="liquidity-title">Add Liquidity</h2><button autoFocus className="icon-button" aria-label="Close" onClick={onClose}>×</button></div>
    {(['USDS', 'WETH'] as const).map(token => <div className="liquidity-field" key={token}><div className="amount-label"><label htmlFor={`liquidity-${token}`}>Amount ({token})</label><button onClick={() => update(token, '0')}>Max</button></div><input id={`liquidity-${token}`} type="number" inputMode="decimal" min="0" max="1000000" step="any" value={amounts[token]} onChange={e => update(token, e.target.value)} /><div className="quick-amounts">{[1, 5, 20, 100].map(n => <button key={n} onClick={() => update(token, String((Number(amounts[token]) || 0) + n))}>+{n}</button>)}</div></div>)}
    <button className="button button-primary" onClick={() => { onClose(); window.dispatchEvent(new CustomEvent('seer:connect')); }}>Review liquidity</button>
  </dialog>;
}
