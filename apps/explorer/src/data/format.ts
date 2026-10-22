export function compact(value: number): string {
 if (!Number.isFinite(value)) return '—';
 const absolute = Math.abs(value), scale = absolute >= 1e9 ? 1e9 : absolute >= 1e6 ? 1e6 : absolute >= 1e3 ? 1e3 : 1;
 return `${value < 0 ? '−' : ''}${(absolute / scale).toFixed(scale === 1 ? 2 : Math.max(0, 2 - Math.floor(Math.log10(absolute / scale))))}${scale === 1e9 ? 'B' : scale === 1e6 ? 'M' : scale === 1e3 ? 'K' : ''}`;
}
export const format = (value: number) => Number.isFinite(value) ? `${value < 0 ? '−' : ''}$${compact(Math.abs(value))}` : '—';
export const percent = (value: number | null) => value === null ? '—' : `${value.toFixed(1)}%`;
export const shares = (value: number) => value > 0 && value < .001 ? '<0.001' : value >= 1000 ? compact(value) : value.toFixed(4);
export const address = (value: string) => `${value.slice(0, 6)}…${value.slice(-4)}`;
