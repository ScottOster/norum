import {Link} from '@reach/router'



 const ArticlesCards = ({articles})=> {

    
    
    
 

return ( <main className  = 'ArticlesPages'> {

articles.map((articles)=>{

return (

    <ul className ='ArticlesCard' key = {articles.article_id
    }>
        <li>Title:  {articles.title}</li>
        <li>Author:  {articles.author} </li>

    
    <li > Topic : {articles.topic}</li>
    <li> Votes : {articles.votes}</li>
    <li>Posted On: {articles.created_at}</li>
    <li> Comments : {articles.comment_count}</li>
    <li>Articles count-fix! {articles.total_articles_count}</li>
    <Link to = {`/articles/${articles.article_id}`}>EXPAND ARTICLE</Link>

    </ul>
)

})

 }

) </main>

)

}







export default ArticlesCards;