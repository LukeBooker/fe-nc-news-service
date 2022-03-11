import Header from "./header";
import ArticleByTopic from "./articleByTopic";
import ArticleCard from "./articleCard";
import ArticleSort from "./articleSort";
import * as api from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./loading";

const ArticleList = ({ users }) => {
  const { topic } = useParams();
  const [articles, setArticles] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticles(topic, sortBy, orderBy).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic, sortBy, orderBy]);

  if (isLoading) return <Loading />;

  return (
    <>
      <Header topic={topic} />
      <ArticleByTopic />
      <ArticleSort
        topic={topic}
        setSortBy={setSortBy}
        setOrderBy={setOrderBy}
      />
      <section className="section pt-1">
        <div className="container">
          {articles.map(
            ({
              article_id,
              title,
              topic,
              author,
              created_at,
              votes,
              comment_count,
            }) => {
              return (
                <ArticleCard
                  key={article_id}
                  articleId={article_id}
                  title={title}
                  topic={topic}
                  author={author}
                  createdAt={created_at}
                  votes={votes}
                  comment_count={comment_count}
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
