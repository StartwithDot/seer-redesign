export const NOW = 1792367760;
export const SDAI_USD = 7257.34 / 5750; // Capture 007: USD open interest / sDAI open interest.
let override: number | undefined;
export const isLive = () => typeof location !== 'undefined' && new URLSearchParams(location.search).get('live') === '1';
export const now = () => override ?? (isLive() ? Date.now() / 1000 : NOW);
export function setNow(ts: number) { if (!Number.isFinite(ts)) throw new Error('Invalid timestamp'); override = ts; }
