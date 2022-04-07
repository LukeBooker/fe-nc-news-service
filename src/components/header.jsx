const Header = ({ topic }) => {
  if (!topic) {
    return (
      <>
        <header className="section mt-6 bg-img-home" id="bg-img">
          <p className="title is-1 has-text-light mt-4">
            a little place for civil discourse
          </p>
        </header>
      </>
    );
  } else {
    return (
      <>
        <header className={`section mt-6 bg-img-${topic}`} id="bg-img">
          <p className="title is-1 has-text-white mt-4">{topic}</p>
        </header>
      </>
    );
  }
};

export default Header;
