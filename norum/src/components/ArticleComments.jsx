import { Component } from 'react';
import '../App.css';

import { fetchCommentsById } from '../API';
import PostComment from './PostComment';
import DeleteComment from './DeleteComment';
import VoteHandler from './VoteHandler';

class ArticleComments extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount() {
    const article_id = this.props.path;
    fetchCommentsById(article_id).then((comments) => {
      this.setState({ comments: comments, isLoading: false });
    });
  }

  deleteFromState = (comment_id) => {
    const remainingComments = this.state.comments.filter((comment) => {
      if (comment_id !== comment.comment_id) {
        return comment;
      } else {
        return null;
      }
    });

    this.setState({ comments: remainingComments });
  };

  updateState = (data) => {
    this.setState((currentState) => {
      return { comments: [...data, ...currentState.comments] };
    });
  };

  render() {
    return (
      <main>
        {' '}
        <PostComment path={this.props.path} updateState={this.updateState} />
        {this.state.comments.map((comment) => {
          return (
            <section className='CommentsCard' key={comment.comment_id}>
              <h4> Comment by: {comment.author} </h4>

              <p> Comment: {comment.body} </p>
              <VoteHandler
                currVotes={comment.votes}
                comment_id={comment.comment_id}
                author={comment.author}
              />
              <DeleteComment
                deleteFromState={this.deleteFromState}
                comment_id={comment.comment_id}
                author={comment.author}
              />
            </section>
          );
        })}
      </main>
    );
  }
}

export default ArticleComments;
