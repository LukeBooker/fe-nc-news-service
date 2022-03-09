import { Link } from "react-router-dom";

const ArticleCard = ({ articleId, title, topic, author, createdAt, votes }) => {
  const time = new Date(createdAt).toLocaleTimeString("en", {
    timeStyle: "short",
    hour12: true,
    timeZone: "UTC",
  });
  const date = new Date(createdAt);
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dateStr = month + "/" + day + "/" + year;

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
                src="https://cdn-icons-png.flaticon.com/512/2948/2948035.png"
                alt="Placeholder image"
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
          <span className="tag mr-3 mb-3">{votes} votes</span>

          <a href="#">#{topic}</a>
          <br></br>
          <time>{`${time} ${dateStr}`}</time>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
