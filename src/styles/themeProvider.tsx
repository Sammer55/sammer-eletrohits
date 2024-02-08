import React, { createContext, memo, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import theme from "./theme";

const ThemeContext = createContext({ theme });

const ThemeProvider: React.FC<{ children: React.ReactNode }> = memo(
  ({ children }) => {
    return (
      <ThemeContext.Provider value={{ theme }}>
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
      </ThemeContext.Provider>
    );
  }
);

export { ThemeContext, ThemeProvider };

export const useCustomTheme = () => {
  const { theme } = useContext(ThemeContext);
  return { theme };
};
