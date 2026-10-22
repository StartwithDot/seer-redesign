import type { RawMarket, MarketStatus } from './types';
import { now } from './clock';
export const answeredTooSoon = (answer: string) => /^0xf{63}e$/i.test(answer);
const unanswered = (answer: string) => /^0x0+$/i.test(answer) || answeredTooSoon(answer);
export function marketStatus(m: RawMarket, ts = now()): MarketStatus {
 const qs = m.questions;
 // Arbitration outranks opening, unanswered, finality and execution states.
 if (+m.questionsInArbitration > 0 || qs.some(q => q.is_pending_arbitration)) return 'In Dispute';
 if (qs.length ? qs.every(q => ts < q.opening_ts) : ts < m.openingTs) return 'Reports not open yet';
 if (qs.some(q => unanswered(q.best_answer)) || (!qs.length && !m.hasAnswers)) return 'Reports open';
 if (qs.some(q => !(q.finalize_ts > 0 && q.finalize_ts <= ts))) return 'Waiting for answer';
 return m.payoutReported ? 'Closed' : 'Pending execution';
}
export const statusLabel = (status: MarketStatus) => status === 'Reports not open yet' ? 'Trading Open' : status;
