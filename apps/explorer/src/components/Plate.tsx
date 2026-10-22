export function Plate({ title = 'Not in this build' }: { title?: string }) {
 return <section className="plate" data-align><h1>{title}</h1><a className="button secondary" href="https://app.seer.pm/" target="_blank" rel="noreferrer">Open in Seer app ↗</a><a className="button" href="#/">Markets</a></section>;
}
