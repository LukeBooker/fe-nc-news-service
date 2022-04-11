import * as api from "../api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ArticleByTopic = ({ topic }) => {
  const [topics, setTopics] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchTopics().then((topics) => {
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return <p className="is-size-4 mx-5 my-5">Loading topics...</p>;

  return (
    <div>
      <section className="box mb-5 has-background-info-light" id="topic-box">
        <h3 className="has-text-grey-darker has-text-weight-semibold">
          Your daily topics
        </h3>
        <div>
          <Link key="all" to={`/`}>
            <button
              id={!topic ? "topic-select-button" : "topic-button"}
              className="all-topics-button button is-info is-outlined is-rounded is-medium mx-2 my-2"
            >
              all topics
            </button>
          </Link>
          {topics.map(({ slug }) => {
            return (
              <Link key={slug} to={`/topic/${slug}`}>
                <button
                  id={topic === slug ? "topic-select-button" : "topic-button"}
                  className="button is-info is-outlined is-rounded is-medium mx-2 my-2"
                >
                  {slug}
                </button>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ArticleByTopic;
