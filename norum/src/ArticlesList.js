import React, { Component } from 'react';
import { fetchArticles } from './API';
import ArticlesCards from './ArticlesCards';

class ArticlesList extends Component {
  state = {
    articles: [],
  };
  componentDidMount() {
    let path = this.props.topic;
    fetchArticles(path).then((articles) => {
      this.setState({ articles: articles });
    });
  }
  render() {
    // console.dir(articles, 'in articles');

    return <ArticlesCards articles={this.state.articles} />;
  }
}

export default ArticlesList;
