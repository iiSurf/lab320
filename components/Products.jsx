import React from "react";

function Product({item}) {
  return (
    <div className="productContainer">
      <div className="product">
        <img
          src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0fGVufDB8fDB8fHww"
          alt=""
          className="p_img"
        />
        <p className="p_desc">{item}</p>

        <p className="p_price">$9.99</p>

        <div className="starBox">
          <img
            src="https://www.freeiconspng.com/thumbs/star-icon/black-star-icon-6.png"
            alt=""
            className="star"
          />
          <img
            src="https://www.freeiconspng.com/thumbs/star-icon/black-star-icon-6.png"
            alt=""
            className="star"
          />
          <img
            src="https://www.freeiconspng.com/thumbs/star-icon/black-star-icon-6.png"
            alt=""
            className="star"
          />
          <img
            src="https://www.freeiconspng.com/thumbs/star-icon/black-star-icon-6.png"
            alt=""
            className="star"
          />
        </div>
        
      </div>
    </div>
  );
}

export default Product;
