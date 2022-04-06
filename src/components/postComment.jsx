import { useState } from "react";
import * as api from "../api";
import { useContext } from "react";
import { UserContext } from "../contexts/userLogIn";

const PostComment = ({
  articleId,
  setComments,
  setShowCommentForm,
  setConfirmCommentPost,
}) => {
  const { loggedInUser } = useContext(UserContext);
  const [err, setErr] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (loggedInUser, body) => {
    if (!loggedInUser[0]) return setErr("user");
    if (!body) return setErr("body");
    api
      .postComment(articleId, loggedInUser[0], body)
      .then((newPostedComment) => {
        setComments((currentComments) => {
          const newComments = [newPostedComment, ...currentComments];
          return newComments;
        });
        setShowCommentForm(false);
        setConfirmCommentPost(true);
      })
      .catch((err) => {
        if (err) setErr("server problem");
      });
  };
  if (err === "server problem")
    return (
      <p className="is-size-4 my-6 py-5">
        Something went wrong. Please try again.
      </p>
    );
  if (err === "body")
    return <p className="is-size-4 my-6 py-5">Please enter a comment.</p>;
  if (err === "user")
    return (
      <p className="is-size-4 my-6 py-5">Please log in to post a comment.</p>
    );

  return (
    <>
      <form className="field mt-4 mx-6 px-6">
        <label className="label mt-3">Comment</label>
        <div className="control">
          <textarea
            className="textarea"
            type="text"
            placeholder="Enter your comment"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>
        <p className="control mt-4">
          <button
            className="button is-primary"
            onClick={() => handleSubmit(loggedInUser, body)}
            type="submit"
            value="Submit"
          >
            Submit
          </button>
        </p>
      </form>
    </>
  );
};

export default PostComment;
