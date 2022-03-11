import formatTime from "../utils/formatTime";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/userLogIn";

const CommentsCard = ({ body, votes, author, createdAt }) => {
  const timeArticleCreated = formatTime(createdAt);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const loggedInUsername = loggedInUser[0];

  const [newVotes, setNewVotes] = useState(0);
  const [disableUpVote, setDisableUpVote] = useState(false);
  const [disableDownVote, setDisableDownVote] = useState(false);

  const handleCommentVoteClick = (voteChange) => {
    setNewVotes((currentVotes) => currentVotes + voteChange);
  };

  return (
    <>
      <article className="box mx-3 column is-one-quarter has-background-warning-light">
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
        >
          delete comment
        </button>
      </article>
    </>
  );
};

export default CommentsCard;
