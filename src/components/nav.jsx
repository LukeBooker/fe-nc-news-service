import { Link } from "react-router-dom";
import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/userLogIn";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const handleLogOut = () => {
    setLoggedInUser({});
  };

  return (
    <nav
      className="navbar is-fixed-top has-background-info-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link key="home" to="/">
          <a className="navbar-item">
            <h5 className="has-text-info ml-3">nc news</h5>
          </a>
        </Link>
        <p className="is-size-5 px-3 py-3 mt-2">
          {loggedInUser.length > 0 ? `Hello, ${loggedInUser[0]}!` : null}
        </p>
        <figure>
          <img
            src={
              loggedInUser.length > 0
                ? `${loggedInUser[1]}`
                : "https://cdn-icons-png.flaticon.com/512/2948/2948035.png"
            }
            alt={loggedInUser.length > 0 ? "User avatar" : null}
            id={
              loggedInUser.length > 0
                ? "nav-avatar-active"
                : "nav-avatar-disabled"
            }
            class="avatar"
          ></img>
        </figure>
        <a
          onClick={() => {
            setIsActive(!isActive);
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
          <Link key="log-in" to={loggedInUser.length > 0 ? "/" : "/users"}>
            <button
              className={
                loggedInUser.length > 0
                  ? "navbar-item columns is-centered my-0 has-text-weight-bold button is-normal is-responsive has-background-light has-text-info "
                  : "navbar-item columns is-centered my-0 button is-normal is-responsive has-background-info has-text-light "
              }
              onClick={() => {
                if (loggedInUser.length > 0) handleLogOut();
              }}
            >
              <strong>{loggedInUser.length > 0 ? "Log out" : "Log in"}</strong>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
