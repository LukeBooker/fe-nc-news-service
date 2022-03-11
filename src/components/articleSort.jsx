const ArticleSort = ({ sortBy, setSortBy, orderBy, setOrderBy }) => {
  console.log(orderBy);
  return (
    <>
      <p class="is-centered">Sort by</p>
      <div class="buttons is-centered">
        <button
          class="button is-info"
          disabled={sortBy === "created_at" ? "disabled" : ""}
          onClick={() => {
            setSortBy("created_at");
          }}
        >
          date
        </button>
        <button
          disabled={sortBy === "comment_count" ? "disabled" : ""}
          class="button is-info"
          onClick={() => {
            setSortBy("comment_count");
          }}
        >
          comment count
        </button>
        <button
          disabled={sortBy === "votes" ? "disabled" : ""}
          class="button is-info"
          onClick={() => {
            setSortBy("votes");
          }}
        >
          votes
        </button>
        <button
          disabled={orderBy === "asc" ? "disabled" : ""}
          class="button is-info"
          onClick={() => {
            setOrderBy("asc");
          }}
        >
          order asc
        </button>
        <button
          disabled={orderBy === "desc" ? "disabled" : ""}
          class="button is-info"
          onClick={() => {
            setOrderBy("desc");
          }}
        >
          order desc
        </button>
      </div>
    </>
  );
};

export default ArticleSort;
