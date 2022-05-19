import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { post, comment } from "../../../types/Post";
import { PostContext } from "../../../context/post/postContext";
import { Spinner } from "../../layout/spinner/Spinner";
import { Comment } from "../comments/Comment";
import "./postDetails.scss";

type locationType = {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: post;
};

export const PostDetails = () => {
  let location: locationType = useLocation() as locationType;
  const postsContext = useContext(PostContext);
  const { getComments, getPost, comments, post, loading } = postsContext;
  const id = location.pathname.substring(7);
  useEffect(() => {
    getPost(id);
    getComments(id);
  }, []);
  console.log(loading);
  if (loading || post === undefined)
    return (
      <div className="comments">
        <Spinner />
      </div>
    );
  return (
    <div>
      <ul className="comments">
        <li className="comments-header">
          <h4>{post.title}</h4>
          <div>{post.body}</div>
        </li>
        Comments:
        {comments.map((comment: comment) => (
          <li key={comment.id}>
            <Comment
              id={comment.id}
              body={comment.body}
              postId={comment.postId}
              name={comment.name}
              email={comment.email}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
