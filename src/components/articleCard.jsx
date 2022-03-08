const ArticleCard = ({
  article_id,
  title,
  topic,
  author,
  createdAt,
  votes,
}) => {
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
  console.log(typeof time);

  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-500x500"></figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2948/2948035.png"
                alt="Placeholder image"
              ></img>
            </figure>
          </div>
          <div class="media-content pb-0 mb-0">
            <p class="is-size-5 is-clickable" id="article-title" href="#">
              {title}
            </p>
            <p class="subtitle is-6">{author}</p>
          </div>
        </div>
        <div class="content">
          <span class="tag mr-3 mb-3">{votes} votes</span>

          <a href="#">#{topic}</a>
          <br></br>
          <time datetime="2016-1-1">{`${time} ${dateStr}`}</time>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
