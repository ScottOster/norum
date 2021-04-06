import axios from 'axios';

const requests = axios.create({

    baseURL: 'https://norum-news-forum.herokuapp.com/api'
});

export const fetchTopics = ()=>{
return requests.get('/topics').then(({data})=>{

    return data.topics


})

}