import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import ArticleList from "./components/articleList";
import ArticleFull from "./components/articleFull";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        {
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/topic/:topic" element={<ArticleList />} />
            <Route path="/articles/:articleId" element={<ArticleFull />} />
          </Routes>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
