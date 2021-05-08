import React, { Component } from 'react';

import { deleteCommentById } from '../API';
import '../App.css';

class DeleteComment extends Component {
  state = {
    author: 'cooljmessy',
  };

  handleClick = (event) => {
    const comment_id = this.props.comment_id;

    this.props.deleteFromState(comment_id);
    deleteCommentById(comment_id);
  };

  render() {
    if (this.props.author === this.state.author) {
      return (
        <div>
          <button className='DeleteButton' onClick={this.handleClick}></button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default DeleteComment;
