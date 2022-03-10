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

  useEffect(() => {
    api.fetchArticleById(articleId).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  const handleShowCommentForm = () => {
    if (showCommentForm) setShowCommentForm(false);
    if (!showCommentForm) setShowCommentForm(true);
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
      {showCommentForm ? <PostComment /> : null}
      <CommentsList articleId={articleId} />
    </>
  );
};

export default ArticleFullBody;
