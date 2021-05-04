import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import NavTopics from './components/NavTopics';
import ArticlesList from './components/ArticlesList';
import DisplayErrors from './components/DisplayErrors';
import SingleArticle from './components/SingleArticle';
import logo from './Images/norum-logo-2.png';

function App() {
  return (
    <div className='App'>
      <img src={logo}></img>
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
