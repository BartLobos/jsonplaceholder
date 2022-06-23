import { Header } from "./components/layout/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Posts } from "./components/posts/posts/Posts";
import { About } from "./components/about/About";
import { PostState } from "./context/post/PostState";
import "./App.css";
import { PostDetails } from "./components/posts/postDetails/PostDetails";
import { NotFound } from "./components/notFound/NotFound";
import { Users } from "./components/users/users/Users";
import { UserDetails } from "./components/users/userDetails/UserDetails";
import { NewPost } from "./components/users/userDetails/newPost/NewPost";
import { NewComment } from "./components/posts/postDetails/newComment/NewComment";

const App = () => {
  return (
    <PostState>
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Posts />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/users/:id/newpost" element={<NewPost />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/posts/:id/newcomment" element={<NewComment />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </PostState>
  );
};

export default App;
