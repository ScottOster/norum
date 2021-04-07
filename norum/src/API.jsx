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
    console.dir(topic)

   return requests.get('/articles', {params: {topic: topic}} ).then(({data})=>{
//console.dir(data, "in API")
return data.articles 


    }
    )
}