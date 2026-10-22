import source from './markets-search.full.json';
import detail from './get-market.json';
import type { Market, RawMarket, MarketType, Verification } from './types';
import { marketStatus, statusLabel, answeredTooSoon } from './status';
import { decodeBound, scalarEstimate, outcomeValue } from '../math/scalar';
import { SDAI_USD } from './clock';
export const chains: Record<number, string> = { 1: 'Ethereum', 10: 'OP Mainnet', 100: 'Gnosis', 8453: 'Base' };
const zero = /^0x0+$/i;
function adapt(raw: RawMarket, used: Set<string>): Market {
 const outcomes = raw.outcomes.map(s => s.trim()), valid = outcomes.filter(s => s !== 'Invalid');
 const scalar = raw.templateId === '1' && valid.length === 2 && valid.every(s => ['UP', 'DOWN'].includes(s.toUpperCase()));
 const type: MarketType = raw.templateId === '2' ? 'Categorical' : raw.templateId === '3' ? 'Multi Categorical' : scalar ? 'Scalar' : 'Multi Scalar';
 const bounds = { lower: decodeBound(raw.lowerBound), upper: decodeBound(raw.upperBound) };
 let slug = raw.url;
 if (used.has(`${raw.chainId}/${slug}`)) slug += `-${raw.id.slice(2, 6)}`;
 if (used.has(`${raw.chainId}/${slug}`)) throw new Error('Duplicate market route');
 used.add(`${raw.chainId}/${slug}`);
 const balances = raw.poolBalance.filter(p => p !== null);
 const symbols = balances[0] ? [balances[0].token0.symbol, balances[0].token1.symbol] : [];
 const common = symbols.filter(s => balances.every(p => p.token0.symbol === s || p.token1.symbol === s));
 const collateralSymbol = common.length === 1 ? common[0] : common.find(s => s === 'sDAI') ?? '';
 const pools = raw.poolBalance.map(p => {
  if (!p) return null;
  const collateral = p.token0.symbol === collateralSymbol ? p.token0 : p.token1;
  const outcome = p.token0.symbol === collateralSymbol ? p.token1 : p.token0;
  return { outcomeSymbol: outcome.symbol, outcomeBalance: outcome.balance, collateralSymbol, collateralBalance: collateral.balance };
 });
 const parent = source.markets.find(m => m.id.toLowerCase() === raw.parentMarket.id.toLowerCase()) ??
  (detail.data.id.toLowerCase() === raw.parentMarket.id.toLowerCase() ? detail.data : undefined);
 const parentOutcomeIndex = +raw.parentOutcome;
 const status = marketStatus(raw);
 const verification: Verification = raw.verification?.status === 'verified' ? 'Verified' : raw.verification?.status === 'verifying' ? 'Verifying' : raw.verification?.status === 'challenged' ? 'Challenged' : 'Not Verified';
 // Strict > preserves the lower index on ties. Null prices never lead.
 const leading = raw.odds.reduce<number>((best, p, i) => p !== null && (best < 0 || p > (raw.odds[best] ?? -Infinity)) ? i : best, -1);
 return { id: raw.id.toLowerCase(), chainId: raw.chainId, chainName: chains[raw.chainId] ?? String(raw.chainId), slug,
  question: raw.marketName.trim(), image: raw.images?.market, outcomeImages: raw.images?.outcomes ?? [], outcomes,
  odds: [...raw.odds], templateId: raw.templateId, type, layout: scalar ? 'scalar' : type === 'Multi Scalar' ? 'multi-scalar' : valid.length === 2 ? 'binary' : 'multi',
  isFutarchy: raw.type === 'Futarchy', bounds, unit: raw.marketName.match(/\[([^\]]+)\]\s*$/)?.[1].split(',')[0].trim() ?? '',
  estimate: scalar ? scalarEstimate(bounds.lower, bounds.upper, raw.odds[outcomes.findIndex(s => s.toUpperCase() === 'UP')], raw.odds[outcomes.findIndex(s => s.toUpperCase() === 'DOWN')]) : null,
  outcomeValues: raw.odds.map(p => outcomeValue(p, bounds.upper)), status, statusLabel: statusLabel(status),
  answeredTooSoon: raw.questions.map(q => answeredTooSoon(q.best_answer)), resolutionTs: raw.openingTs,
  verification, verificationItemId: raw.verification?.itemID, conditional: !zero.test(raw.parentMarket.id),
  parentId: raw.parentMarket.id.toLowerCase(), parentOutcomeIndex,
  parentOutcomeName: parent?.outcomes[parentOutcomeIndex]?.trim() ?? (parentOutcomeIndex === 0 ? 'Yes' : parentOutcomeIndex === 1 ? 'No' : `#${parentOutcomeIndex}`),
  collateralSymbol, collateralToken: raw.collateralToken, rewards: raw.incentive > 0, liquidityUSD: raw.liquidityUSD,
  volumeUSD: raw.volumeUSD, volumeNotionalUSD: raw.volumeNotionalUSD, openInterestUSD: raw.openInterestUSD,
  openInterestCollateral: collateralSymbol === 'sDAI' ? raw.openInterestUSD / SDAI_USD : NaN,
  pools, wrappedTokens: raw.wrappedTokens, conditionId: raw.conditionId, questionId: raw.questionId,
  creator: raw.creator, factory: raw.factory, transactionHash: raw.transactionHash, createdTs: raw.blockTimestamp,
  openingTs: raw.openingTs, leading, questions: raw.questions, raw };
}
export function getMarkets() { const used = new Set<string>(); return source.markets.map(m => adapt(m, used)); }
export const markets = getMarkets();
export const findMarket = (chainId: number, slug: string) => getMarkets().find(m => m.chainId === chainId && m.slug === slug);
