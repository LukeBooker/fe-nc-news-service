import ArticleCard from "./articleCard";

const ArticleList = () => {
  return (
    <div>
      <section>
        <h3 class="has-text-grey-darker has-text-weight-semibold">
          Your daily topics
        </h3>
        <div>
          {" "}
          <button
            id="topic-button"
            class="button is-info is-outlined is-rounded  mx-2 my-2"
          >
            Rounded
          </button>
          <button
            id="topic-button"
            class="button is-info is-outlined is-rounded  mx-2 my-2"
          >
            Rounded
          </button>
          <button
            id="topic-button"
            class="button is-info is-outlined is-rounded  mx-2 my-2"
          >
            Rounded
          </button>
          <button
            id="topic-button"
            class="button is-info is-outlined is-rounded  mx-2 my-2"
          >
            Rounded
          </button>
          <button
            id="topic-button"
            class="button is-info is-outlined is-rounded  mx-2 my-2"
          >
            Rounded
          </button>
        </div>
      </section>
      <section>
        <ArticleCard />
      </section>
    </div>
  );
};

export default ArticleList;
