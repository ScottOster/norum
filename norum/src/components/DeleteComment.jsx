import React, { Component } from "react";

import {deleteCommentById} from "../API"


class DeleteComment extends Component {


    state = {

        author : 'cooljmessy'

    }



    handleClick = (event)=>{

        const comment_id = this.props.comment_id

        deleteCommentById(comment_id).then(()=>{
            this.props.deleteFromState(comment_id)

        }

        

        )
      

    }

    
    render() {

        if (this.props.author === this.state.author) {

            return (
                <div>
                    <button onClick = {this.handleClick}>Delete</button>
                </div>
            );

        }

        else {return null}
  
    }
}

export default DeleteComment;