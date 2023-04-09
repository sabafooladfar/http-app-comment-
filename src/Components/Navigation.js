import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new-comment">New comment</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
