import { Link } from "react-router-dom";
import NotFoundImg from "../images/not-found.webp";
const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404 - Page Not Found</h1>
      <div className="img">
        <img src={NotFoundImg} alt="img" className="" />
        <p className="">uh-oh! Nothing Here...</p>
      </div>
      <button className="btn">
        <Link to="/">Return to Home Page</Link>
      </button>
    </div>
  );
};

export default NotFound;
