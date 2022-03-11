import * as api from "../api";
import { useEffect, useState } from "react";
import Header from "./header";
import { useContext } from "react";
import { UserContext } from "../contexts/userLogIn";

const AllUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState("");
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    api.fetchUsers().then((usernames) => {
      setUsers(usernames);
      setIsLoading(false);
    });
  }, []);

  let loggedIn = false;
  const logIn = (username) => {
    setLoggedInUser(username);
    loggedIn = true;
  };

  if (isLoading) return <p>comments loading</p>;

  return (
    <>
      <Header />
      <section class="is-multiline columns is-centered">
        {users.map((user) => {
          return (
            <article className="card column is-full-mobile is-one-quarter-tablet is-one-fifth-desktop is-one-sixth-widescreen  mx-5 my-5">
              <div className="card-image ">
                <figure className="image is-500x500"></figure>
              </div>

              <div className="media-content ">
                <figure className="image is-inline-block is-48x48">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2948/2948035.png"
                    alt="Placeholder image"
                  ></img>
                </figure>
                <p className="is-6 pb-2 mb-0">{user.username}</p>
              </div>

              <button
                id="topic-button"
                className="button is-info is-outlined is-rounded  mx-2 my-2"
                onClick={() => {
                  logIn(user.username);
                }}
              >
                Log in
              </button>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default AllUsers;
