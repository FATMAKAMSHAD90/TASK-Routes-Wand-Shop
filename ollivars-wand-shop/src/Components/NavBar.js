import React from "react";
import { Link } from "react-router-dom";
import Details from "./Details";

function NavBar() {
  return (
    <nav class="nav navbar-dark bg-dark">
      <div>
        <Link to="/">Home</Link>
      </div>

      <div>
        <Link to="ProductList">ProductList</Link>
      </div>
    </nav>
  );
}

export default NavBar;
