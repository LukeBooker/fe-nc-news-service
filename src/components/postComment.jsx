import { useState, useEffect } from "react";
import * as api from "../api";

const PostComment = ({
  articleId,
  setComments,
  setShowCommentForm,
  setConfirmCommentPost,
}) => {
  const [username, setUsername] = useState("");
  const [err, setErr] = useState();

  const [body, setBody] = useState("");
  const handleSubmit = (username, body) => {
    if (!username || !body) return setErr(true);
    api
      .postComment(articleId, username, body)
      .then((newPostedComment) => {
        setComments((currentComments) => {
          const newComments = [newPostedComment, ...currentComments];
          return newComments;
        });
        setShowCommentForm(false);
        setConfirmCommentPost(true);
      })
      .catch((err) => {
        if (err) setErr(true);
      });
  };
  if (err) return <p>Something went wrong. Please try again.</p>;

  return (
    <>
      <form class="field mt-4 mx-6 px-6">
        <label class="label">Username</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="e.g luckylion7"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </div>
        <label class="label mt-3">Comment</label>
        <div class="control">
          <textarea
            class="textarea"
            type="text"
            placeholder="Enter your comment"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>
        <p class="control mt-4">
          <a
            class="button is-primary"
            onClick={() => handleSubmit(username, body)}
            type="submit"
            value="Submit"
          >
            Submit
          </a>
        </p>
      </form>
    </>
  );
};

export default PostComment;
