import React from "react";
import { useTheme } from "./theme";
import "./App.css"
import {Keypad, ResultView} from "./components";
export default function App() {
    const [theme] = useTheme();
    return (
        <main className={theme}>
          <ResultView/>
          <Keypad />
        </main>
    );
}
