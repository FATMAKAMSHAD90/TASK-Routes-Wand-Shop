import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import wands from "../WandaList";

function Details() {
  const wandaSlug = useParams().wandaSlug;

  const wandaData = wands.find((e) => e.slug === wandaSlug);
  return (
    <div>
      <p>{wandaData.core}</p>
      <p>{wandaData.length}</p>
      <p>{wandaData.wood}</p>
      <img className="card" src={wandaData.imageUrl} />
    </div>
  );
}

export default Details;
