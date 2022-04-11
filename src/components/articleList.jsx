import Header from "./header";
import ArticleByTopic from "./articleByTopic";
import ArticleCard from "./articleCard";
import ArticleSort from "./articleSort";
import * as api from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./loading";
import ErrorPage from "./errorPage";

const ArticleList = ({ users }) => {
  const { topic } = useParams();
  const [articles, setArticles] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrderBy] = useState("");

  useEffect(() => {
    let mounted = true;
    api
      .fetchArticles(topic, sortBy, orderBy)
      .then((articles) => {
        if (mounted) {
          setArticles(articles);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setError({ err });
      });
    return () => {
      mounted = false;
    };
  }, [topic, sortBy, orderBy]);

  if (error) {
    return <ErrorPage error="topic" />;
  }

  if (isLoading) return <Loading />;

  return (
    <>
      <Header topic={topic} />
      <ArticleByTopic topic={topic} />
      <ArticleSort
        sortBy={sortBy}
        setSortBy={setSortBy}
        orderBy={orderBy}
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
