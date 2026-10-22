import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { markets } from '../data/markets';
import { navigate } from '../router';
import { filterParams, readFilters } from '../data/filters';
// Adapted from Futarchy: modal focus restoration, keyboard selection and grouped results.
export function CommandPalette({ onClose }: { onClose: () => void }) {
 const dialog = useRef<HTMLDialogElement>(null), [query, setQuery] = useState(''), [selected, setSelected] = useState(-1);
 const results = useMemo(() => {
  const q = query.trim().toLowerCase();
  const matching = markets.filter(m => m.question.toLowerCase().includes(q)).slice(0, 6).map(m => ({ group: 'Markets', label: m.question, image: m.image, href: `#/markets/${m.chainId}/${m.slug}` }));
  const outcomes = q ? markets.flatMap(m => m.outcomes.filter(o => o.toLowerCase().includes(q)).slice(0, 2).map(o => ({ group: 'Outcomes', label: `${o} · ${m.question}`, image: m.image, href: `#/markets/${m.chainId}/${m.slug}` }))).slice(0, 6) : [];
  return [...matching, ...outcomes, ...('my collections'.includes(q) ? [{ group: 'Collections', label: 'My collections', image: undefined, href: '#/collections/default' }] : [])];
 }, [query]);
 useEffect(() => { const previous = document.activeElement; dialog.current?.showModal(); return () => { if (previous instanceof HTMLElement && previous.isConnected) previous.focus(); }; }, []);
 useEffect(() => { if (selected >= 0) document.getElementById(`palette-${selected}`)?.scrollIntoView({ block: 'nearest' }); }, [selected]);
 function choose(index: number) { if (results[index]) location.hash = results[index].href; else { const params = readFilters(new URLSearchParams(location.hash.split('?')[1])); navigate('/', filterParams({ ...params, marketName: query })); } onClose(); }
 return createPortal(<dialog ref={dialog} className="command-palette" aria-label="Search" onCancel={e => { e.preventDefault(); onClose(); }} onClick={e => { if (e.target === e.currentTarget) { const r = e.currentTarget.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) onClose(); } }} onKeyDown={e => { if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); setSelected(i => results.length ? i < 0 ? (e.key === 'ArrowDown' ? 0 : results.length - 1) : (i + (e.key === 'ArrowDown' ? 1 : -1) + results.length) % results.length : -1); } if (e.key === 'Enter') { e.preventDefault(); choose(selected); } }}>
 <div className="palette-search"><input autoFocus role="combobox" aria-expanded="true" aria-label="Search by market, outcome or collection" aria-controls="palette-results" aria-activedescendant={selected >= 0 ? `palette-${selected}` : undefined} placeholder="Search by market, outcome or collection" value={query} onChange={e => { setQuery(e.target.value); setSelected(-1); }} /><button className="icon-button" aria-label="Close" onClick={onClose}>×</button></div>
 <div id="palette-results" className="palette-results" role="listbox" aria-label="Search">{results.map((result, i) => <div key={`${result.group}-${result.href}-${i}`}>{(i === 0 || results[i - 1].group !== result.group) && <h2>{result.group}</h2>}<button id={`palette-${i}`} role="option" aria-selected={selected === i} onPointerMove={() => setSelected(i)} onClick={() => choose(i)}>{result.image && <img src={result.image} alt="" />}<span>{result.label}</span></button></div>)}</div><footer><kbd>↑</kbd><kbd>↓</kbd><kbd>Enter</kbd><kbd>Esc</kbd></footer></dialog>, document.body);
}
