import React from 'react';
import { Button } from '../Button';
import { useTheme } from '../../theme';
import classes from './Keypad.module.css';
import { useKeypadViewModel } from './KeypadViewModel';

function Keypad() {
  const vm = useKeypadViewModel();
  const [theme] = useTheme();

  return (
    <div className={classes.keypad}>
      {/* <KeypadRow> */}
      <Button
        label="AC"
        className={theme === 'dark' ? classes.primaryFont : null}
      />
      <Button
        label="( )"
        className={theme === 'dark' ? classes.primaryFont : null}
      />
      <Button
        label="×"
        className={theme === 'dark' ? classes.primaryFont : null}
      />
      <Button
        label="÷"
        className={theme === 'dark' ? classes.primaryFont : null}
      />
      {/* </KeypadRow> */}
      {/* <KeypadRow> */}
      <Button label="7" />
      <Button label="8" />
      <Button label="9" />
      <Button
        label="-"
        className={theme === 'dark' ? classes.primaryFont : null}
      />
      {/* </KeypadRow> */}
      {/* <KeypadRow> */}
      <Button label="4" />
      <Button label="5" />
      <Button label="6" />
      <Button
        label="+"
        className={`${classes.doubleRow} ${
          theme === 'dark' ? classes.primaryFont : null
        } `}
      />
      {/* </KeypadRow> */}
      {/* <KeypadRow> */}
      <Button label="1" />
      <Button label="2" />
      <Button label="3" />

      {/* </KeypadRow> */}
      {/* <KeypadRow> */}
      <Button label="0" />
      <Button label="." />
      <Button
        label="="
        onClick={vm.calculate}
        className={`${classes.doubleCol} ${classes.primaryBackground}`}
      />
      {/* </KeypadRow> */}
    </div>
  );
}

export default Keypad;
