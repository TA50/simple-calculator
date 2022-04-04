import React, { useMemo } from 'react';
// [type: dark | light, toggleTheme]
const initialValue = {
  calculations: '',
  result: null,
};
const appContext = React.createContext([initialValue, () => {}]);

// Actions
const ADD_NUMBER = 'ADD_NUMBER';
const REMOVE_NUMBER = 'REMOVE_NUMBER';

// Reducer
const appReducer = (action, state = initialValue) => {
  const newState = { ...state };
  switch (action.type) {
    case ADD_NUMBER:
      newState.calculations += action.payload;
      return newState;
    case REMOVE_NUMBER: {
      // newState.calculations = newState.calculations.slice(0, newState.)
      const claculations = newState.calculations.split('');
      claculations.pop();
      newState.claculations = claculations.join('');
      return newState;
    }
    default:
      return state;
  }
};

// Provider
export function AppContextProvider(props) {
  const [state, dispatch] = React.useReducer(appReducer);
  const value = useMemo(() => [state, dispatch], [state]);
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
