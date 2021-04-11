import { Component } from 'react';
import { fetchSingleArticle } from '../API';
import ArticleComments from './ArticleComments';
import VoteHandler from './VoteHandler';

class SingleArticle extends Component {
  state = {
    article: [],
    isLoading: true,
  };

  componentDidMount() {
    const path = this.props.article_id;
    fetchSingleArticle(path).then((article) => {
      this.setState({ article: article, isLoading: false });
    });
  }

  render() {
    const { isLoading } = this.state;
    const path = this.props.article_id;
    const author = this.state.article.author;
    const currVotes = this.state.article.votes;
    if (isLoading) {
      return <p>Page is loading....</p>;
    } else {
      const singleArticle = this.state.article;

      return (
        <main>
          <h2>
            {singleArticle.title}, written by {singleArticle.author}
          </h2>
          <p>{singleArticle.body}</p>
          <VoteHandler
            card_id={path}
            card_type={'article'}
            author={author}
            currVotes={currVotes}
          />

          <ArticleComments path={path} />
        </main>
      );
    }
  }
}

export default SingleArticle;
