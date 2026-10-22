import '@fontsource-variable/inter-tight';
import '../../../packages/ef/tokens.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import './product.css';
import './components/seer-shell.css';
import './toolbar.css';
import '@seer/ef/seer-shell.css';
import '@seer/ef/seer-subbar.css';
import './subbar.css';
import { mountSeerShell } from '@seer/ef/seer-shell.js';

mountSeerShell({ current: 'risk' });

createRoot(document.getElementById('root')!).render(<App/>);
