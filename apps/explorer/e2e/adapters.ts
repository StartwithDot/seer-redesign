// The production adapters, bundled by Vite so import.meta.glob uses the real fixtures.
export {getMarkets} from '../src/data/markets';
export {format} from '../src/data/format';
export {quote} from '../src/data/quote';
export {history} from '../src/data/history';
export {leaderboard,leaderDefaults} from '../src/data/leaderboard';
export {filterMarkets,defaults} from '../src/data/filters';
export {fixture,unwrap,salvageObjects} from '../src/data/fixtures';
