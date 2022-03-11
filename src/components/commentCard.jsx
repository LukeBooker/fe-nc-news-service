import formatTime from "../utils/formatTime";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/userLogIn";
import * as api from "../api";

const CommentsCard = ({
  body,
  votes,
  author,
  createdAt,
  commentId,
  setComments,
}) => {
  const timeArticleCreated = formatTime(createdAt);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const loggedInUsername = loggedInUser[0];
  const [err, setErr] = useState();

  const [newVotes, setNewVotes] = useState(0);
  const [disableUpVote, setDisableUpVote] = useState(false);
  const [disableDownVote, setDisableDownVote] = useState(false);

  const handleCommentDeleteClick = (commentId) => {
    api
      .deleteCommentById(commentId)
      .then(() => {
        setComments((currentComments) => {
          const newComments = currentComments.filter(
            (comment) => comment.comment_id !== commentId
          );
          return newComments;
        });
      })
      .catch((err) => {
        if (err) setErr(true);
      });
  };

  const handleCommentVoteClick = (voteChange) => {
    setNewVotes((currentVotes) => currentVotes + voteChange);
  };

  return (
    <>
      <article className="box mx-3 pb-0 column is-one-quarter has-background-warning-light">
        <p className="has-text-info-dark is-size-5 has-text-right mr-4 mb-2">
          @{author}
        </p>
        <p className="mb-3">{body}</p>
        <button
          className="button is-small pt-2 is-info is-light mx-0 my-0"
          disabled={disableUpVote}
          onClick={() => {
            handleCommentVoteClick(+1);
            setDisableUpVote(true);
          }}
        >
          <i className="fas fa-arrow-alt-circle-up fa-2x"></i>
        </button>
        <span className="tag mx-1 my-0">
          <i className="fas fa-carrot fa-1x mx-0 my-0"></i>
          {votes + newVotes} votes
        </span>
        <button
          className="button is-small pt-2 is-info is-light mx-0 my-0"
          disabled={disableDownVote}
          onClick={() => {
            handleCommentVoteClick(-1);
            setDisableDownVote(true);
          }}
        >
          <i className="fas fa-arrow-alt-circle-down fa-2x"></i>
        </button>

        <p className="mt-2">{timeArticleCreated}</p>
        <button
          className="button is-small is-danger is-light"
          id={
            loggedInUsername === author
              ? "delete-comment"
              : "delete-comment-disable"
          }
          onClick={() => {
            handleCommentDeleteClick(commentId);
          }}
        >
          delete comment
        </button>
        <p
          className="is-size-6 has-text-danger mx-0 my-0 px-0 py-0"
          id={err ? "comment-error" : "no-comment-error"}
        >
          Comment not deleted. Please try again.
        </p>
      </article>
    </>
  );
};

export default CommentsCard;
