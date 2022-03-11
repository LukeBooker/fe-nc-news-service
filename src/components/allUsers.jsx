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

  const logIn = (username) => {
    setLoggedInUser(username);
  };

  if (isLoading) return <p>users loading</p>;

  return (
    <>
      <Header />
      <section class="is-multiline columns is-centered">
        {users.map((user, index) => {
          return (
            <article
              className="card column is-full-mobile is-one-quarter-tablet is-one-fifth-desktop is-one-sixth-widescreen  mx-5 my-5"
              key={index}
            >
              <div className="card-image ">
                <figure className="image is-500x500"></figure>
              </div>

              <div className="media-content ">
                <figure>
                  <img
                    src={user.avatar_url}
                    alt="User avatar"
                    class="avatar"
                  ></img>
                </figure>

                <p className="has-text-info-dark is-size-5 mr-4 mb-2">
                  @{user.username}
                </p>
                <p className="is-size-6 mr-4 mb-2">{user.name}</p>
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
