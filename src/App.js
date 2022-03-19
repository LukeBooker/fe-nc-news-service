import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import ArticleList from "./components/articleList";
import ArticleFullBody from "./components/articleFullBody";
import { UserContext } from "./contexts/userLogIn";
import AllUsers from "./components/allUsers";
import { useState } from "react";
import ErrorPage from "./components/errorPage";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="App">
        <Nav />
        {
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/users" element={<AllUsers />} />
            <Route path="/topic/:topic" element={<ArticleList />} />
            <Route path="/articles/:articleId" element={<ArticleFullBody />} />
          </Routes>
        }
      </div>
    </UserContext.Provider>
  );
}

export default App;
