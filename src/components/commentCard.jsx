import formatTime from "../utils/formatTime";
import { useState } from "react";

const CommentsCard = ({ body, votes, author, createdAt }) => {
  const timeArticleCreated = formatTime(createdAt);
  const [newVotes, setNewVotes] = useState(0);
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
          onClick={() => handleCommentVoteClick(+1)}
        >
          <i className="fas fa-arrow-alt-circle-up fa-2x"></i>
        </button>
        <span className="tag mx-1 my-0">
          <i className="fas fa-carrot fa-1x mx-0 my-0"></i>
          {votes + newVotes} votes
        </span>
        <button
          className="button is-small pt-2 is-info is-light mx-0 my-0"
          onClick={() => handleCommentVoteClick(-1)}
        >
          <i className="fas fa-arrow-alt-circle-down fa-2x"></i>
        </button>

        <p className="mt-2">{timeArticleCreated}</p>
      </article>
    </>
  );
};

export default CommentsCard;
