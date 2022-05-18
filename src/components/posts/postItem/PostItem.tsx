import { post } from "../../../types/Post";
import "./post.scss";
export const PostItem = ({ userId, id, title, body }: post) => {
  console.log(id);

  return <div className="post">{body}</div>;
};
