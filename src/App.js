import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Header from "./components/header";
// import TopicSearch from "./components/topic-search";
import ArticleList from "./components/articleList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        {
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <ArticleList />
                </>
              }
            />
          </Routes>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
