import { Link } from "react-router-dom";
import { user } from "../../../types/Post";
import "./userItem.scss";
export const UserItem = ({ id, name, username, email }: user) => {
  return (
    <Link to={`/users/${id}`} className="userItem-link">
      <div className="userItem">
        <h4>{name}</h4>
        <div>{username}</div>
        {email}
      </div>
    </Link>
  );
};
