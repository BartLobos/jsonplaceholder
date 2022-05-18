import { PostItem } from "../postItem/PostItem";
import "./posts.scss";
import { useContext, useEffect } from "react";
import { PostContext } from "../../../context/post/postContext";

export const Posts = () => {
  const postsContext = useContext(PostContext);

  const { getPosts, posts } = postsContext;
  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts);
  return (
    <div>
      <ul className="posts">
        <li className="posts-header">
          <div className="center"> All Posts:</div>
        </li>
        {posts.map((post: any) => (
          <li key={post.id}>
            <PostItem
              id={post.id}
              userId={post.userId}
              body={post.body}
              title={post.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
