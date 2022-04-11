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

  const date = new Date();
  const day = date.getDate();

  return (
    <nav
      className="navbar is-fixed-top has-background-info-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link key="home" to="/">
          <span className="navbar-item">
            <h5 className="has-text-info">nc news</h5>
          </span>
        </Link>
        <p
          className="is-size-5 px-3 py-3 mt-2 login"
          id={
            loggedInUser.length > 0
              ? "nav-avatar-text-active"
              : "nav-avatar-text-disabled"
          }
        >
          {loggedInUser.length > 0 ? `Hello, ${loggedInUser[0]}!` : null}
        </p>
        <figure>
          <img
            src={
              loggedInUser.length > 0
                ? `${loggedInUser[1]}`
                : "https://cdn-icons-png.flaticon.com/512/2948/2948035.png"
            }
            alt={loggedInUser.length > 0 ? "User avatar" : ""}
            id={
              loggedInUser.length > 0
                ? "nav-avatar-active"
                : "nav-avatar-disabled"
            }
            className="avatar"
          ></img>
        </figure>
        <span
          onClick={() => {
            setIsActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger mr-2 ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          id="burger-menu"
        >
          <span aria-hidden="true" id="burger-bars"></span>
          <span aria-hidden="true" id="burger-bars"></span>
          <span aria-hidden="true" id="burger-bars"></span>
        </span>
      </div>
      <div
        id="navbar"
        className={`navbar-menu ${isActive ? "is-active" : ""} mr-3`}
      >
        <div className="navbar-end">
          <Link className="navbar-item" key="post-article" to="/">
            <span
              className="navbar-item"
              onClick={() => {
                alert("'Post an article' coming soon!");
                if (isActive) setIsActive(!isActive);
              }}
            >
              Post an article
            </span>
          </Link>
          <Link
            className="navbar-item"
            key="article-of-day"
            to={`/articles/${day}`}
            onClick={() => {
              if (isActive) setIsActive(!isActive);
            }}
          >
            {" "}
            <span className="navbar-item">Article of the day</span>
          </Link>
          <Link
            className="navbar-item"
            key="about"
            to={`/about`}
            onClick={() => {
              if (isActive) setIsActive(!isActive);
            }}
          >
            <span className={`navbar-item ${isActive ? "" : "mr-4"}`}>
              About
            </span>
          </Link>
          <span
            className="navbar-item"
            id={`${isActive ? "login-burger" : ""}`}
          >
            <Link
              key="log-in"
              to={loggedInUser.length > 0 ? "/" : "/users"}
              onClick={() => {
                if (isActive) setIsActive(!isActive);
              }}
            >
              <span
                className={
                  loggedInUser.length > 0
                    ? "navbar-item columns is-centered my-0 has-text-weight-bold button is-normal is-responsive has-background-light has-text-info "
                    : "navbar-item columns is-centered my-0 button is-normal is-responsive has-background-info has-text-light "
                }
                onClick={() => {
                  if (loggedInUser.length > 0) handleLogOut();
                  if (isActive) setIsActive(!isActive);
                }}
              >
                <strong>
                  {loggedInUser.length > 0 ? "Log out" : "Log in"}
                </strong>
              </span>
            </Link>{" "}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
