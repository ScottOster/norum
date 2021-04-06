import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import NavTopics from './NavTopics';

function App() {
  return (
    <div className='App'>
      <h1 className='AppHeader'>NORUM- The news forum</h1>
      <NavTopics />

      <Router></Router>
    </div>
  );
}

export default App;
