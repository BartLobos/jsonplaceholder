import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading || post === undefined) return <Spinner />;
  console.log(comments);
  return (
    <ul className="postDetails">
      <li className="postDetails--header">
        <h4>{post.title}</h4>
        <div>{post.body}</div>
      </li>
      <div className="postDetails--content-header">
        Comments:
        <Link
          to={`/posts/${id}/newcomment`}
          className="postDetails--content-header__button"
        >
          ADD COMMENT
        </Link>
      </div>
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
  );
};
