import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast, ToastContainer } from 'starwars-ui';
import { init as initApi } from 'starwars-api';
import { App } from './bootstrap/App';
import Footer from './components/Footer/Footer';
import './main.scss';
import 'react-toastify/dist/ReactToastify.css';

initApi({
  onError: (message: string) => {
    toast(message, {
      type: 'error',
    });
  },
});

const container = document.getElementById('root') ?? document.body;

const root = createRoot(container);

root.render(
  <Router>
    <App />
    <Footer />
    <ToastContainer position='bottom-right' />
  </Router>
);
