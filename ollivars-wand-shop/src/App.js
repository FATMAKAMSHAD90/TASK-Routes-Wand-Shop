import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import ProductList from "./Components/ProductList";
import SearchBar from "./Components/SearchBar";
import Details from "./Components/Details";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Wanda from "./Components/Wanda";
import wands from "./WandaList";

function App() {
  return (
    <div className="container" class="bg-dark text-light text-center">
      <SearchBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/ProductList/:wandaSlug" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
