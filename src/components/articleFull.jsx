import * as api from "../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./header";
import { Link } from "react-router-dom";

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

  const time = new Date(article.created_at).toLocaleTimeString("en", {
    timeStyle: "short",
    hour12: true,
    timeZone: "UTC",
  });
  const date = new Date(article.created_at);
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dateStr = month + "/" + day + "/" + year;

  if (isLoading)
    return (
      <section>
        <div className="block mt-6 pt-6">
          <p className="is-size-2 mt-6">
            One moment. <br></br>Loading...
          </p>
        </div>
      </section>
    );
  return (
    <>
      <Header topic={article.topic} />
      <section className="box mx-5 my-2">
        <div className="content">
          <h1 className="mx-0 my-0" id="full-article-title">
            {article.title}
          </h1>
          <h3 className="has-text-centered has-text-weight-light my-4">
            by {article.author}
          </h3>
          <span className="tag is-size-6 mr-3 mb-3">{article.votes} votes</span>
          <span className="has-text-info">
            {article.comment_count} comments
          </span>
          <br></br>
          <time>{`${time} ${dateStr}`}</time>
          <p className="mt-3 px-4 has-text-left">{article.body}</p>
          <Link key="home" to={`/`}>
            <button
              id="topic-button"
              className="all-topics-button button is-info is-outlined is-rounded mx-2 my-2"
            >
              Home
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

// article_id: 34;
// comment_count: "11";
// votes: 0;

export default ArticleFull;
