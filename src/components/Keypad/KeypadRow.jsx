import React from 'react';
import classes from './Keypad.module.css';

function KeypadRow(props) {
  return <div className={classes.keypadRow}>{props.children}</div>;
}

export default KeypadRow;
