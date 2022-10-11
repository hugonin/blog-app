import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import NewArticle  from "./pages/NewArticle"
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/new-article" element={<PrivateRoute />}>
              <Route path="/new-article" element={<NewArticle />} />
            </Route>
          <Route path="/articles" element={<PrivateRoute />}>
            <Route path="/articles" element={<ArticleList />} />
          </Route>
          <Route path="/article/:articleId" element={<PrivateRoute />}>
            <Route path="/article/:articleId" element={<Article />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
     
    </>
  );
}

export default App;
