import React from 'react';
import './App.css';
import { useRoutes } from "react-router-dom";
import routes from './routes'
import { AuthProvider } from './AuthForm'

function App() {
  const routing = useRoutes(routes);
  return (
    <AuthProvider>
      {routing}
    </AuthProvider>
  );
}

export default App;
