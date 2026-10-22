import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
export function Popover({ anchor, width, height, label, onClose, children, className = '' }: {
 anchor: HTMLElement; width: number; height: number; label: string; onClose: () => void; children: ReactNode; className?: string;
}) {
 const host = useRef<HTMLDivElement>(null);
 const [position, setPosition] = useState({ left: 8, top: 8 });
 useLayoutEffect(() => {
  const update = () => { const r = anchor.getBoundingClientRect(), card = anchor.closest('article')?.getBoundingClientRect() ?? r;
   setPosition({ left: Math.max(8, Math.min(card.left, innerWidth - width - 8)), top: r.bottom + height + 16 > innerHeight ? Math.max(8, r.top - height - 8) : r.bottom + 8 }); };
  update(); const previous = document.activeElement;
  const dismiss = (e: PointerEvent) => { if (e.target instanceof Element && e.target.closest('dialog[open]')) return; if (!host.current?.contains(e.target as Node) && !anchor.contains(e.target as Node)) onClose(); };
  const key = (e: KeyboardEvent) => { if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); onClose(); } };
  document.addEventListener('pointerdown', dismiss); document.addEventListener('keydown', key);
  window.addEventListener('resize', update); window.addEventListener('scroll', update, true);
  return () => { document.removeEventListener('pointerdown', dismiss); document.removeEventListener('keydown', key); window.removeEventListener('resize', update); window.removeEventListener('scroll', update, true); if (previous instanceof HTMLElement && previous.isConnected) previous.focus({ preventScroll: true }); };
 }, [anchor, width, height, onClose]);
 return createPortal(<div ref={host} role="dialog" aria-modal="false" aria-label={label} data-overlay="quickbuy" className={`popover ${className}`} style={{ ...position, width, height }} onClick={e => e.stopPropagation()}>{children}</div>, document.body);
}
