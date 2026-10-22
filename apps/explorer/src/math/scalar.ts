// Fixed-point bounds: on-chain values >= 10^15 use 18 decimal places.
export function decodeBound(value: string): number {
 const raw = BigInt(value); return Number(raw) / (raw >= 10n ** 15n || raw <= -(10n ** 15n) ? 1e18 : 1);
}
// Expected scalar settlement = L + (U-L) * UP / (UP+DOWN), without normalizing displayed odds.
export function scalarEstimate(lower: number, upper: number, up: number | null, down: number | null) {
 return up === null || down === null || up + down === 0 ? null : lower + (upper - lower) * up / (up + down);
}
// A-05: approximate multi-scalar value = round(p_i / 100 * upper bound).
export const outcomeValue = (odds: number | null, upper: number) => odds === null ? null : Math.round(odds / 100 * upper);
