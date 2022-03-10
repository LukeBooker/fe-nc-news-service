import axios from "axios";

const baseURL = "https://northcoders-news-project.herokuapp.com/api";

export const fetchArticles = () => {
  return axios.get(`${baseURL}/articles`).then(({ data }) => {
    return data.articles;
  });
};

export const fetchTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const fetchArticlesByTopic = (topic) => {
  return axios.get(`${baseURL}/articles?topic=${topic}`).then(({ data }) => {
    return data.articles;
  });
};

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
