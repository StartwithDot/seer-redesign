import { useEffect, useMemo, useRef, useState } from 'react';
import { getActiveMilestones, closedMilestones, organizations } from '../data/milestones';
interface Props { onClose: () => void; onTour: () => void }
export function CommandPalette({ onClose, onTour }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [query, setQuery] = useState(''), [selected, setSelected] = useState(0);
  const results = useMemo(() => {
    const all = [
      ...[...getActiveMilestones(), ...closedMilestones].map(m => ({ group: 'Milestones', label: `${m.token} · ${m.proposal}`, search: `${m.question.pre}${m.question.cond} ${m.orgSlug}`, run: () => { location.hash = `/m/${m.id}`; } })),
      ...organizations.map(o => ({ group: 'Organizations', label: o.name, search: o.slug, run: () => { location.hash = `/org/${o.slug}`; } })),
      { group: 'Actions', label: 'Take the tour', search: '', run: onTour },
      { group: 'Actions', label: 'Create market', search: '', run: () => { location.hash = '/create'; } },
    ];
    return all.filter(r => query.toLowerCase().split(/\s+/).every(token => `${r.label} ${r.search}`.toLowerCase().includes(token)));
  }, [query, onTour]);
  useEffect(() => {
    const previous = document.activeElement;
    dialog.current?.showModal();
    return () => { if (previous instanceof HTMLElement) previous.focus(); };
  }, []);
  useEffect(() => { document.getElementById(`palette-${selected}`)?.scrollIntoView({ block: 'nearest' }); }, [selected]);
  const choose = (index: number) => { results[index]?.run(); onClose(); };
  return <dialog ref={dialog} className="command-palette" aria-label="Search" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }} onKeyDown={event => {
    if (event.key === 'Escape') { event.stopPropagation(); return; }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); setSelected(i => results.length ? (i + (event.key === 'ArrowDown' ? 1 : -1) + results.length) % results.length : 0); }
    if (event.key === 'Enter') { event.preventDefault(); choose(selected); }
  }}>
    <input autoFocus aria-label="Search" placeholder="Search" value={query} onChange={event => { setQuery(event.target.value); setSelected(0); }} aria-controls="palette-results" aria-activedescendant={results[selected] ? `palette-${selected}` : undefined} />
    <div id="palette-results" className="palette-results" role="listbox" aria-label="Search results">{results.length ? results.map((r, i) => <div key={`${r.group}-${r.label}`}>
      {(i === 0 || results[i - 1].group !== r.group) && <h2>{r.group}</h2>}
      <button id={`palette-${i}`} role="option" aria-selected={selected === i} style={{ animationDelay: `${Math.min(i, 8) * 20}ms` }} onPointerMove={() => setSelected(i)} onClick={() => choose(i)}>{r.label}</button>
    </div>) : <p>No milestones</p>}</div>
    <footer><kbd>↑</kbd><kbd>↓</kbd><kbd>Enter</kbd><kbd>Esc</kbd></footer>
  </dialog>;
}
