import React from 'react';
import { useAppState } from '../../context/context';
import { Backspace } from '../Backspace/Backspace';
import { ThemeSwitch } from '../ThemeSwitch';
import classes from './ResultView.module.css';

function ResultView() {
  const { result, calculations } = useAppState();
  return (
    <section className={classes.resultViewRoot}>
      <div className={classes.result}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>{result}</label>
        <small>{calculations}</small>
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
