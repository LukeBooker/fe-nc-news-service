import { Link } from "react-router-dom";
import formatTime from "../utils/formatTime";

const ArticleCard = ({
  articleId,
  title,
  topic,
  author,
  createdAt,
  votes,
  comment_count,
}) => {
  const timeArticleCreated = formatTime(createdAt);

  return (
    <article className="card">
      <div className="card-image">
        <figure className="image is-500x500"></figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://cdn-icons-png.flaticon.com/512/81/81460.png"
                alt="Placeholder"
              ></img>
            </figure>
          </div>
          <div className="media-content pb-0 mb-0">
            <Link key={articleId} to={`/articles/${articleId}`}>
              <p className="is-size-5 is-clickable" id="article-title" href="#">
                {title}
              </p>
            </Link>
            <p className="subtitle is-6">{author}</p>
          </div>
        </div>
        <div className="content">
          <span className="tag mr-3 mb-3">
            <i className="fas fa-carrot fa-1x mr-1"></i>
            {votes} votes
          </span>
          <Link key={articleId} to={`/topic/${topic}`}>
            <span>#{topic}</span>
          </Link>
          <br></br>
          <time>{timeArticleCreated}</time>
          <p className="has-text-grey">{comment_count} comments</p>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
