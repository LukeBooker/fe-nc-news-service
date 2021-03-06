import axios from "axios";

const baseURL = "https://northcoders-news-project.herokuapp.com/api";

export const fetchTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

// export const fetchArticlesByTopic = (topic) => {
//   return axios.get(`${baseURL}/articles?topic=${topic}`).then(({ data }) => {
//     return data.articles;
//   });
// };

export const fetchArticleById = (articleId) => {
  return axios.get(`${baseURL}/articles/${articleId}`).then(({ data }) => {
    return data.article;
  });
};

export const patchArticleVotes = (articleId, voteChange) => {
  return axios
    .patch(`${baseURL}/articles/${articleId}`, { inc_votes: voteChange })
    .then(({ data }) => {
      return data.updatedArticle;
    });
};

export const fetchCommentsByArticleId = (articleId) => {
  return axios
    .get(`${baseURL}/articles/${articleId}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const postComment = (articleId, username, body) => {
  return axios
    .post(`${baseURL}/articles/${articleId}/comments`, {
      username: username,
      body: body,
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const fetchUsers = () => {
  return axios.get(`${baseURL}/users`).then(({ data }) => {
    return data.users;
  });
};

export const fetchArticles = (topic, sortBy, orderBy) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: { topic: topic, sort_by: sortBy, order: orderBy },
    })
    .then(({ data }) => {
      return data.articles;
    });
  // .catch((err) => {
  //   return err;
  // });
};

export const deleteCommentById = (commentId) => {
  return axios
    .delete(`${baseURL}/comments/${commentId}`)
    .then(({ response }) => {
      return response;
    });
};
