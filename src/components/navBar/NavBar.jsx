import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ justifyContent: "space-around" }}
    >
      <h3>
        <NavLink to="/"> HomePage</NavLink>
      </h3>
      <Link className="btn btn-success" to="/cakeshop">
        Cake Shop
      </Link>
      <Link className="btn btn-primary" to="/icecreamshop">
        Ice Cream Shop
      </Link>
    </div>
  );
}

export default NavBar;
