import React, { Component } from 'react';
import { patchCommentVotes } from '../API';

class VoteHandler extends Component {
  state = {
    author: 'cooljmessy',
    voteChange: 0,
  };

  updateVotesState = (card_id, increment, card_type) => {
    this.upVoteButton.setAttribute('disabled', 'disabled');
    this.downVoteButton.setAttribute('disabled', 'disabled');
    this.setState((currentState) => {
      return { voteChange: currentState.voteChange + increment };
    });
    patchCommentVotes(card_id, increment, card_type);
  };

  render() {
    const card_id = this.props.card_id;
    const card_type = this.props.card_type;
    const liveVotes = this.props.currVotes + this.state.voteChange;

    if (this.props.author !== this.state.author) {
      return (
        <div className='VoteHandlerMain'>
          <button
            ref={(upVoteButton) => {
              this.upVoteButton = upVoteButton;
            }}
            onClick={() => {
              this.updateVotesState(card_id, 1, card_type);
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
              this.updateVotesState(card_id, -1, card_type);
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
