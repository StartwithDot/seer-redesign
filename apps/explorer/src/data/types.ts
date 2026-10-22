import source from './markets-search.full.json';
export type RawMarket = (typeof source.markets)[number];
export type Question = RawMarket['questions'][number];
export type MarketType = 'Categorical' | 'Multi Categorical' | 'Scalar' | 'Multi Scalar';
export type MarketStatus = 'Reports not open yet' | 'Reports open' | 'Waiting for answer' | 'In Dispute' | 'Pending execution' | 'Closed';
export type Verification = 'Verified' | 'Verifying' | 'Challenged' | 'Not Verified';
export interface Pool { outcomeSymbol: string; outcomeBalance: number; collateralSymbol: string; collateralBalance: number }
export interface Market {
 id: string; chainId: number; chainName: string; slug: string; question: string;
 image?: string; outcomeImages: string[]; outcomes: string[]; odds: (number | null)[];
 templateId: string; type: MarketType; layout: 'binary' | 'multi' | 'scalar' | 'multi-scalar'; isFutarchy: boolean;
 bounds: { lower: number; upper: number }; unit: string; estimate: number | null; outcomeValues: (number | null)[];
 status: MarketStatus; statusLabel: string; answeredTooSoon: boolean[]; resolutionTs: number;
 verification: Verification; verificationItemId?: string; conditional: boolean; parentId: string;
 parentOutcomeIndex: number; parentOutcomeName: string; collateralSymbol: string; collateralToken: string;
 rewards: boolean; liquidityUSD: number; volumeUSD: number; volumeNotionalUSD: number; openInterestUSD: number;
 openInterestCollateral: number; pools: (Pool | null)[]; wrappedTokens: string[]; conditionId: string;
 questionId: string; creator: string; factory: string; transactionHash: string; createdTs: number;
 openingTs: number; leading: number; questions: Question[]; raw: RawMarket;
}
