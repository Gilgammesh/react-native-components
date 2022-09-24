import React, {createContext, useEffect, useReducer} from 'react';
import themeReducer, {themeInitialState, EActionType, IThemeReducer} from './themeReducer';
import {useColorScheme} from 'react-native';

interface ThemeContextProps {
  theme: IThemeReducer;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeProvider = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  const [theme, dispatch] = useReducer(themeReducer, themeInitialState);

  const scheme = useColorScheme();

  useEffect(() => {
    if (scheme && scheme === 'light') {
      dispatch({type: EActionType.SETLIGHTTHEME});
    }
    if (scheme && scheme === 'dark') {
      dispatch({type: EActionType.SETDARKTHEME});
    }
  }, [scheme]);

  // Establecer tema oscuro
  const setDarkTheme = () => dispatch({type: EActionType.SETDARKTHEME});

  // Establecer tema claro
  const setLightTheme = () => dispatch({type: EActionType.SETLIGHTTHEME});

  const value: ThemeContextProps = {
    theme,
    setDarkTheme,
    setLightTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
