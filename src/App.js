import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import NavTopics from './components/NavTopics';
import ArticlesList from './components/ArticlesList';
import DisplayErrors from './components/DisplayErrors';
import SingleArticle from './components/SingleArticle';
import headerImage from './Images/headerLogo2.png';

function App() {
  return (
    <div className='App'>
      <section className='HeaderImage'>
        <img src={headerImage}></img>
      </section>

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
