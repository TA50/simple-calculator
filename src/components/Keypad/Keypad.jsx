import React from 'react';
import { Button } from '../Button';
import { useTheme } from '../../theme';
import classes from './Keypad.module.css';

function Keypad() {
  const [theme] = useTheme();

  return (
    <div className={classes.keypad}>
      {/* <KeypadRow> */}
      <Button
        label="AC"
        className={theme === 'dark' ? classes.primaryFont : null}
      />
      <Button
        label="("
        className={theme === 'dark' ? classes.primaryFont : null}
      />
      <Button
        label=")"
        className={theme === 'dark' ? classes.primaryFont : null}
      />
      <Button
        label="×"
        className={theme === 'dark' ? classes.primaryFont : null}
      />

      <Button label="7" />
      <Button label="8" />
      <Button label="9" />
      <Button
        label="-"
        className={theme === 'dark' ? classes.primaryFont : null}
      />
      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <Button
        label="÷"
        className={theme === 'dark' ? classes.primaryFont : null}
      />

      <Button label="1" />
      <Button label="2" />
      <Button label="3" />
      <Button
        label="+"
        className={theme === 'dark' ? classes.primaryFont : null}
      />

      <Button label="0" />
      <Button label="." />
      <Button
        label="="
        className={`${classes.doubleCol} ${classes.primaryBackground}`}
      />
    </div>
  );
}

export default Keypad;
