import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { post, locationType } from "../../../types/Post";
import { PostContext } from "../../../context/post/postContext";
import { Spinner } from "../../layout/spinner/Spinner";
import "./userDetails.scss";
import { PostItem } from "../../posts/postItem/PostItem";

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
    <div className="user-details">
      <div className="user-details--header">
        <div>
          <h4>{user.name}</h4>
          <div>{user.email}</div>
        </div>

        <Link
          to={`/users/${id}/newpost`}
          className="user-details--header__button"
        >
          ADD POST
        </Link>
      </div>
      <br />
      <h2>Posts:</h2>
      <ul className="user-details--list">
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
