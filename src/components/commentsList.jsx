import CommentCard from "./commentCard";
import * as api from "../api";
import { useState, useEffect } from "react";

const CommentsList = ({ articleId, setComments, comments }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    api.fetchCommentsByArticleId(articleId).then((comments) => {
      if (mounted) {
        setComments(comments);
        setIsLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  });

  if (isLoading) return <p className="is-size-2 mt-6">Comments loading...</p>;

  return (
    <>
      <section className="section mt-0 pt-0">
        <div className="mt-5 columns is-center is-multiline is-variable is-centered">
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
        </div>
      </section>
    </>
  );
};

export default CommentsList;
