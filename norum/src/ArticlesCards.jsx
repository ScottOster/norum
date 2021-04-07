



 const ArticlesCards = ({articles})=> {
console.dir(articles);
    
    
    
 

return (

articles.map((articles)=>{

return (

    <main className ='ArticlesCard'>

    <p>Author:  {articles.author} Topic : {articles.topic}</p>

    </main>
)

})
)

}







export default ArticlesCards;