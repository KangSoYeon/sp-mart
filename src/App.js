import React from 'react';
import './App.css';
import { useRoutes } from "react-router-dom";
import routes from './routes'
import { AuthProvider } from './AuthForm'
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './GlobalStyles'
import theme from './theme'

function App() {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        {routing}
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
