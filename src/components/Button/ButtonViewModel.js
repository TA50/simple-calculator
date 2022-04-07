import { Actions, useAppDispatch } from '../../context';

/**
 *
 *@param {import('./Button').ButtonProps} props
 */
export const useButtonViewModel = (props) => {
  const disptach = useAppDispatch();

  function calculate() {
    disptach({ type: Actions.CALCULATE });
  }
  function addOperator() {
    disptach({ type: Actions.ADD_OPERATOR, payload: props.label });
  }
  // Events
  const onClickHandler = () => {
    if (props.label === '=') {
      calculate();
    } else if (props.label.isOperator()) {
      addOperator();
    } else if (props.label === 'AC') {
      disptach({ type: Actions.CLEAR_ALL });
    } else if (props.label === '(') {
      disptach({ type: Actions.OPEN_BRACKET });
    } else if (props.label === ')') {
      disptach({ type: Actions.CLOSE_BRACKET });
    } else {
      disptach({ type: Actions.ADD_NUMBER, payload: props.label });
    }
  };
  return {
    onClick: onClickHandler,
  };
};
