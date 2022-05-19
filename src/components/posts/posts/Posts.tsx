import { PostItem } from "../postItem/PostItem";
import { useContext, useEffect } from "react";
import { PostContext } from "../../../context/post/postContext";
import { Spinner } from "../../layout/spinner/Spinner";
import "./posts.scss";

export const Posts = () => {
  const postsContext = useContext(PostContext);

  const { getPosts, posts, loading } = postsContext;
  useEffect(() => {
    getPosts();
  }, []);

  if (loading)
    return (
      <div className="posts">
        <Spinner />
      </div>
    );

  return (
    <div>
      <ul className="posts">
        <li className="posts-header">
          <div className="center"> All Posts: </div>
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
