import { useEffect, useRef, useState } from 'react';
type Wallet = { request(options: { method: string }): Promise<unknown> };
export function ConnectModal({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [message, setMessage] = useState('Use your browser wallet to connect your account.');
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    const previous = document.activeElement;
    dialog.current?.showModal();
    return () => { if (previous instanceof HTMLElement) previous.focus(); };
  }, []);
  const connect = async () => {
    const wallet = (window as Window & { ethereum?: Wallet }).ethereum;
    if (!wallet) { setMessage('No browser wallet found. Install or enable an Ethereum wallet, then try again.'); return; }
    setBusy(true);
    try {
      const accounts = await wallet.request({ method: 'eth_requestAccounts' });
      if (!Array.isArray(accounts) || typeof accounts[0] !== 'string') throw new Error('No account selected.');
      (window as Window & { seerShell?: { setConnected(address: string | null): void } }).seerShell?.setConnected(`${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`);
      onClose();
    } catch { setMessage('Connection was not completed. Try again when your wallet is ready.'); }
    finally { setBusy(false); }
  };
  return <dialog ref={dialog} className="card connect-modal" aria-labelledby="connect-title" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="section-heading"><h2 id="connect-title">Connect a wallet</h2><button className="icon-button" aria-label="Close" onClick={onClose}>×</button></div>
    <p role="status">{message}</p>
    <button className="button button-primary" disabled={busy} onClick={() => void connect()}>{busy ? 'Waiting for wallet' : 'Use browser wallet'}</button>
  </dialog>;
}
