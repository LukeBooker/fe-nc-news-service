const ArticleSort = ({ setSortBy, setOrderBy }) => {
  return (
    <>
      <p class="is-centered">Sort by</p>
      <div class="buttons is-centered">
        <button
          class="button is-info"
          // link
          onClick={() => {
            setSortBy("created_at");
          }}
        >
          date
        </button>
        <button
          class="button is-info"
          onClick={() => {
            setSortBy("comment_count");
          }}
        >
          comment count
        </button>
        <button
          class="button is-info"
          onClick={() => {
            setSortBy("votes");
          }}
        >
          votes
        </button>
        <button
          class="button is-info"
          onClick={() => {
            setOrderBy("asc");
          }}
        >
          order asc
        </button>
        <button
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
