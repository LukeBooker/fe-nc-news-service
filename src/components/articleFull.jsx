import Error from "./error";
import formatTime from "../utils/formatTime";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../api";

const ArticleFull = ({
  articleId,
  title,
  author,
  votes,
  commentCount,
  body,
  createdAt,
  setArticle,
  handleShowCommentForm,
}) => {
  const [newVotes, setNewVotes] = useState(0);
  const [disableUpVote, setDisableUpVote] = useState(false);
  const [disableDownVote, setDisableDownVote] = useState(false);
  const timeArticleCreated = formatTime(createdAt);
  const [err, setErr] = useState();

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
  if (err) return <Error />;

  return (
    <section className="box content mx-5 my-2">
      <h1 className="mx-0 my-0" id="full-article-title">
        {title}
      </h1>
      <h3 className="has-text-centered has-text-weight-light my-4">
        by {author}
      </h3>
      <span className="tag is-size-6 mr-3 mb-3">
        <i className="fas fa-carrot fa-1x mr-1"></i>
        {votes + newVotes} votes
      </span>
      <span className="has-text-info">{commentCount} comments</span>
      <br></br>
      <time>{timeArticleCreated}</time>
      <p className="mt-3 px-4 has-text-left">{body}</p>
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
        {votes + newVotes} votes
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
      <button onClick={() => handleShowCommentForm()}>Post Comment</button>
    </section>
  );
};
export default ArticleFull;
