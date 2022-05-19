import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { post, comment } from "../../../types/Post";
import { PostContext } from "../../../context/post/postContext";
import { Spinner } from "../../layout/spinner/Spinner";
import "./userDetails.scss";
import { PostItem } from "../../posts/postItem/PostItem";

type locationType = {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: post;
};

export const UserDetails = () => {
  let location: locationType = useLocation() as locationType;
  const postsContext = useContext(PostContext);

  const { getUser, getUserPosts, posts, user, loading } = postsContext;

  const id = location.pathname.substring(7);

  useEffect(() => {
    getUser(id);
    getUserPosts(id);
  }, []);

  if (loading || user === undefined || posts === undefined) return <Spinner />;
  return (
    <div className="userDetails">
      <h4>{user.name}</h4>
      <div>{user.email}</div>
      <h2>Posts:</h2>
      <ul>
        {posts.map((post: post) => (
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
