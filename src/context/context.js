import React from "react";
// [type: dark | light, toggleTheme]
const initialValue = {
  calculations: "",
  result: null,
};
const appContext = React.createContext([initialValue, () => {}]);

// Actions
const ADD_NUMBER = "ADD_NUMBER";
const REMOVE_NUMBER = "REMOVE_NUMBER";

// Reducer
const appReducer = (action, state = initialValue) => {
  const newState = { ...state };
  switch (action.type) {
    case ADD_NUMBER:
      newState.calculations += action.payload;
      return newState;
    case REMOVE_NUMBER:
      // newState.calculations = newState.calculations.slice(0, newState.)
      const claculations = newState.calculations.split("");
      claculations.pop();
      newState.claculations = claculations.join("");
      return newState;
    default:
      return state;
  }
};

// Provider
export const AppContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(appReducer);
  return (
    <appContext.Provider value={[state, dispatch]}>
      {props.children}
    </appContext.Provider>
  );
};

export const useAppState = () => {
  const [state] = React.useContext(appContext);
  return state;
};
export const useAppDispatch = () => {
  const [_, dispatch] = React.useContext(appContext);
  return dispatch;
};
