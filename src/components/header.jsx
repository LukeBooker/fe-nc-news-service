const Header = ({ topic }) => {
  if (!topic) {
    return (
      <section>
        <header className="section mt-6 bg-img-home">
          <p className="title is-1 has-text-light mt-4">
            a little place for civil discourse
          </p>
        </header>
      </section>
    );
  } else {
    return (
      <section>
        <header className="section mt-6 bg-img-topics">
          <p className="title is-1 has-text-white mt-4">{topic}</p>
        </header>
      </section>
    );
  }
};

export default Header;
