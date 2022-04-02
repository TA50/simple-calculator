import React from "react";
import classes from "./ThemeSwitch.module.css";
import { useTheme } from "../../theme";
function ThemeSwitch() {
    const [theme, toggleTheme] = useTheme();
    return (
        <div className={classes[theme]} onClick={toggleTheme}>
            <div className={classes.switchRoot}>
                <div className={classes.handle}></div>
            </div>
        </div>
    );
}

export { ThemeSwitch };
