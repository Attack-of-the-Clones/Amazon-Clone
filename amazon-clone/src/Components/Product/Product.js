import "./Product.css";

import Rating from "@material-ui/lab/Rating";
import React from "react";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>USD</small>
          <strong>{price}</strong>
        </p>
        <Rating
          className="product__rating"
          name="star-rating"
          value={rating}
          precision={0.5}
        />
      </div>
      <div className="product_image">
        <img src={image} alt="" />
      </div>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
