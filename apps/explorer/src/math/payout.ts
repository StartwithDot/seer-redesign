// One winning share pays one collateral; scalar shares pay at most one.
export function payout(shares: number, amount: number) {
 const potentialReturn = shares - amount;
 return { payout: shares, potentialReturn, potentialReturnPercent: amount > 0 ? potentialReturn / amount * 100 : 0 };
}
// Spot estimate: shares = amount / (odds / 100). Zero or missing price cannot quote.
export const spotShares = (amount: number, odds: number | null) => odds !== null && odds > 0 ? amount / (odds / 100) : null;
