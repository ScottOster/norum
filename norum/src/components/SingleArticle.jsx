import {Component} from 'react';


class SingleArticle extends Component {

    state = {
     article: [],
         isLoading : true
     }

     componentDidMount() {

        const path = this.props.article_id;
        fetchSingleArticle(path).then((article)=>{

            this.setState({article : article, isLoading : false})
        })
     }

     

    




    render ()
    {return <p> test helloo</p>}
}

export default SingleArticle;