import { getMarkets } from './markets';
export const trending = () => getMarkets().filter(m => m.status !== 'Closed').sort((a,b) => b.volumeUSD - a.volumeUSD).slice(0,5);
