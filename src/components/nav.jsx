import { Link } from "react-router-dom";
import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/userLogIn";

const Nav = () => {
  const [isActive, setisActive] = React.useState(false);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [logInOrOut, setlogInOrOut] = useState(false);
  console.log(loggedInUser, "in nav");

  return (
    <nav
      className="navbar is-fixed-top has-background-info-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <h5 className="has-text-info ml-3">nc news</h5>
        </a>
        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbar" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-end">
          <a className="navbar-item">Post an article</a>
          <a className="navbar-item">Article of the day</a>
          <a className="navbar-item">About</a>
          {/* log in */}
          <Link key="log-in" to="/users">
            <a className="navbar-item button is-normal is-responsive has-background-info has-text-light mt-4 mr-3">
              <strong>Log in</strong>
            </a>
          </Link>
          {/* log out */}
          {/* <Link key="log-out" to="/users">
            <a className="navbar-item button is-normal is-responsive has-background-light has-text-info mt-4 mr-3">
              <strong>Log out</strong>
            </a>
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
