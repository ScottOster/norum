import {Component} from 'react';
import {fetchSingleArticle} from '../API'


class SingleArticle extends Component {

    state = {
     article: [],
         isLoading : true
     }

     componentDidMount() {

        const path = this.props.article_id;
        fetchSingleArticle(path).then((article)=>{

            this.setState({article : article, isLoading : false})

           // console.log(this.state)
        })
     }

     

    




    render ()


    {
        const {isLoading} = this.state;
        if (isLoading) {

            return <p>Page is loading....</p>
        }

        else {

            const singleArticle = this.state.article;
            console.dir(singleArticle)
            return <main>

               <h2>{singleArticle.title}, written by {singleArticle.author}</h2>
               <p>{singleArticle.body}</p>



            </main>

        }
        
       
    
    
    
    
    }
}

export default SingleArticle;