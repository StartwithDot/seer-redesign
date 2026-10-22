import { useId } from 'react';
export interface Segment<T extends string> { value: T; label: string; disabled?: boolean }
interface Props<T extends string> {
  options: readonly Segment<T>[]; value: T; onChange: (value: T) => void; label: string;
  variant?: 'surface' | 'underline';
}
export function Segmented<T extends string>({ options, value, onChange, label, variant = 'surface' }: Props<T>) {
  const id = useId();
  const selected = Math.max(0, options.findIndex(option => option.value === value));
  return <div className={`segmented segmented--${variant}`} role={label === 'Status' ? 'group' : 'radiogroup'} aria-label={label}>
    <span className="segmented-thumb" aria-hidden="true" style={{ width: `calc((100% - 8px) / ${options.length})`, transform: `translateX(${selected * 100}%)` }} />
    {options.map((option, index) => <button key={option.value} id={`${id}-${index}`} type="button" role={label === 'Status' ? undefined : 'radio'} aria-label={option.label} aria-pressed={label === 'Status' ? value === option.value : undefined} aria-checked={label === 'Status' ? undefined : value === option.value} disabled={option.disabled}
      tabIndex={selected === index ? 0 : -1} onClick={() => onChange(option.value)} onKeyDown={event => {
        if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const direction = event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1;
        let next = event.key === 'Home' ? 0 : event.key === 'End' ? options.length - 1 : (index + direction + options.length) % options.length;
        for (let tries = 0; tries < options.length && options[next].disabled; tries++) next = (next + direction + options.length) % options.length;
        if (options[next].disabled) return;
        onChange(options[next].value);
        document.getElementById(`${id}-${next}`)?.focus();
      }}>{option.label}</button>)}
  </div>;
}
