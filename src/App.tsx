import { Header } from "./components/layout/header/Header";
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Posts } from "./components/posts/posts/Posts";
import { About } from "./components/about/About";
import { PostState } from "./context/post/PostState";
import "./App.css";
import { PostDetails } from "./components/posts/postDetails/PostDetails";
import { NotFound } from "./components/notFound/NotFound";

const App = () => {
  return (
    <>
      <PostState>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts/:id" element={<PostDetails />} />
          </Routes>
        </BrowserRouter>
      </PostState>
    </>
  );
};

export default App;
