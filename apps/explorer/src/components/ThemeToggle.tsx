type Theme = 'dark' | 'light';
interface Props { theme: Theme; onChange: (origin: { x: number; y: number }) => void }
export function ThemeToggle({ theme, onChange }: Props) {
  return <button type="button" className="icon-button theme-toggle" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={theme === 'light'} onClick={event => {
    const rect = event.currentTarget.getBoundingClientRect();
    const origin = { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
    if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) { onChange(origin); return; }
    const transition = document.startViewTransition(() => onChange(origin));
    void transition.ready.then(() => {
      const radius = Math.hypot(Math.max(origin.x, innerWidth-origin.x), Math.max(origin.y, innerHeight-origin.y));
      document.documentElement.animate({clipPath:[`circle(0px at ${origin.x}px ${origin.y}px)`,`circle(${radius}px at ${origin.x}px ${origin.y}px)`]}, {duration:420,easing:'cubic-bezier(.2,.8,.2,1)',pseudoElement:'::view-transition-new(root)'});
    });
  }}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    {theme === 'dark' ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></> : <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" />}
  </svg></button>;
}
