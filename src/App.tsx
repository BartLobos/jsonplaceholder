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

const App = () => {
  return (
    <>
      <PostState>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </PostState>
    </>
  );
};

export default App;
