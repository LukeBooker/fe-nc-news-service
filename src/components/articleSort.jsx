const ArticleSort = ({
  topic,
  setDateSort,
  setCommentsSort,
  setVotesSort,
  setFlipSort,
}) => {
  const handleOnClick = (sortBy) => {
    if (sortBy === "date") setDateSort(true);
    if (sortBy === "comment") setCommentsSort(true);
    if (sortBy === "votes") setVotesSort(true);
    if (sortBy === "flip") setFlipSort(true);
  };

  return (
    <>
      <p class="is-centered">Sort by</p>
      <div class="buttons is-centered">
        <button
          class="button is-info"
          onClick={() => {
            handleOnClick("date");
          }}
        >
          date
        </button>
        <button
          class="button is-info"
          onClick={() => {
            handleOnClick("comment");
          }}
        >
          comment count
        </button>
        <button
          class="button is-info"
          onClick={() => {
            handleOnClick("votes");
          }}
        >
          votes
        </button>
        <button
          class="button is-info"
          onClick={() => {
            handleOnClick("flip");
          }}
        >
          flip order
        </button>
      </div>
    </>
  );
};

export default ArticleSort;
