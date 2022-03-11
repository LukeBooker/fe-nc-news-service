import * as api from "../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./header";
import Loading from "./loading";
import CommentsList from "./commentsList";
import PostComment from "./postComment";
import ArticleFull from "./articleFull";

const ArticleFullBody = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comments, setComments] = useState([]);
  const [confirmCommentPost, setConfirmCommentPost] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticleById(articleId).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  const handleShowCommentForm = () => {
    if (showCommentForm) setShowCommentForm(false);
    if (!showCommentForm) setShowCommentForm(true);
  };

  const handleConfirmCommentPost = () => {
    if (confirmCommentPost) setConfirmCommentPost(false);
    if (!confirmCommentPost) setConfirmCommentPost(true);
  };

  if (isLoading) return <Loading />;
  return (
    <>
      <Header topic={article.topic} />
      <ArticleFull
        articleId={articleId}
        title={article.title}
        author={article.author}
        votes={article.votes}
        commentCount={article.comment_count}
        createdAt={article.created_at}
        body={article.body}
        setArticle={setArticle}
        handleShowCommentForm={handleShowCommentForm}
      />
      {showCommentForm ? (
        <PostComment
          articleId={articleId}
          setComments={setComments}
          setShowCommentForm={setShowCommentForm}
          setConfirmCommentPost={setConfirmCommentPost}
        />
      ) : null}
      {confirmCommentPost ? (
        <>
          <h5 className="is-size-2 has-text-info">Success!</h5>
          <button
            class="button is-primary"
            onClick={() => handleConfirmCommentPost()}
          >
            Continue
          </button>
        </>
      ) : null}
      <CommentsList
        articleId={articleId}
        comments={comments}
        setComments={setComments}
      />
    </>
  );
};

export default ArticleFullBody;
