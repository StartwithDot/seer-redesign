import { useEffect, useState } from 'react';
interface Props { onSearch: () => void; onTour: () => void }
export function Header({ onSearch, onTour }: Props) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <header className={`site-header sb${scrolled ? ' is-scrolled' : ''}`}>
    <div className="page header-inner sb-row" data-align>
    <nav className="header-nav sb-tabs" aria-label="Sections"><a className="sb-tab" href="#/" onClick={() => requestAnimationFrame(() => document.getElementById('milestones')?.scrollIntoView())}>Milestones</a><a className="sb-tab" href="#/" onClick={() => requestAnimationFrame(() => document.getElementById('organizations')?.scrollIntoView())}>Organizations</a></nav><button className="search-pill sb-search" aria-label="Search" onClick={onSearch}><svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="8" cy="8" r="5"/><path d="m12 12 5 5"/></svg><span>Search</span><kbd>/</kbd></button><div className="header-actions sb-actions"><button className="icon-button sb-btn" aria-label="Tour" onClick={onTour}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor"><circle cx="10" cy="10" r="8"/><path d="M8 7a2 2 0 1 1 3 2c-1 1-1 1-1 3m0 2v1"/></svg></button></div></div>
  </header>;
}
