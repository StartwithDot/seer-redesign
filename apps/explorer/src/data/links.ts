import type { Market } from './types';
const hosts: Record<number, string> = { 1: 'etherscan.io', 10: 'optimistic.etherscan.io', 100: 'gnosisscan.io', 8453: 'basescan.org' };
export const explorer = (chain: number, id: string, kind: 'address' | 'token' | 'tx' = 'address') => hosts[chain] ? `https://${hosts[chain]}/${kind}/${id}` : null;
export const marketLink = (m: Market) => `#/markets/${m.chainId}/${m.slug}`;
export const kleros = (item = '') => `https://curate.kleros.io/tcr/100/0x5aAF9E23A11440F8C1Ad6D2E2e5109C7e52CC672${item ? '/' + item : ''}`;
export const reality = (m: Market) => m.chainId === 100 && m.questions[0] ? `https://reality.eth.limo/app/#!/network/100/question/0xE78996A233895bE74a66F451f1019cA9734205cc-${m.questions[0].id}` : null;
export const swapr = (outcome: string, collateral: string) => `https://v3.swapr.eth.limo/#/add/${[outcome, collateral].sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase())).join('/')}/enter-amounts`;
export const apps = { Futarchy: 'https://futarchy.seer.pm', Deepfunding: 'https://deep.seer.pm', Foresight: 'https://foresight.kleros.io', 'Opportunity Markets': 'https://opportunity.seer.pm' };
export const links = { leaderboard: 'https://docs.seer.pm/app/leaderboard', kleros: 'https://kleros.io/', bridge: 'https://app.seer.pm/', farming: 'https://app.seer.pm/', policies: 'https://app.seer.pm/' };
