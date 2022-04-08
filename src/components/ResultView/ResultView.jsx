import React from 'react';
import { Actions } from '../../context';
import { useAppState, useAppDispatch } from '../../context/context';
import { Backspace } from '../Backspace/Backspace';
import { ThemeSwitch } from '../ThemeSwitch';
import classes from './ResultView.module.css';

function ResultView() {
  const { result, displayCalculations } = useAppState();
  const dispatch = useAppDispatch();
  const displayResult = () => {
    const r = result.toString();
    if (r.includes('.')) {
      return result.toFixed(4);
    }
    return result;
  };
  const backspaceHandler = () => {
    dispatch({ type: Actions.REMOVE_CHARACTER });
  };
  return (
    <section className={classes.resultViewRoot}>
      <div className={classes.result}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label data-testid="result">{displayResult()}</label>
        <small data-testid="calculations">
          {displayCalculations || <br />}
        </small>
      </div>
      <div className={classes.actions}>
        <ThemeSwitch />
        <Backspace onClick={backspaceHandler} />
      </div>
      <hr className={classes.seperator} />
    </section>
  );
}

export { ResultView };
