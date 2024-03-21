import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className ="btnToggle" onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggleButton;
