import ReactDOM from 'react-dom/client';
import App from './App';
import { AppContextProvider } from './context/context';
import { ThemeProvider } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </ThemeProvider>,
);
