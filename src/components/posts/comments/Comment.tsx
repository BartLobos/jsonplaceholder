import { comment } from "../../../types/Post";
import "./comment.scss";

export const Comment = ({ postId, id, name, email, body }: comment) => {
  return (
    <div className="post">
      <h5>{email}</h5>
      <h4>{name}</h4>
      <div>{body}</div>
    </div>
  );
};
