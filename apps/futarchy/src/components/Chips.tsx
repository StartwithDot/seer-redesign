import { Tooltip, impactExplanation } from './Tooltip';
import { organizations } from '../data/milestones';
export function LeanChip({ value }: { value: number }) {
  const lean = value > .01 ? 'Include' : value < -.01 ? 'Exclude' : 'Neutral';
  return <Tooltip text={impactExplanation(value)}><span tabIndex={0} className={`chip lean-chip lean-${lean.toLowerCase()}`}>{lean}</span></Tooltip>;
}
export function OrgChip({ slug, linked = false }: { slug: string; linked?: boolean }) {
  const label = organizations.find(org => org.slug === slug)?.name ?? slug;
  return linked ? <a className="chip org-chip" href={`#/org/${slug}`}>{label}</a> : <span className="chip org-chip">{label}</span>;
}
