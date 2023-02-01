import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <p>
        <b>404</b> <br /> page not found
      </p>
      <Link to="/">back to home page</Link>
    </div>
  );
};

export default NotFound;
