import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './bootstrap/App';

import './main.scss';

const container = document.getElementById('root') ?? document.body;

const root = createRoot(container);

root.render(
  <Router>
    <App />
  </Router>
);
