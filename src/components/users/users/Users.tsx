import { useContext, useEffect } from "react";
import { PostContext } from "../../../context/post/postContext";
import { Spinner } from "../../layout/spinner/Spinner";
import "./users.scss";
import { user } from "../../../types/Post";
import { UserItem } from "../userItem/UserItem";

export const Users = () => {
  const postsContext = useContext(PostContext);

  const { getUsers, users, loading } = postsContext;

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading || users === undefined)
    return (
      <div className="posts">
        <Spinner />
      </div>
    );
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
  };

  return (
    <div className="users" style={userStyle}>
      {users.map((user: user) => (
        <div key={user.id}>
          <UserItem
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            address={user.address}
            phone={user.phone}
            website={user.website}
            company={user.company}
          />
        </div>
      ))}
    </div>
  );
};
