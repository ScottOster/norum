import axios from 'axios';

const requests = axios.create({

    baseURL: 'https://norum-news-forum.herokuapp.com/api'
});

export const fetchTopics = ()=>{
return requests.get('/topics').then(({data})=>{

    return data.topics


})

}


export const fetchArticles = (topic, sortBy, order)=>{
    

   return requests.get('/articles', {params: {topic: topic, sort_by: sortBy, order: order}} ).then(({data})=>{

return data.articles 


    }
    )
}

export const fetchSingleArticle = (article_id)=>{

    

    return requests.get(`articles/${article_id}`).then(({data})=>{
       
        return data.article

    }

       
    )
}

export const fetchCommentsById = (article_id)=>{
    return requests.get(`/articles/${article_id}/comments`).then(comments=>{

        return comments.data
    })



}