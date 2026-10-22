import { useEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
export function Sheet({ label, onClose, children }: { label: string; onClose: () => void; children: ReactNode }) {
 const dialog = useRef<HTMLDialogElement>(null);
 useEffect(() => { const previous = document.activeElement; dialog.current?.showModal(); return () => { if (previous instanceof HTMLElement && previous.isConnected) previous.focus({ preventScroll: true }); }; }, []);
 return createPortal(<dialog ref={dialog} className="bottom-sheet" data-overlay="sheet" aria-label={label} onKeyDown={e => { if (e.key === 'Escape') e.stopPropagation(); }} onCancel={e => { e.preventDefault(); e.stopPropagation(); onClose(); }} onClick={e => { e.stopPropagation(); if (e.target === e.currentTarget) { const r = e.currentTarget.getBoundingClientRect(); if (e.clientY < r.top) onClose(); } }}><div className="sheet-handle" aria-hidden="true" />{children}</dialog>, document.body);
}
export function useCompact() {
 const [compact, setCompact] = useState(() => matchMedia('(max-width: 599px)').matches);
 useEffect(() => { const media = matchMedia('(max-width: 599px)'), update = () => setCompact(media.matches); media.addEventListener('change', update); return () => media.removeEventListener('change', update); }, []);
 return compact;
}
