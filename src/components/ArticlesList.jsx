import React, { Component } from 'react';
import { fetchArticles } from '../API';
import ArticlesCards from './ArticlesCards';
import sortImage from '../Images/sort.png';

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: '',
    order: 'desc',
    page: 1,
    limit: 8,
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
      limit !== prevState.limit
    ) {
      fetchArticles(path, sortBy, order, limit, page).then((articles) => {
        this.setState({
          articles: [...articles],
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
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      let newLimit = this.state.limit;
      newLimit += 5;
      this.setState({ infScrollLoading: 'Getting More News.....' });
      setTimeout(() => {
        this.setState({ limit: newLimit });
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
          <h3 className='SortBySect'>
            <button
              id='created_at'
              className='SortButton'
              onClick={this.handleClick}
            >
              Date &#8645;
            </button>
            <button
              id='comment_count'
              className='SortButton'
              onClick={this.handleClick}
            >
              Comments &#8645;
            </button>
            <button
              id='votes'
              className='SortButton'
              onClick={this.handleClick}
            >
              Votes &#8645;
            </button>
          </h3>

          <ArticlesCards articles={this.state.articles} />
          <p className='ScrollLoadingMessage'>{this.state.infScrollLoading}</p>
        </section>
      );
    }
  }
}

export default ArticlesList;
