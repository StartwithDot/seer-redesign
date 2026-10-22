import { useEffect, useId, useRef, useState } from 'react';
import './tour.css';
const steps = [
 ['hero', 'Trending markets rotate here. Hover to pause.'],
 ['card', 'Click a price to buy. Click the card to open.'],
 ['drawer', 'Hover a card for status, liquidity and links.'],
 ['rail', 'Every filter lives in this strip.'],
 ['search', 'Search markets, outcomes or collections. Press /.'],
];
export function GuidedTour({ initialStep = 0, onClose }: { initialStep?: number; onClose: () => void }) {
  const [step, setStep] = useState(initialStep);
  const [rect, setRect] = useState({ x: 16, y: 80, width: 0, height: 0 });
  const [viewport, setViewport] = useState({ width: innerWidth, height: innerHeight });
  const dialog = useRef<HTMLDialogElement>(null), next = useRef<HTMLButtonElement>(null);
  const mask = useId();
  const finish = () => {
    location.hash = '/'; onClose();
  };
  useEffect(() => {
    const previous = document.activeElement;
    dialog.current?.showModal();
    const root = document.querySelector<HTMLElement>('.app-shell');
    root?.setAttribute('data-touring', 'true');
    return () => {
      root?.removeAttribute('data-touring');
      requestAnimationFrame(() => {
        if (previous instanceof HTMLElement && previous.isConnected) previous.focus({ preventScroll: true });
        else document.querySelector<HTMLButtonElement>('[aria-label="Help"]')?.focus({ preventScroll: true });
      });
    };
  }, []);
  useEffect(() => {
    location.hash = '/';
    next.current?.focus({ preventScroll: true });
    let frame = 0, settle = 0;
    let target: HTMLElement | null = null;
    const measure = () => {
      const selectors = ['[data-tour="hero"]', '.market-card', '.market-card', '.filter-rail, .mobile-filter-button', '.search-pill, .mobile-search'];
      const element = document.querySelector<HTMLElement>(selectors[step]) ?? document.querySelector<HTMLElement>('main');
      if (!element) { frame = requestAnimationFrame(measure); return; }
      if (element !== target) {
        target = element;
        element.scrollIntoView({ block: 'center', behavior: 'instant' });
        frame = requestAnimationFrame(() => { settle = requestAnimationFrame(measure); });
        return;
      }
      const box = element.getBoundingClientRect();
      setRect({ x: box.left - 8, y: box.top - 8, width: box.width + 16, height: box.height + 16 });
      setViewport({ width: innerWidth, height: innerHeight });
    };
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(measure); };
    schedule();
    window.addEventListener('resize', schedule);
    window.addEventListener('scroll', schedule, true);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.querySelector('main')!);
    return () => { cancelAnimationFrame(frame); cancelAnimationFrame(settle); observer.disconnect(); window.removeEventListener('resize', schedule); window.removeEventListener('scroll', schedule, true); };

  }, [step]);
  const width = Math.min(352, viewport.width - 32), height = 196;
  const below = rect.y + rect.height + 12;
  const side = rect.x - width - 12 >= 16;
  const flipped = below + height > viewport.height - 16;
  const top = side ? Math.max(16, Math.min(rect.y, viewport.height - height - 16)) : flipped ? Math.max(16, rect.y - height - 12) : below;
  const left = side ? rect.x - width - 12 : Math.max(16, Math.min(rect.x, viewport.width - width - 16));
  return <dialog ref={dialog} className="guided-tour" aria-labelledby="tour-message" aria-describedby="tour-progress" onCancel={event => { event.preventDefault(); finish(); }} onKeyDown={event => {
    event.stopPropagation();
    if (event.key !== 'Tab') return;
    const buttons = Array.from(dialog.current?.querySelectorAll<HTMLButtonElement>('button:not(:disabled)') ?? []);
    const first = buttons[0], last = buttons[buttons.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  }}>
    <svg className="tour-shade" width="100%" height="100%" aria-hidden="true"><defs><mask id={mask}><rect width="100%" height="100%" fill="white" /><rect data-tour-cutout x={rect.x} y={rect.y} width={rect.width} height={rect.height} rx="20" fill="black" /></mask></defs><rect width="100%" height="100%" className="tour-dim" mask={`url(#${mask})`} /></svg>
    <section className={`tour-coach card ${side ? 'coach-left' : flipped ? 'coach-above' : 'coach-below'}`} style={{ width, top, left }}>
      <div className="tour-progress" id="tour-progress"><span>{step + 1}/{steps.length}</span><div aria-hidden="true">{steps.map((_, i) => <i key={i} className={i === step ? 'current' : ''} />)}</div><kbd>Esc</kbd></div>
      <p id="tour-message" aria-live="polite">{steps[step][1]}</p>
      <div className="tour-actions"><button className="button secondary" onClick={finish}>Skip</button><button className="button secondary" disabled={step === 0} onClick={() => setStep(s => s - 1)}>Back</button><button ref={next} className="button primary" onClick={() => step === 4 ? finish() : setStep(s => s + 1)}>Next</button></div>
    </section>
  </dialog>;
}
