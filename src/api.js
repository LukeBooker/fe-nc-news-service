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
