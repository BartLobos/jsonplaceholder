import { Link } from "react-router-dom";
import "./header.scss";
export const Header = () => {
  return (
    <nav className="header">
      <h1 className="header-logo">
        <i className={"fas fa-solid fa-camera-retro fa-1x"} />
        {"Album"}
      </h1>
      <ul className="header-routes">
        <li className="header-routes__element">
          <Link to="/" className="header-routes__link">
            Posts
          </Link>
        </li>
        <li className="header-routes__element">
          <Link to="/about" className="header-routes__link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
