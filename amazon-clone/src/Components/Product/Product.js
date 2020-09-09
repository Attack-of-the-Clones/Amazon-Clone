import "./Product.css";

import Rating from "@material-ui/lab/Rating";
import React from "react";
import { useStateValue } from "../../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>USD</small>
          <strong>{price}</strong>
        </p>
        <Rating name="star-rating" value={rating} precision={0.5} />
      </div>
      <img src={image} alt="" className="product__image" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
