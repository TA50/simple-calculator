import React from 'react';
import { useTheme } from './theme';
import './App.css';
import { Keypad, ResultView, Toast } from './components';

export default function App() {
  const [theme] = useTheme();
  return (
    <main className={theme}>
      <div>
        <Toast />
        <ResultView />
        <Keypad />
      </div>
    </main>
  );
}
