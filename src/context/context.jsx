import React, { useMemo } from 'react';
import { contextReducer, initialValue } from './context-reducer';

const appContext = React.createContext([initialValue, () => {}]);
// Provider
export function AppContextProvider(props) {
  const [state, dispatch] = React.useReducer(contextReducer);
  const value = useMemo(
    () => [state || initialValue, dispatch],
    [state, dispatch]
  );
  return (
    <appContext.Provider value={value}>{props.children}</appContext.Provider>
  );
}

/**
 *
 * @returns { import('./context-reducer').AppState }
 */

export const useAppState = () => {
  const [state] = React.useContext(appContext);
  return state;
};
/**
 *
 * @returns {(action:import('./context-reducer').AppAction) => void }
 */
export const useAppDispatch = () => {
  const dispatch = React.useContext(appContext)[1];
  return dispatch;
};
