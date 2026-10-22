import { useEffect, useRef, useState } from 'react';
import { Sheet } from '../components/Sheet';
import { RollingNumber } from '../components/RollingNumber';
import { balance, connect, sign, switchChain, useWallet } from '../data/wallet';
import { quote } from '../data/quote';
import { percent } from '../data/format';
import { marketLink } from '../data/links';
import type { BuySelection } from './useQuickBuy';
export function QuickBuy({ selection, onClose }: { selection: BuySelection; onClose: () => void }) {
 const { market: m, outcome, } = selection, wallet = useWallet();
 const [amount, setAmount] = useState(''), [debounced, setDebounced] = useState(0), [connecting, setConnecting] = useState(false), [pending, setPending] = useState(false), [error, setError] = useState('');
 const timer = useRef(0), mounted = useRef(true), input = useRef<HTMLInputElement>(null);
 useEffect(() => { input.current?.focus(); mounted.current = true; return () => { mounted.current = false; clearTimeout(timer.current); }; }, []);
 useEffect(() => { const timer = window.setTimeout(() => setDebounced(Number(amount.replace(',', '.')) || 0), 120); return () => clearTimeout(timer); }, [amount]);
 const value = Number(amount.replace(',', '.')) || 0, result = quote(m, outcome, debounced), unit = m.collateralSymbol, closed = m.status === 'Closed', wrongChain = wallet.chainId !== m.chainId, short = value > balance(unit);
 const tradingUrl = `${marketLink(m)}?${new URLSearchParams({ outcome: String(outcome), amount: amount.replace(',', '.') })}`;
 const label = closed ? 'Market closed' : !wallet.connected ? 'Connect wallet to trade' : wrongChain ? `Switch to ${m.chainName}` : value <= 0 ? 'Enter an amount' : short ? 'Not enough balance.' : 'Confirm';
 const disabled = closed || (wallet.connected && (value <= 0 || (!wrongChain && short))) || pending;
 useEffect(() => { const key = (e: KeyboardEvent) => { if (e.key === 'Escape') { onClose(); selection.anchor.focus(); } }; window.addEventListener('keydown', key); return () => window.removeEventListener('keydown', key); }, [onClose, selection.anchor]);
 const submit = async () => { if (disabled) return; if (!wallet.connected) { setConnecting(true); return; } if (wrongChain) { switchChain(m.chainId); return; }
  setPending(true); setError(''); try { await sign(); } catch { if (mounted.current) { setError('User rejected the request.'); timer.current = window.setTimeout(() => setError(''), 4000); } } finally { if (mounted.current) setPending(false); }
 };
 const content = <form className="quickbuy-content" onClick={e => e.stopPropagation()} onSubmit={e => { e.preventDefault(); void submit(); }}><header className="quickbuy-head"><span>{m.outcomes[outcome]}</span><strong>{percent(m.odds[outcome])}</strong></header>
 <label className="quick-amount"><input ref={input} aria-label={`Amount in ${unit}`} placeholder={`Amount in ${unit}`} inputMode="decimal" autoComplete="off" value={amount} onChange={e => { const s = e.target.value; if (/^\d*(?:[.,]\d{0,6})?$/.test(s) && Number(s.replace(',', '.')) <= 1e9) { setAmount(s); setError(''); } }} /></label>
 <p className="quickbuy-summary" aria-live="polite">You get ~<RollingNumber value={result?.shares ?? 0} decimals={4} /> shares · pays $<RollingNumber value={result?.shares ?? 0} decimals={2} /> if {m.outcomes[outcome]}</p>{error && <span className="trade-error" role="alert">{error}</span>}
 <div className="quickbuy-actions"><button className="button primary" disabled={disabled} aria-describedby={disabled ? 'quickbuy-state' : undefined} aria-busy={pending}>{pending && <span className="trade-spinner" aria-hidden="true" />}{label}</button><button type="button" className="button secondary" aria-label="Close" onClick={onClose}>×</button></div><span id="quickbuy-state" className="sr-only">{label}</span>
 <div className="quickbuy-links"><a href={tradingUrl}>Open trading page →</a></div></form>;
 return <><div className="quickbuy" role="region" aria-label={`Buy ${m.outcomes[outcome]}`}>{content}</div>{connecting && <Sheet label="Connect" onClose={() => setConnecting(false)}><div className="sheet-title"><span>Connect</span><button className="icon-button" aria-label="Close" onClick={() => setConnecting(false)}>×</button></div><button className="wallet-row" onClick={() => { connect(); setConnecting(false); }}>Mock wallet <span>0x0000…dEaD</span></button></Sheet>}</>;
}
