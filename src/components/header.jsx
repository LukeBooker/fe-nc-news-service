const Header = () => {
  return (
    <div>
      <section class="section mt-6 bg-img">
        <p class="title is-1 has-text-light mt-4">listen as well as you hear</p>
      </section>
      <div>
        <section class="box mb-5 has-background-info-light" id="topic-box">
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
      </div>
    </div>
  );
};

export default Header;
