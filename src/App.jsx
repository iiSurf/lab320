import { useState } from "react";
import "./App.css";
import Navbar from "../components/NavBar";
import MainDisplay from "../components/MainDisplay";
import Product from "../components/Products";
// ----------------[Requires/Imports]
//Test test
function App() {

  let products = {
    shirts: ["Black Tee", "white Tee"],
    pants: []
  }

  return (
    <>
      <Navbar />
      <MainDisplay />
      <div className="producter">
        <Product item={products.shirts[0]}/>
        <Product item={products.shirts[1]}/>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

        <Product />
      </div>
    </>
  );
}

export default App;
