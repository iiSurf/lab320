import React from "react";
import NavTab from "./NavTab";
function Navbar() {
  let categories = ["Home", "About", "Products"];

  return (
    <div className="grandparent">
      <img
        className="logo"
        src="https://cdn.pixabay.com/animation/2022/10/13/01/37/01-37-51-884_512.gif"
      />
      <div className="navBtns">
        <NavTab title={categories[0]} />
        <NavTab title={categories[1]} />
        <NavTab title={categories[2]} />
      </div>
    </div>
  );
}

export default Navbar;
