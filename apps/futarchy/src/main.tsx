import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './app.css';
import './components/signal-board.css';

import './components/seer-shell.css';
import '@seer/ef/seer-shell.css';
import '@seer/ef/seer-subbar.css';
import { mountSeerShell } from '@seer/ef/seer-shell.js';
import './subbar.css';

mountSeerShell({ current: 'futarchy' });

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
