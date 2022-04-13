const Loading = () => {
  return (
    <section>
      <div className="block mt-6 pt-6">
        <h5 className="has-text-info is-size-1 ml-3">nc news</h5>
        <p className="is-size-2 mt-6">Getting everything ready...</p>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
