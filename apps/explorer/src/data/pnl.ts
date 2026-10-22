import source from './get-portfolio-pl.json';
export const portfolio = source.data;
export const pnl = (marketId: string) => portfolio.marketIds.includes(marketId) ? portfolio.pnl : null;
