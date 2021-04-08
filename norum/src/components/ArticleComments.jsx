import {Component} from 'react';
import '../App.css'

import {fetchCommentsById} from '../API'

class ArticleComments extends Component {

    state = {

        comments: [],
        isLoading : true,
    }

    componentDidMount(){
        const article_id = this.props.path
        fetchCommentsById(article_id).then(comments=>{

           // console.dir(comments)

            this.setState({comments:comments, isLoading: false})

//console.dir(this.state)
        })

        //console.dir( article_id)
    }

render()


{return (

<main > {

this.state.comments.map(comment=>{

    return (

        
           <section className = 'CommentsCard' key={comment.comment_id}>

            <h4> Comment by: {comment.author} </h4>
            
            <p> Author: {comment.body} </p>
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