import axios from "axios";

const baseURL = "https://northcoders-news-project.herokuapp.com/api";

export const fetchArticles = () => {
  return axios.get(`${baseURL}/articles`).then(({ data }) => {
    return data.articles;
  });
};
