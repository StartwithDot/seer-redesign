const items = [['Asked by', 'Every market has an asker (DAOs, treasuries, agents)'], ['Priced', 'What the crowd expects, as probabilities'], ['How to use', 'Read the prices; trading is optional']] as const;
export function AskerStrip() {
 return <dl className="asker-strip">{items.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>;
}
