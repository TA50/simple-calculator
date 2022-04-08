/* eslint-disable no-undef */
import { fireEvent, render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { AppContextProvider } from './context';
import { ThemeProvider } from './theme';
import './string-extensions';

function AppWithProviders() {
  return (
    <ThemeProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ThemeProvider>
  );
}

describe.skip('Keypad working', () => {
  it('button should add its label to the result', () => {
    const screen = render(<AppWithProviders />);
    const numberOneLabel = screen.getByText('1');
    const numberOneButton = numberOneLabel.parentElement;
    fireEvent.click(numberOneButton);
    const result = screen.getAllByText('1');
    expect(result.length).toBe(2);
  });
  it('button should add 5+5 to be equal to 10', () => {
    const screen = render(<AppWithProviders />);
    const numberFiveLabel = screen.getByText('5');
    const numberFiveButton = numberFiveLabel.parentElement;
    const plusOperatorLabel = screen.getByText('+');
    const plusOperatorButton = plusOperatorLabel.parentElement;
    fireEvent.click(numberFiveButton);
    fireEvent.click(plusOperatorButton);
    fireEvent.click(numberFiveButton);
    const calculations = screen.getByText('5+5');
    expect(calculations).toBeInTheDocument();
    fireEvent.click(screen.getByText('=').parentElement);
    const result = screen.getByText('10');
    expect(result).toBeInTheDocument();
  });
});
