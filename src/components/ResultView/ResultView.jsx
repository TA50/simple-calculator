import React from "react";
import Backspace from "../Backspace/Backspace";
import { ThemeSwitch } from "../ThemeSwitch";
import classes from "./ResultView.module.css";
const ResultView = () => {
    return (
        <section className={classes.resultViewRoot}>
            <div className={classes.result}>
                <label>5768</label>
                <small>5000+300+468</small>
            </div>
            <div className={classes.actions}>
                <ThemeSwitch />
                <Backspace />
            </div>
            <hr className={classes.seperator} />
        </section>
    );
};

export { ResultView };
