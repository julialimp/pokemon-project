import { AppRoutes } from './pages/routes';
import { ThemeContext, ThemeProvider } from './contexts/theme-context';
import { GlobalStyle } from './styles/global-style';
import { useContext } from 'react';
import React from 'react';

function App() {
  return (
    <ThemeProvider >
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )
}

  
export default App;
