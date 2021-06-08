import React, { useReducer } from 'react';
import ThemeContext from './themeContext';
import themeReducer from './themeReducer';
import { TOGGLE_THEME } from '../types';

const themes = {
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
    color: 'black',
  },
};

const ThemeState = props => {
  const initialState = {
    dark: false,
    theme: themes.light,
  };

  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = dark => {
    if (state.dark) {
      dispatch({ type: TOGGLE_THEME, payload: { D: false, T: themes.light } });
    } else {
      dispatch({ type: TOGGLE_THEME, payload: { D: true, T: themes.dark } });
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        dark: state.dark,
        theme: state.theme,
        toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
