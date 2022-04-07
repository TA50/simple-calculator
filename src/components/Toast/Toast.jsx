import React from 'react';
// import { useAppState } from '../../context';
import classes from './Toast.module.css';

function Toast() {
  // const { error } = useAppState();
  // if (!error) {
  //   return null;
  // }
  return (
    <div className={classes.toast}>
      equation should be completed with a number !
    </div>
  );
}

export { Toast };
