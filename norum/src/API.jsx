import axios from 'axios';

const requests = axios.create({

    baseURL: 'https://norum-news-forum.herokuapp.com/api'
});

export const fetchTopics = ()=>{
return requests.get('/topics').then(({data})=>{

    return data.topics


})

}


export const fetchArticles = (topic)=>{
    

   return requests.get('/articles', {params: {topic: topic}} ).then(({data})=>{
//console.dir(data, "in API")
return data.articles 


    }
    )
}

export const fetchSingleArticle = (article_id)=>{

    console.dir(article_id, "article id in api")

    return requests.get(`articles/${article_id}`).then(({data})=>{
        //console.dir(data.article)
        return data.article

    }

       
    )
}