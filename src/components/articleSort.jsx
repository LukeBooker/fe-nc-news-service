const ArticleSort = ({ sortBy, setSortBy, orderBy, setOrderBy }) => {
  return (
    <>
      <p className="is-centered mb-2 ">Sort by</p>
      <div className="buttons is-centered">
        <button
          className="button is-info "
          disabled={sortBy === "created_at" ? "disabled" : ""}
          onClick={() => {
            setSortBy("created_at");
          }}
        >
          <i className="fas fa-sun fa-1x mx-0 my-0"></i>
          &nbsp; date
        </button>
        <button
          disabled={sortBy === "comment_count" ? "disabled" : ""}
          className="button is-info"
          onClick={() => {
            setSortBy("comment_count");
          }}
        >
          {" "}
          <i className="far fa-comment fa-1x mx-0 my-0"></i>
          &nbsp; comment count
        </button>
        <button
          disabled={sortBy === "votes" ? "disabled" : ""}
          className="button is-info"
          onClick={() => {
            setSortBy("votes");
          }}
        >
          <i className="fas fa-carrot fa-1x mx-0 my-0"></i>
          &nbsp; votes
        </button>

        <button
          disabled={orderBy === "asc" ? "disabled" : ""}
          className="button is-info"
          onClick={() => {
            setOrderBy("asc");
          }}
        >
          {" "}
          <i className="fas fa-sort-amount-up-alt fa-1x mx-0 my-0"></i>
          &nbsp; order asc
        </button>
        <button
          disabled={orderBy === "desc" ? "disabled" : ""}
          className="button is-info"
          onClick={() => {
            setOrderBy("desc");
          }}
        >
          {" "}
          <i className="fas fa-sort-amount-down fa-1x mx-0 my-0"></i>&nbsp;
          order desc
        </button>
      </div>
    </>
  );
};

export default ArticleSort;
