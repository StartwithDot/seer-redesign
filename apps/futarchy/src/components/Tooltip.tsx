import { cloneElement, useEffect, useId, useRef, useState, type ReactElement, type HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
/** Shared viewport-contained explanation; scrolling always dismisses stale anchors. */
export function Tooltip({ text, children }: { text: string; children: ReactElement<HTMLAttributes<HTMLElement>> }) {
  const id = useId(), timer = useRef(0), anchor = useRef<HTMLElement | null>(null), popup = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ left: number; top: number } | null>(null);
  const hide = () => { clearTimeout(timer.current); setPosition(null); };
  const show = (element: HTMLElement) => {
    clearTimeout(timer.current); anchor.current = element;
    timer.current = window.setTimeout(() => {
      const r = element.getBoundingClientRect();
      if (r.bottom > 0 && r.top < innerHeight) setPosition({ left: Math.max(8, Math.min(innerWidth - 248, r.left)), top: r.bottom + 8 });
    }, 300);
  };
  useEffect(() => {
    const dismiss = () => hide();
    window.addEventListener('scroll', dismiss, true); window.addEventListener('resize', dismiss);
    return () => { clearTimeout(timer.current); window.removeEventListener('scroll', dismiss, true); window.removeEventListener('resize', dismiss); };
  }, []);
  useEffect(() => {
    if (!position || !popup.current || !anchor.current) return;
    const r = anchor.current.getBoundingClientRect(), height = popup.current.offsetHeight;
    if (position.top + height > innerHeight - 8) setPosition({ ...position, top: Math.max(8, r.top - height - 8) });
  }, [position]);
  return <>{cloneElement(children, {
    'aria-describedby': position ? id : undefined,
    onMouseEnter: e => { children.props.onMouseEnter?.(e); show(e.currentTarget); },
    onMouseLeave: e => { children.props.onMouseLeave?.(e); hide(); },
    onFocus: e => { children.props.onFocus?.(e); show(e.currentTarget); },
    onBlur: e => { children.props.onBlur?.(e); hide(); },
  })}{position && createPortal(<div ref={popup} id={id} role="tooltip" data-overlay className="shared-tooltip" style={position}>{text}</div>, document.body)}</>;
}
export const impactExplanation = (value: number) => `Impact ${value >= 0 ? '+' : '−'}${Math.abs(value * 100).toFixed(2)}% ${value > .01 ? 'is above +1%: Include' : value < -.01 ? 'is below −1%: Exclude' : 'is within ±1%: Neutral'}`;
