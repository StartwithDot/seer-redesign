import { Tooltip } from './Tooltip';
import { motion, useReducedMotion } from 'motion/react';
const explanations = ['Two markets price the token: one if the proposal passes, one if it fails.', 'The gap between the two prices.', 'Above +1% includes, below −1% excludes, otherwise neutral.'];
const steps = [
  { label: 'If Yes · If No', paths: ['M0 24H20C36 24 32 8 52 8H64', 'M20 24C36 24 32 40 52 40H64'] },
  { label: 'Impact', paths: ['M0 32C20 32 24 8 44 8H64', 'M0 32C20 32 24 24 44 24H64', 'M48 8V24M44 8H52M44 24H52'] },
  { label: 'Include · Neutral · Exclude', paths: ['M0 16H64M0 32H64', 'M0 24H20L32 8L44 24H64'] },
];
export function GlyphStrip() {
  const reduced = useReducedMotion();
  return <div className="glyph-strip" aria-label="How it resolves">{steps.map((step, index) => <Tooltip key={step.label} text={explanations[index]}><motion.div tabIndex={0} initial="hidden" whileInView="visible" viewport={{ once: true }} >{index > 0 && <svg className="resolve-connector" viewBox="0 0 40 4" aria-hidden="true"><motion.path d="M0 2H40" stroke="var(--text-3)" variants={{ hidden: { pathLength: reduced ? 1 : 0 }, visible: { pathLength: 1 } }} transition={{ duration: .42 }} /></svg>}<svg viewBox="0 0 64 48" width="64" height="48" fill="none" aria-hidden="true">{index === 1 && <path d="M0 32C20 32 24 8 44 8H64V24H44C24 24 20 32 0 32Z" fill="var(--violet-soft)" />}{step.paths.map((d, i) => <motion.path key={d} d={d} stroke={i === 0 ? 'var(--violet-text)' : 'var(--text-2)'} strokeWidth="1.5" variants={{ hidden: { pathLength: reduced ? 1 : 0 }, visible: { pathLength: 1 } }} transition={{ duration: .42, ease: [.2, .8, .2, 1], delay: reduced ? 0 : index * .14 }} />)}</svg><span>{step.label}</span></motion.div></Tooltip>)}</div>;
}
