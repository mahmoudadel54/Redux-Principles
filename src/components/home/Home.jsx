import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <div>
      <div className="container text-center mt-5">
        <h1>Welcome to our shops</h1>
        <div className="shops-btn-in-home">
          <Link className="btn btn-success" to="/cakeshop">
            {" "}
            Click here to open cake shop{" "}
          </Link>
          <Link className="btn btn-primary" to="/icecreamshop">
            {" "}
            Click here to open ice cream shop{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
