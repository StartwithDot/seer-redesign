import type { SVGProps } from 'react';

export function ForkMark({ size = 32, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
    <path d="M7 26h6V16L5 8" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M13 19 25 7h-7M25 7v7" stroke="var(--violet-text)" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" />
  </svg>;
}
