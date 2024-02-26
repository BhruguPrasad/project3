"use client"
import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};

export default useTheme;