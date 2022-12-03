import { useNavigate } from "react-router-dom";
import "./NoMatch.css";

const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <div className="no-match">
      <h1>404</h1>
      <h3>OPPS! PAGE NOT FOUND</h3>
      <span>
        Sorry, the page you're looking for doesn't exist. If you think something
        is broken, report a problem
      </span>
      <div className="button">
        <button className="shadow" onClick={() => navigate("/")}>
          RETURN HOME
        </button>
        <button className="shadow">REPORT PROBLEM</button>
      </div>
    </div>
  );
};

export default NoMatch;
