import { LeaderboardPage } from './leaderboard/LeaderboardPage';
import { CreatePage } from './create/CreatePage';
import { CollectionsPage } from './collections/CollectionsPage';
import { MarketPage } from './market/MarketPage';
import { HomePage } from './home/HomePage';
import { Header } from './components/Header';
import { BetaStrip } from './components/BetaStrip';
import { Footer } from './components/Footer';
import { RouteStub } from './routes/RouteStub';
import { useRoute } from './router';
export default function App() {
 const route = useRoute();
 return <div className="app-shell"><BetaStrip /><Header route={route} /><main className="page">{route.name === 'home' || (route.path === '/__test/marks' && (import.meta.env.DEV || new URLSearchParams(location.search).get('test') === '1')) ? <HomePage route={route} /> : route.name === 'market' ? <MarketPage key={route.path} route={route} /> : route.name === 'leaderboard' ? <LeaderboardPage route={route} /> : route.name === 'create' ? <CreatePage route={route} /> : route.name === 'collections' ? <CollectionsPage /> : <RouteStub route={route} />}</main><Footer /></div>;
}
