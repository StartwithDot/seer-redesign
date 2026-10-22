import { cloneElement, useEffect, useId, useRef, useState, type ReactElement, type HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
/** Shared viewport-contained explanation; scrolling always dismisses stale anchors. */
export function Tooltip({ text, children, pinOnClick = false }: { text: string; pinOnClick?: boolean; children: ReactElement<HTMLAttributes<HTMLElement>> }) {
  const id = useId(), timer = useRef(0), anchor = useRef<HTMLElement | null>(null), popup = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ left: number; top: number } | null>(null);
  const pinned = useRef(false);
  const hide = () => { clearTimeout(timer.current); setPosition(null); };
  const show = (element: HTMLElement) => {
    clearTimeout(timer.current); anchor.current = element;
    timer.current = window.setTimeout(() => {
      const r = element.getBoundingClientRect();
      if (r.bottom > 0 && r.top < innerHeight) setPosition({ left: Math.max(8, Math.min(innerWidth - 248, r.left)), top: r.bottom + 8 });
    }, 300);
  };
  useEffect(() => {
    const dismiss = () => { pinned.current = false; hide(); };
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') dismiss(); };
    const outside = (e: PointerEvent) => { if (!anchor.current?.contains(e.target as Node)) dismiss(); };
    document.addEventListener('pointerdown', outside); document.addEventListener('keydown', key);
    window.addEventListener('scroll', dismiss, true); window.addEventListener('resize', dismiss);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', key); clearTimeout(timer.current); window.removeEventListener('scroll', dismiss, true); window.removeEventListener('resize', dismiss); };
  }, []);
  useEffect(() => {
    if (!position || !popup.current || !anchor.current) return;
    const r = anchor.current.getBoundingClientRect(), height = popup.current.offsetHeight;
    if (position.top + height > innerHeight - 8) setPosition({ ...position, top: Math.max(8, r.top - height - 8) });
  }, [position]);
  return <>{cloneElement(children, {
    'aria-describedby': position ? id : undefined,
    onMouseEnter: e => { children.props.onMouseEnter?.(e); show(e.currentTarget); },
    onClick: e => { children.props.onClick?.(e); if (pinOnClick) { e.stopPropagation(); pinned.current = !pinned.current; if (pinned.current) { clearTimeout(timer.current); anchor.current = e.currentTarget; const r = e.currentTarget.getBoundingClientRect(); setPosition({ left: Math.max(8, Math.min(innerWidth - 248, r.left)), top: r.bottom + 8 }); } else hide(); } },
    onMouseLeave: e => { children.props.onMouseLeave?.(e); if (!pinned.current) hide(); },
    onFocus: e => { children.props.onFocus?.(e); show(e.currentTarget); },
    onBlur: e => { children.props.onBlur?.(e); hide(); },
  })}{position && createPortal(<div ref={popup} id={id} role="tooltip" data-overlay className="shared-tooltip" style={position}>{text}</div>, document.body)}</>;
}
