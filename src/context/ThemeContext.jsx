import {createContext, useContext, useState, useEffect} from 'react';

const ThemeContext=createContext();

export function ThemeProvider({children}){
  const [theme, setTheme]=useState(() => {
    // Check localStorage first
    const saved=localStorage.getItem('portfolio-theme');
    if (saved==='light' || saved==='dark') return saved;
    // Then check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme=() => {
    setTheme(prev => prev==='dark' ? 'light' : 'dark');
  };

  return(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context=useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}