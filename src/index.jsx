import ReactDOM from 'react-dom/client';
import App from './App';
import { AppContextProvider } from './context/context';
import { ThemeProvider } from './theme';
import './string-extensions';
import ErrorBoundary from './ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <ThemeProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ThemeProvider>
  </ErrorBoundary>,
);
// Register Service Workers
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/sw.js`)
    .then(() => {
      console.log('Service Worker Registered');
    });
}
