import React, { Component } from 'react';
import { postCommentById } from '../API';
import '../App.css';

class PostComment extends Component {
  state = {
    author: 'cooljmessy',
    body: '',
  };

  handleChange = (event) => {
    const value = event.target.value;

    this.setState({ body: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();

    const article_id = this.props.path;
    const { body, author } = this.state;

    postCommentById(article_id, body, author).then((data) => {
      this.props.updateState(data);
    });
  };

  render() {
    return (
      <section id='PostCommentSection'>
        <form onSubmit={this.handleSubmit}>
          <textarea
            className='CommentTextArea'
            onChange={this.handleChange}
            placeholder='Comment Away, and be kind!'
            rows='25'
            cols='40'
          ></textarea>
          <div>
            <button className='SubmitButton' type='submit'></button>
          </div>
        </form>
      </section>
    );
  }
}

export default PostComment;
