import React from "react";
import { Button } from "../Button";
import { useTheme, colors } from "../../theme";
import classes from "./Keypad.module.css";
import KeypadRow from "./KeypadRow";
function Keypad() {
  const [theme] = useTheme();
  return (
    <div className={classes.keypad}>
      {/* <KeypadRow> */}
        <Button label={"AC"} />
        <Button label={"( )"} />
        <Button label={"×"} />
        <Button label={"÷"} />
      {/* </KeypadRow> */}
      {/* <KeypadRow> */}
        <Button label={"7"} />
        <Button label={"8"} />
        <Button label={"9"} />
        <Button label={"-"} />
      {/* </KeypadRow> */}
      {/* <KeypadRow> */}
        <Button label={"4"} />
        <Button label={"5"} />
        <Button label={"3"} />
        <Button label={"+"} className={classes.doubleRow} />
      {/* </KeypadRow> */}
      {/* <KeypadRow> */}
        <Button label={"1"} />
        <Button label={"2"} />
        <Button label={"3"} />
        <Button label={"4"} />
      {/* </KeypadRow> */}
      {/* <KeypadRow> */}
        <Button label={"0"} />
        <Button label={"."} />
        <Button label={"="} className={classes.doubleCol} />
      {/* </KeypadRow> */}
    </div>
  );
}

export { Keypad };
