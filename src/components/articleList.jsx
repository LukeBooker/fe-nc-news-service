import ArticleCard from "./articleCard";
import * as api from "../api";
import { useState, useEffect } from "react";

const ArticleList = () => {
  const [articles, setArticles] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p className="is-size-2 mx-5 my-5">loading..</p>;

  return (
    <section class="section pt-1">
      <div class="container">
        {articles.map(
          ({ article_id, title, topic, author, created_at, votes }) => {
            return (
              <ArticleCard
                key={article_id}
                articleId={article_id}
                title={title}
                topic={topic}
                author={author}
                createdAt={created_at}
                votes={votes}
              />
            );
          }
        )}
      </div>
    </section>
  );
};

export default ArticleList;

// title: "Designing Better JavaScript APIs",
// topic: "coding",
// author: "tickle122",
// body: "At some point or another, you will find yourself writing JavaScript code that exceeds the couple of lines from a jQuery plugin. Your code will do a whole lot of things; it will (ideally) be used by many people who will approach your code differently. They have different needs, knowledge and expectations.",
// created_at: 1594080780000,
// votes: 0,
