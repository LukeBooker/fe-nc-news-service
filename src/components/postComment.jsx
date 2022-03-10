import { useState, useEffect } from "react";
import * as api from "../api";

const PostComment = ({ articleId, setComments }) => {
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (username, body) => {
    api.postComment(articleId, username, body).then((newComment) => {
      setComments((currentComments) => {
        const newComments = [newComment, ...currentComments];
        return newComments;
      });
    });
  };

  return (
    <>
      <form class="field">
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
        <label class="label">Comment</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Enter your comment"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></input>
        </div>
        <p class="control">
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
