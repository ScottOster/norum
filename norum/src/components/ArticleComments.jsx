import {Component} from 'react';
import '../App.css'

import {fetchCommentsById} from '../API'
import PostComment from './PostComment';

class ArticleComments extends Component {



    state = {

        comments: [],
        isLoading : true,
    }

    

    componentDidMount(){
        const article_id = this.props.path
        fetchCommentsById(article_id).then(comments=>{

         
            this.setState({comments:comments, isLoading: false})

        })

       
    }


    updateState =(data)=> {

       

        this.setState((currentState)=>{

            

            return { comments : [ ...data, ...currentState.comments]}
        })



    }

render()


{
    
   
    
    
    return (

<main > <PostComment path = {this.props.path} updateState = {this.updateState}/>{

this.state.comments.map(comment=>{

    return (

        
           <section className = 'CommentsCard' key={comment.comment_id}>

            <h4> Comment by: {comment.author} </h4>
            
            <p> Comment: {comment.body} </p>
            <h4> Votes: {comment.votes} </h4>


            </section>



        


    )
})


}

</main>



)



}


}

export default ArticleComments;