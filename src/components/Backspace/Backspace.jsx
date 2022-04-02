import React from "react";
import { useTheme } from "../../theme";
import classes from "./Backspace.module.css";
function Backspace() {
    const backspaceSvg = {
        dark: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="#ededed"
                viewBox="0 0 256 256"
            >
                <rect width="256" height="256" fill="none"></rect>
                <path
                    d="M61.7,204.1,16,128,61.7,51.9A7.9,7.9,0,0,1,68.5,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.5A7.9,7.9,0,0,1,61.7,204.1Z"
                    fill="none"
                    stroke="#ededed"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                ></path>
                <line
                    x1="160"
                    y1="104"
                    x2="112"
                    y2="152"
                    fill="none"
                    stroke="#ededed"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                ></line>
                <line
                    x1="160"
                    y1="152"
                    x2="112"
                    y2="104"
                    fill="none"
                    stroke="#ededed"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                ></line>
            </svg>
        ),
        light: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="192"
                height="192"
                fill="#23323e"
                viewBox="0 0 256 256"
            >
                <rect width="256" height="256" fill="none"></rect>
                <path
                    d="M61.7,204.1,16,128,61.7,51.9A7.9,7.9,0,0,1,68.5,48H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.5A7.9,7.9,0,0,1,61.7,204.1Z"
                    fill="none"
                    stroke="#23323e"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                ></path>
                <line
                    x1="160"
                    y1="104"
                    x2="112"
                    y2="152"
                    fill="none"
                    stroke="#23323e"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                ></line>
                <line
                    x1="160"
                    y1="152"
                    x2="112"
                    y2="104"
                    fill="none"
                    stroke="#23323e"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                ></line>
            </svg>
        ),
    };
    const [theme] = useTheme();
    return <button className={classes.backspace}>{backspaceSvg[theme]}</button>;
}

export default Backspace;
