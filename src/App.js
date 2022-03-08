import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Nav from "./components/nav";
import TopicHeader from "./components/header";
import ArticleList from "./components/articleList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        {
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/topic/:topic" element={<ArticleList />} />
          </Routes>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
