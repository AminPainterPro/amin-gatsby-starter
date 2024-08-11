import React, { createContext, FC, ReactNode, useContext, useEffect } from 'react';

import { useLocalStorage } from 'hooks';

const ThemeContext = createContext<{
  theme: AppTheme;
  setTheme: React.Dispatch<React.SetStateAction<AppTheme>>;
} | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<AppTheme>('theme', 'light');

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (ctx === undefined) throw new Error('Theme Context was used outsider its Provider');
  return ctx!;
};

interface ThemeTogglerProps {
  render: ({ theme, toggleTheme }: { theme: AppTheme; toggleTheme: () => void }) => ReactNode;
}

export const ThemeToggler: FC<ThemeTogglerProps> = ({ render }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return render({ theme, toggleTheme });
};
