import Header from "./header";
import ArticleByTopic from "./articleByTopic";
import ArticleCard from "./articleCard";
import * as api from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./loading";

const ArticleList = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!topic) {
      api.fetchArticles().then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      });
    } else {
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
