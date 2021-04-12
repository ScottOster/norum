import React, { Component } from 'react';
import { fetchArticles } from '../API';
import ArticlesCards from './ArticlesCards';

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: '',
    order: 'desc',
    page: 1,
    limit: 5,
    infScrollLoading: 'Scroll down for more articles',
  };
  componentDidMount() {
    const path = this.props.topic;
    const sortBy = this.state.sort_by;
    const order = this.state.order;
    const page = this.state.page;
    const limit = this.state.limit;
    fetchArticles(path, sortBy, order, limit, page).then((articles) => {
      this.setState({
        articles: [...this.state.articles, ...articles],
        isLoading: false,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    window.addEventListener('scroll', this.infiniteScroll);
    const path = this.props.topic;

    const sortBy = this.state.sort_by;
    const order = this.state.order;
    const page = this.state.page;
    const limit = this.state.limit;

    if (
      path !== prevProps.topic ||
      sortBy !== prevState.sort_by ||
      order !== prevState.order ||
      page !== prevState.page
    ) {
      fetchArticles(path, sortBy, order, limit, page).then((articles) => {
        this.setState({
          articles: [...this.state.articles, ...articles],
          isLoading: false,
          infScrollLoading: 'Scroll down for more articles',
        });
      });
    }
  }

  handleClick = (event) => {
    if (this.state.order === 'desc') {
      const newOrder = 'asc';
      const newSort = event.target.id;
      this.setState({ sort_by: newSort, order: newOrder });
    } else {
      const newOrder = 'desc';
      const newSort = event.target.id;
      this.setState({ sort_by: newSort, order: newOrder });
    }
  };

  infiniteScroll = () => {
    const path = this.props.topic;

    const sortBy = this.state.sort_by;
    const order = this.state.order;

    const limit = this.state.limit;
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      let newPage = this.state.page;
      newPage++;
      this.setState({ infScrollLoading: 'Getting More News.....' });
      setTimeout(() => {
        this.setState({ page: newPage });
        fetchArticles(path, sortBy, order, limit, newPage);
      }, 1200);
    }
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <p>Page is loading.......</p>;
    } else {
      return (
        <section>
          <h3>Sort By: </h3>
          <button id='created_at' onClick={this.handleClick}>
            Date
          </button>
          <button id='comment_count' onClick={this.handleClick}>
            Comment Count
          </button>
          <button id='votes' onClick={this.handleClick}>
            Vote Count
          </button>
          <ArticlesCards articles={this.state.articles} />
          <p className='scroll loading message'>
            {this.state.infScrollLoading}
          </p>
        </section>
      );
    }
  }
}

export default ArticlesList;
