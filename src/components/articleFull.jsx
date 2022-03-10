import * as api from "../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import formatTime from "../utils/formatTime";
import Loading from "./loading";
import Error from "./error";
import CommentsList from "./commentsList";

const ArticleFull = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState();
  const [newVotes, setNewVotes] = useState(0);
  const [disableUpVote, setDisableUpVote] = useState(false);
  const [disableDownVote, setDisableDownVote] = useState(false);

  useEffect(() => {
    api.fetchArticleById(articleId).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  const handleVoteClick = (voteChange) => {
    setNewVotes((currentVotes) => currentVotes + voteChange);
    updateVotes(articleId, voteChange);
  };

  const updateVotes = (articleId, voteChange) => {
    api.patchArticleVotes(articleId, voteChange).catch((err) => {
      setArticle((currentArticle) => {
        const newArticle = { ...currentArticle };
        newArticle.votes -= voteChange;
        return newArticle;
      });
      if (err) setErr(true);
    });
  };

  const timeArticleCreated = formatTime(article.created_at);
  if (err) return <Error />;
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
        <span className="tag is-size-6 mr-3 mb-3">
          <i className="fas fa-carrot fa-1x mr-1"></i>
          {article.votes + newVotes} votes
        </span>
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
        <button
          className="button is-info is-light mx-2 my-2"
          disabled={disableUpVote}
          onClick={() => {
            handleVoteClick(+1);
            setDisableUpVote(true);
          }}
        >
          <i className="fas fa-arrow-alt-circle-up fa-2x"></i> Vote
        </button>
        <span className="tag is-size-6 mt-3 ml-2 mr-2">
          <i className="fas fa-carrot fa-1x mr-1"></i>
          {article.votes + newVotes} votes
        </span>
        <button
          className="button is-info is-light mx-2 my-2"
          disabled={disableDownVote}
          onClick={() => {
            handleVoteClick(-1);
            setDisableDownVote(true);
          }}
        >
          <i className="fas fa-arrow-alt-circle-down fa-2x"></i> Vote
        </button>
      </section>
      <CommentsList articleId={articleId} />
    </>
  );
};

export default ArticleFull;
