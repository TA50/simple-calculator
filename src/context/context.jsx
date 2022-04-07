import React, { useMemo } from 'react';
import { Calculator } from './calculator';

export const Actions = Object.freeze({
  ADD_NUMBER: 'ADD_NUMBER',
  REMOVE_NUMBER: 'REMOVE_NUMBER',
  CALCULATE: 'CALCULATE',
});

const initialValue = {
  calculations: '',
  result: 0,
  calculated: false,
};
const calculator = new Calculator();
const appContext = React.createContext([initialValue, () => {}]);

// Reducer
const appReducer = (state = initialValue, action = {}) => {
  const newState = { ...state };
  switch (action.type) {
    case Actions.ADD_NUMBER:
      if (state.calculated) {
        newState.calculations = '';
        newState.calculated = false;
      }
      newState.calculations += action.payload;
      return newState;
    case Actions.REMOVE_NUMBER: {
      // newState.calculations = newState.calculations.slice(0, newState.)
      const claculations = newState.calculations.split('');
      claculations.pop();
      newState.claculations = claculations.join('');
      return newState;
    }
    case Actions.CALCULATE: {
      const result = calculator.calculate(state.calculations);
      console.log(result);
      newState.result = result;
      newState.calculated = true;
      return newState;
    }
    default:
      return state;
  }
};

// Provider
export function AppContextProvider(props) {
  const [state, dispatch] = React.useReducer(appReducer);
  const value = useMemo(
    () => [state || initialValue, dispatch],
    [state, dispatch]
  );
  return (
    <appContext.Provider value={value}>{props.children}</appContext.Provider>
  );
}

export const useAppState = () => {
  const [state] = React.useContext(appContext);
  return state;
};
export const useAppDispatch = () => {
  const dispatch = React.useContext(appContext)[1];
  return dispatch;
};
