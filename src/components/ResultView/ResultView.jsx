import React from 'react';
import { useAppState } from '../../context/context';
import { Backspace } from '../Backspace/Backspace';
import { ThemeSwitch } from '../ThemeSwitch';
import classes from './ResultView.module.css';

function ResultView() {
  const { result, displayCalculations } = useAppState();
  const displayResult = () => {
    const r = result.toString();
    if (r.includes('.')) {
      return result.toFixed(4);
    }
    return result;
  };
  return (
    <section className={classes.resultViewRoot}>
      <div className={classes.result}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>{displayResult()}</label>
        <small>{displayCalculations || <br />}</small>
      </div>
      <div className={classes.actions}>
        <ThemeSwitch />
        <Backspace />
      </div>
      <hr className={classes.seperator} />
    </section>
  );
}

export { ResultView };
