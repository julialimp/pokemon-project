import { AppRoutes } from './routes';
import { ThemeProvider } from './contexts/theme-context';
import { GlobalStyle } from './styles/global-style';
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
