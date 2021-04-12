import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import NavTopics from './components/NavTopics';
import ArticlesList from './components/ArticlesList';
import DisplayErrors from './components/DisplayErrors';
import SingleArticle from './components/SingleArticle';

function App() {
  return (
    <div className='App'>
      <h1 className='AppHeader'>NORUM- The news forum</h1>
      <NavTopics />

      <Router>
        <ArticlesList path='/' />
        <ArticlesList path='/:topic' />

        <SingleArticle path='articles/:article_id' />

        <DisplayErrors default status={404} message={'Oh No! Invalid path!'} />
      </Router>
    </div>
  );
}

export default App;
