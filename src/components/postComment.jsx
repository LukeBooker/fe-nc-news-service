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
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [err, setErr] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (loggedInUser, body) => {
    if (typeof loggedInUser === "object") return setErr("user");
    if (!body) return setErr("body");
    api
      .postComment(articleId, loggedInUser, body)
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
      <p className="is-size-4 my-6 py-5">Please log in to post a commment.</p>
    );

  return (
    <>
      <form class="field mt-4 mx-6 px-6">
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
            onClick={() => handleSubmit(loggedInUser, body)}
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
