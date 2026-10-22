export function TierPill({ tier }: { tier: string | null }) { return <span className="tier-pill">{tier?.toUpperCase() ?? 'N/A'}</span>; }
