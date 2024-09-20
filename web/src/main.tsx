import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast, ToastContainer } from 'starwars-ui';
import { PromptContainer } from 'prompt-system';
import { init as initApi } from 'starwars-api';
import { App } from './bootstrap/App';
import Footer from './components/Footer/Footer';
import './main.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

initApi({
  onError: (message: string) => {
    toast(message, {
      type: 'error',
    });
  },
});

const darkTheme = createTheme({
  palette: {},
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

const container = document.getElementById('root') ?? document.body;

const root = createRoot(container);

root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Router>
      <App />
      <Footer />
      <ToastContainer position='bottom-right' style={{ bottom: '40px' }} />
      <PromptContainer />
    </Router>
  </ThemeProvider>
);
