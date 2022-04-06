import CommentCard from "./commentCard";
import * as api from "../api";
import { useState, useEffect } from "react";

const CommentsList = ({ articleId, setComments, comments }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchCommentsByArticleId(articleId).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  });

  if (isLoading) return <p>comments loading</p>;

  return (
    <>
      <section className="mt-5 columns is-center is-multiline is-variable is-centered">
        {comments.map(
          ({ body, votes, author, created_at, comment_id }, index) => {
            return (
              <CommentCard
                setComments={setComments}
                commentId={comment_id}
                key={index}
                author={author}
                body={body}
                createdAt={created_at}
                votes={votes}
              />
            );
          }
        )}
      </section>
    </>
  );
};

export default CommentsList;
