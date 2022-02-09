import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/header.component';
import AppRouter from './routers/app-router';

import SessionContext from './context/SessionContext';

import './App.css';

const App = () => {
  return (
    <BrowserRouter className="App">
      <SessionContext>
        <Header />
        <AppRouter />
      </SessionContext>
    </BrowserRouter>
  );
};

export default App;
