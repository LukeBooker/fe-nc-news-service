import * as api from "../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import formatTime from "../utils/formatTime";
import Loading from "./loading";

const ArticleFull = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchArticleById(articleId).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  const timeArticleCreated = formatTime(article.created_at);

  if (isLoading) return <Loading />;
  return (
    <>
      <Header topic={article.topic} />
      <section className="box content mx-5 my-2">
        <h1 className="mx-0 my-0" id="full-article-title">
          {article.title}
        </h1>
        <h3 className="has-text-centered has-text-weight-light my-4">
          by {article.author}
        </h3>
        <span className="tag is-size-6 mr-3 mb-3">{article.votes} votes</span>
        <span className="has-text-info">{article.comment_count} comments</span>
        <br></br>
        <time>{timeArticleCreated}</time>
        <p className="mt-3 px-4 has-text-left">{article.body}</p>
        <Link key="home" to={`/`}>
          <button
            id="topic-button"
            className="all-topics-button button is-info is-outlined is-rounded mx-2 my-2"
          >
            Home
          </button>
        </Link>
      </section>
    </>
  );
};

export default ArticleFull;
