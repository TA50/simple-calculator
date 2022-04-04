/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import classes from './ThemeSwitch.module.css';
import { useTheme } from '../../theme';

function ThemeSwitch() {
  const [theme, toggleTheme] = useTheme();
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={classes[theme]} onClick={toggleTheme}>
      <div className={classes.switchRoot}>
        <div className={classes.handle} />
      </div>
    </div>
  );
}

export { ThemeSwitch };
