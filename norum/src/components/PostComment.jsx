import React, { Component } from 'react';
import { postCommentById } from "../API";

class PostComment extends Component {

    state = {

        author : "cooljmessy",
        body :""
    }

handleChange = (event)=>{

    const value = event.target.value; 

    
this.setState({body : value})


}

handleSubmit = (event)=>{
    event.preventDefault();


const article_id = this.props.path
const {body, author} = this.state
//console.dir(author)

postCommentById(article_id, body, author )


}

    render() {
        return (
            <section id ='PostCommentSection'>
                <form onSubmit = {this.handleSubmit}>

                    <label htmlFor = 'commentBody'></label>
                    <input onChange = {this.handleChange} name ='commentBody' type= 'text' placeholder = 'Comment Away, and be kind!'></input>
                    <button type = 'submit'>Submit</button>
                </form>
            </section>
        );
    }
}

export default PostComment;