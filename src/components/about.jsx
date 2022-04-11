import Header from "./header";
const About = () => {
  return (
    <>
      <Header topic="about" />
      <section className="box content mx-5 my-2">
        <h5 className=" is-size-1 has-text-info ml-3 mt-4 mb-0">nc news</h5>
        <h3 className="has-text-centered has-text-weight-light mt-0">
          by Luke Booker
        </h3>
        <br></br>
        <p className="mb-5 px-4 has-text-left">
          Northcoders News (NC-News) is a social news aggregation, web content
          rating, and discussion website. Users can access articles which can be
          divided by topic or sorted by various criteria. Each article has user
          ratings which can be up or down voted using the API. <br></br>{" "}
          <br></br>This project was created over two weeks on the Northcoders
          Coding Bootcamp. The first week was dedicated to building a RESTful
          API using Express.js with PostgreSQL; the second week focused on the
          front end working with REACT.js.
        </p>
      </section>
    </>
  );
};

export default About;
