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

const App = () => {
  return (
    <>
      <PostState>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/about" element={<About />} />
            <Route path="/:id" element={<PostDetails />} />
          </Routes>
        </BrowserRouter>
      </PostState>
    </>
  );
};

export default App;
