import React from "react";
import data from "../WandaList";
import Wanda from "./Wanda";

function ProductList() {
  let arrayData = data.map((wanda) => <Wanda wandaData={wanda} />);
  return <div class="wanda">{arrayData}</div>;
}

export default ProductList;
