import React from "react";
// [type: dark | light, toggleTheme]

const themeContext = React.createContext(["default", () => {}]);

export const ThemeProvider = (props) => {
  const [theme, setTheme] = React.useState("dark");
  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "dark") return "light";
      else return "dark";
    });
  };
  return (
    <themeContext.Provider value={[theme, toggleTheme]}>
      {props.children}
    </themeContext.Provider>
  );
};

export const useTheme = () => React.useContext(themeContext);

export const colors = {
  light: {
    primary: "#e47b2e",
    foreColor: "#23323e",
    backColor: "#ededed",
  },
  dark: {
    primary: "#e47b2e",
    foreColor: "#ededed",
    backColor: "#23323e",
  },
};
