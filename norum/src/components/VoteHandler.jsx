import React, { Component } from 'react';
import { patchCommentVotes } from '../API';

class VoteHandler extends Component {
  state = {
    author: 'cooljmessy',
    voteChange: 0,
  };

  updateVotesState = (comment_id, increment) => {
    this.upVoteButton.setAttribute('disabled', 'disabled');
    this.downVoteButton.setAttribute('disabled', 'disabled');
    this.setState((currentState) => {
      return { voteChange: currentState.voteChange + increment };
    });
    patchCommentVotes(comment_id, increment);
  };

  render() {
    const comment_id = this.props.comment_id;
    const liveVotes = this.props.currVotes + this.state.voteChange;

    if (this.props.author !== this.state.author) {
      return (
        <div className='VoteHandlerMain'>
          <button
            ref={(upVoteButton) => {
              this.upVoteButton = upVoteButton;
            }}
            onClick={() => {
              this.updateVotesState(comment_id, 1);
            }}
          >
            Vote UP
          </button>
          <p>{liveVotes}</p>
          <button
            ref={(downVoteButton) => {
              this.downVoteButton = downVoteButton;
            }}
            onClick={() => {
              this.updateVotesState(comment_id, -1);
            }}
          >
            Vote Down
          </button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default VoteHandler;
