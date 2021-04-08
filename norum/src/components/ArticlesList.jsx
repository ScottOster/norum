import React, { Component } from 'react';
import { fetchArticles } from '../API';
import ArticlesCards from './ArticlesCards';

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "",
    order: "desc"
  };
  componentDidMount() {
    const path = this.props.topic;
    const sortBy = this.state.sort_by;
    const order = this.state.order;
    fetchArticles(path, sortBy, order).then((articles) => {
      this.setState({ articles: articles, isLoading: false });
    });
  }



  componentDidUpdate(prevProps, prevState) {
    const path = this.props.topic;
    
    const sortBy = this.state.sort_by;
    const order = this.state.order;

    if (path !== prevProps.topic || sortBy !== prevState.sort_by || order !== prevState.order) {
      fetchArticles(path, sortBy, order).then((articles) => {
        this.setState({ articles: articles, isLoading: false });
      });
    }

    
  }

  handleClick = (event)=>{

if (this.state.order === "desc") {

  const newOrder = "asc"
  const newSort = event.target.id;
  this.setState({sort_by : newSort, order :newOrder} )
  
}
else {

  const newOrder = "desc"
  const newSort = event.target.id;
  this.setState({sort_by : newSort, order :newOrder} )

}


  }



  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <p>Page is loading.......</p>;
    } else {
      return (
        <section>
      <h3>Sort By: </h3><button id = 'created_at'onClick ={this.handleClick}>Date</button><button id = 'comment_count' onClick ={this.handleClick}>Comment Count</button><button id = 'votes' onClick ={this.handleClick}>Vote Count</button>
      <ArticlesCards articles={this.state.articles} />
      </section>)
    }
  }
}

export default ArticlesList;
