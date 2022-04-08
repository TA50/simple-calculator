import { Calculator } from './calculator';
import { operatorsMap } from './helpers';

/**
 * @typedef {{ calculations:  string; displayCalculations: string;
 * result: number;  calculated: boolean; error: string | null;
 * } AppState
 */

/**
 * @typedef {'ADD_NUMBER' | 'REMOVE_CHARACTER' | 'OPEN_BRACKET'
 * | 'CLOSE_BRACKET'
 * | 'CALCULATE' | 'CLEAR_ALL' | 'ADD_OPERATOR'} AppActionType
 * @typedef {{type: AppActionType; payload?: string;}} AppAction
 */
export const Actions = Object.freeze({
  ADD_NUMBER: 'ADD_NUMBER',
  REMOVE_CHARACTER: 'REMOVE_CHARACTER',
  CALCULATE: 'CALCULATE',
  ADD_OPERATOR: 'ADD_OPERATOR',
  CLEAR_ALL: 'CLEAR_ALL',
  OPEN_BRACKET: 'OPEN_BRACKET',
  CLOSE_BRACKET: 'CLOSE_BRACKET',
});
/**
 * @type {AppState}
 * @const
 */
export const initialValue = {
  calculations: '',
  displayCalculations: '',
  result: 0,
  calculated: false,
  error: null,
};
const calculator = new Calculator();

// Reducer
/**
 *
 * @param { AppState } state
 * @param {AppAction} action
 * @returns
 */
export const contextReducer = (state = initialValue, action = {}) => {
  const newState = { ...state, error: null };
  switch (action.type) {
    case Actions.ADD_NUMBER: {
      if (state.calculated) {
        newState.calculations = '';
        newState.displayCalculations = newState.calculations;
        newState.calculated = false;
      }
      newState.calculations += action.payload;
      newState.displayCalculations += action.payload;
      return newState;
    }
    case Actions.REMOVE_CHARACTER: {
      newState.calculations = newState.calculations.slice(
        0,
        newState.calculations.length - 1,
      );
      newState.displayCalculations = newState.displayCalculations.slice(
        0,
        newState.calculations.length - 1,
      );
      return newState;
    }
    case Actions.CALCULATE: {
      const result = calculator.calculate(state.calculations);
      if (typeof result === 'string') {
        newState.error = result;
        return newState;
      }
      newState.result = result;
      newState.calculated = true;
      return newState;
    }
    case Actions.ADD_OPERATOR: {
      if (!action.payload.isOperator()) return newState;

      if (state.calculated) {
        newState.calculations = `${state.result}${
          operatorsMap[action.payload]
        }`;
        newState.displayCalculations = `${state.result.toFixed(4)}${
          action.payload
        }`;
        newState.calculated = false;
        return newState;
      }
      const { calculations } = newState;
      if (
        (newState.calculations === '' || calculations.endWithOperator())
        && action.payload !== '-'
      ) {
        return newState;
      }
      newState.calculations += operatorsMap[action.payload];
      newState.displayCalculations += action.payload;
      return newState;
    }
    case Actions.CLEAR_ALL: {
      return initialValue;
    }
    case Actions.OPEN_BRACKET: {
      // should not open a bracket right after a number 😎
      if (newState.calculations.endWithNumber()) {
        return newState;
      }
      newState.calculations += '(';
      newState.displayCalculations += '(';
      return newState;
    }
    case Actions.CLOSE_BRACKET: {
      // should not close a bracket that is not opened 😎
      if (!newState.calculations.includes('(')) {
        return newState;
      }
      newState.calculations += ')';
      newState.displayCalculations += ')';
      return newState;
    }
    default: {
      return state;
    }
  }
};
