import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import ArticleList from "./components/articleList";
import ArticleFullBody from "./components/articleFullBody";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        {
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/topic/:topic" element={<ArticleList />} />
            <Route path="/articles/:articleId" element={<ArticleFullBody />} />
          </Routes>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
