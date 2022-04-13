import React, { useEffect, useMemo } from 'react';
// [type: dark | light, toggleTheme]

const themeContext = React.createContext(['default', () => { }]);

export const colors = {
  light: {
    primary: '#e47b2e',
    foreColor: '#23323e',
    backColor: '#ededed',
  },
  dark: {
    primary: '#e47b2e',
    foreColor: '#ededed',
    backColor: '#23323e',
  },
};

const themeMeta = document.getElementsByName('theme')[0];
export function ThemeProvider(props) {
  const [theme, setTheme] = React.useState('dark');
  const toggleTheme = () => {
    setTheme((prev) => {
      console.log(themeMeta);
      if (prev === 'dark') {
        return 'light';
      }
      return 'dark';
    });
  };
  useEffect(() => {
    themeMeta.content = colors[theme].backColor;
  }, [theme]);
  const value = useMemo(() => [theme, toggleTheme], [theme]);
  return (
    <themeContext.Provider value={value}>
      {props.children}
    </themeContext.Provider>
  );
}

export const useTheme = () => React.useContext(themeContext);
