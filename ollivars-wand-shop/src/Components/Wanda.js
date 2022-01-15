import React from "react";
import { Link } from "react-router-dom";
import wands from "../WandaList";
import Details from "./Details";

function Wanda({ wandaData }) {
  return (
    <div className="container">
      <p>{wandaData.core}</p>

      <Link to={`/ProductList/${wandaData.slug}`}>
        <img className="card" src={wandaData.imageUrl} />{" "}
      </Link>
    </div>
  );
}

export default Wanda;
