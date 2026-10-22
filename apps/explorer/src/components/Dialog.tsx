import { useEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
export function Dialog({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
 const ref = useRef<HTMLDialogElement>(null);
 useEffect(() => { const previous = document.activeElement; ref.current?.showModal(); return () => { if (previous instanceof HTMLElement && previous.isConnected) previous.focus(); }; }, []);
 return createPortal(<dialog ref={ref} className="market-dialog" aria-label={title} onCancel={e => { e.preventDefault(); onClose(); }} onClick={e => { if (e.target === e.currentTarget) { const r = e.currentTarget.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) onClose(); } }}><header><h2>{title}</h2><button className="icon-button" aria-label="Close" onClick={onClose}>×</button></header>{children}</dialog>, document.body);
}
