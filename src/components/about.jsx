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
        <p className="mt-0 pt-0 px-4 has-text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sint
          impedit id error quo modi, quibusdam ipsum, sit repudiandae delectus
          vitae nulla totam dolorem temporibus at, dolor laborum blanditiis
          quae.
        </p>
      </section>
    </>
  );
};

export default About;
