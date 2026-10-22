export function Switch({ label, checked, onChange }: { label: string; checked: boolean; onChange: (checked: boolean) => void }) {
 return <button className="filter-switch" role="switch" aria-checked={checked} onClick={() => onChange(!checked)}><span>{label}</span><span className="switch-track" aria-hidden="true"><span /></span></button>;
}
