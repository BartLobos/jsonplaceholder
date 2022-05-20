import { Link } from "react-router-dom";
import { post } from "../../../types/Post";
import "./postItem.scss";
export const PostItem = ({ userId, id, title, body }: post) => {
  return (
    <div className="post">
      <Link to={`/posts/${id}`} className="post-link">
        <h4>{title}</h4>
        <div>{body}</div>
      </Link>
    </div>
  );
};
