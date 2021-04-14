import axios from 'axios';

const requests = axios.create({
  baseURL: 'https://norum-news-forum.herokuapp.com/api',
});

export const fetchTopics = () => {
  return requests.get('/topics').then(({ data }) => {
    return data.topics;
  });
};

export const fetchArticles = (topic, sortBy, order, limit, page) => {
  return requests
    .get('/articles', {
      params: {
        topic: topic,
        sort_by: sortBy,
        order: order,
        limit: limit,
        p: page,
      },
    })
    .then(({ data }) => {
      console.dir(data);
      return data.articles;
    });
};

export const fetchSingleArticle = (article_id) => {
  return requests.get(`articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const fetchCommentsById = (article_id) => {
  return requests.get(`/articles/${article_id}/comments`).then((comments) => {
    return comments.data;
  });
};

export const postCommentById = (article_id, body, username) => {
  return requests
    .post(`/articles/${article_id}/comments`, { username, body })
    .then(({ data }) => {
      return data.postedComment;
    });
};

export const deleteCommentById = (comment_id) => {
  return requests.delete(`/comments/${comment_id}`).then(({ status }) => {
    return status;
  });
};

export const patchCommentVotes = (card_id, increment, card_type) => {
  if (card_type === 'comment') {
    return requests
      .patch(`/comments/${card_id}`, { inc_votes: increment })
      .then(({ data }) => {});
  } else if (card_type === 'article') {
    return requests
      .patch(`/articles/${card_id}`, { inc_votes: increment })
      .then(({ data }) => {});
  }
};
