import React from "react";

function MainDisplay() {
  return (
    <div className="mainContainer">
    
      <div className="textBox">
        <h1 className="txtTitle">Some Title</h1>

        <p className="lorem">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat est
          voluptate totam.
        </p>
      </div>
      <img src="https://images.unsplash.com/photo-1718563552859-37ec6e6e918a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D" alt="" className="profilePic" />

    </div>
  );
}

export default MainDisplay;
