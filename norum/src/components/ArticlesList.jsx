import React, { Component } from 'react';
import { fetchArticles } from '../API';
import ArticlesCards from './ArticlesCards';

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };
  componentDidMount() {
    const path = this.props.topic;
    fetchArticles(path).then((articles) => {
      this.setState({ articles: articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps) {
    const path = this.props.topic;

    if (path !== prevProps.topic) {
      fetchArticles(path).then((articles) => {
        this.setState({ articles: articles, isLoading: false });
      });
    }
  }
  render() {
    // console.dir(articles, 'in articles');
    const { isLoading } = this.state;
    if (isLoading) {
      return <p>Page is loading.......</p>;
    } else {
      return <ArticlesCards articles={this.state.articles} />;
    }
  }
}

export default ArticlesList;
