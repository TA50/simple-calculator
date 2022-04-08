/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
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

describe('Keypad working', () => {
  it('button should add its label to the result', () => {
    render(<AppWithProviders />);
    const numberOneLabel = screen.getByText('1');
    const numberOneButton = numberOneLabel.parentElement;
    fireEvent.click(numberOneButton);
    const calculations = screen.getByTestId('calculations');
    expect(calculations.textContent).toBe('1');
  });
  it('button should add 5+5 to be equal to 10', () => {
    render(<AppWithProviders />);
    const numberFiveLabel = screen.getByText('5');
    const numberFiveButton = numberFiveLabel.parentElement;
    const plusOperatorLabel = screen.getByText('+');
    const plusOperatorButton = plusOperatorLabel.parentElement;
    fireEvent.click(numberFiveButton);
    fireEvent.click(plusOperatorButton);
    fireEvent.click(numberFiveButton);
    const calculations = screen.getByTestId('calculations');
    expect(calculations.textContent).toBe('5+5');
    const equalLabel = screen.getByText('=');
    fireEvent.click(equalLabel.parentElement);
    const result = screen.getByTestId('result');
    expect(result.textContent).toBe('10');
  });
});
