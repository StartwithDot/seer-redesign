import { useCallback, useEffect, useRef, useState } from 'react';
export function useDrawer(id: string) {
 const [open, setOpen] = useState(false), timer = useRef(0), pinned = useRef(false);
 const close = useCallback(() => { clearTimeout(timer.current); pinned.current = false; setOpen(false); }, []);
 const show = useCallback(() => { clearTimeout(timer.current); window.dispatchEvent(new CustomEvent('explorer:drawer', { detail: id })); setOpen(true); }, [id]);
 useEffect(() => {
  const other = (e: Event) => { if ((e as CustomEvent<string>).detail !== id) close(); };
  const key = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
  window.addEventListener('explorer:drawer', other); window.addEventListener('explorer:quickbuy', close); window.addEventListener('keydown', key);
  return () => { clearTimeout(timer.current); window.removeEventListener('explorer:drawer', other); window.removeEventListener('explorer:quickbuy', close); window.removeEventListener('keydown', key); };
 }, [id, close]);
 return { open, close, show, enter: () => { clearTimeout(timer.current); timer.current = window.setTimeout(show, 120); }, leave: () => { clearTimeout(timer.current); if (!pinned.current) timer.current = window.setTimeout(close, 200); }, pin: () => { if (open && pinned.current) close(); else { show(); pinned.current = true; } } };
}
