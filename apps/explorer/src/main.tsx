import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { installTestHooks } from './test/hooks';
import './styles/base.css';
import './styles/product.css';
import './styles/layout.css';
installTestHooks();
import './components/seer-shell.css';

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
