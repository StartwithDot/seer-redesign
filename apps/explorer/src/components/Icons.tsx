import type { Verification } from '../data/types';
export function VerificationIcon({ status }: { status: Verification }) {
 return <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
 {status === 'Not Verified' ? <><path d="M10 2 19 18H1Z" /><path d="M10 7v5m0 2v1" /></> : <><circle cx="10" cy="10" r="8" strokeDasharray={status === 'Verifying' ? '4 3' : undefined} />{status === 'Verified' ? <path d="m6 10 3 3 5-6" /> : status === 'Verifying' ? <circle cx="10" cy="10" r="1.5" fill="currentColor" /> : <path d="M10 5v7m0 2v1" />}</>}
 </svg>;
}
export function StarIcon({ filled }: { filled: boolean }) { return <svg width="16" height="16" viewBox="0 0 20 20" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m10 2 2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9L7.5 7Z" /></svg>; }
