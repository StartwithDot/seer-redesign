import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './app.css';
import '@seer/ef/seer-shell.css';
import '@seer/ef/seer-subbar.css';
import './subbar.css';
import { mountSeerShell } from '@seer/ef/seer-shell.js';

mountSeerShell({ current: 'opportunity' });

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
