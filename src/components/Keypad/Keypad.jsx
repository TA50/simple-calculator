import React from "react";
import { Button } from "../Button";
import { useTheme, colors } from "../../theme";
import classes from "./Keypad.module.css";
import KeypadRow from "./KeypadRow";
function Keypad() {
  const [theme] = useTheme();
  return (
    <div className={classes.keypad}>
      <KeypadRow>
        <Button label={"A"} />
        <Button label={"B"} />
        <Button label={"B"} backgroundColor={colors.light.primary} />
        <Button label={"A"} />
      </KeypadRow>
      <KeypadRow>
        <Button label={"A"} />
        <Button label={"B"} />
        <Button label={"B"} />
        <Button label={"A"} />
      </KeypadRow>
      <KeypadRow>
        <Button label={"A"} />
        <Button label={"B"} labelColor={colors.light.primary} />
        <Button label={"B"} />
        <Button label={"A"} />
      </KeypadRow>
      <KeypadRow>
        <Button label={"A"} />
        <Button label={"B"} labelColor={colors.light.primary} />
        <Button label={"B"} />
        <Button label={"A"} />
      </KeypadRow>
      <KeypadRow>
        <Button label={"A"} />
        <Button label={"B"} labelColor={colors.light.primary} />
        <Button label={"B"} />
        <Button label={"A"} />
      </KeypadRow>
    </div>
  );
}

export { Keypad };
