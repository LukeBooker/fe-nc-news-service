const ErrorPage = ({ error }) => {
  const errorType = error || "url path";
  return (
    <>
      <section>
        <div className="block mt-6 pt-6">
          <h5 className="has-text-info is-size-1 ml-3">nc news</h5>
          <p className="is-size-2 mt-6">
            Sorry, that {errorType} has no information or pages associated with
            it.
            <br></br>Please try again.
          </p>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
