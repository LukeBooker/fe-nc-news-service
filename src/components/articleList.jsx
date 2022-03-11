import Header from "./header";
import ArticleByTopic from "./articleByTopic";
import ArticleCard from "./articleCard";
import ArticleSort from "./articleSort";
import * as api from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./loading";

const ArticleList = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [dateSort, setDateSort] = useState("");
  const [commentsSort, setCommentsSort] = useState("");
  const [votesSort, setVotesSort] = useState("");
  const [flipSort, setFlipSort] = useState("");

  console.log(dateSort, commentsSort, votesSort, flipSort);

  useEffect(() => {
    if (!topic) {
      setIsLoading(true);
      api.fetchArticles().then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      });
    } else {
      setIsLoading(true);
      api.fetchArticlesByTopic(topic).then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      });
    }
  }, [topic]);

  if (isLoading) return <Loading />;

  return (
    <>
      <Header topic={topic} />
      <ArticleByTopic />
      <ArticleSort
        topic={topic}
        setDateSort={setDateSort}
        setCommentsSort={setCommentsSort}
        setVotesSort={setVotesSort}
        setFlipSort={setFlipSort}
      />
      <section className="section pt-1">
        <div className="container">
          {articles.map(
            ({ article_id, title, topic, author, created_at, votes }) => {
              return (
                <ArticleCard
                  key={article_id}
                  articleId={article_id}
                  title={title}
                  topic={topic}
                  author={author}
                  createdAt={created_at}
                  votes={votes}
                />
              );
            }
          )}
        </div>
      </section>
    </>
  );
};

export default ArticleList;
