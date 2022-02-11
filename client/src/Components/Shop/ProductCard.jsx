import React from "react";
import { MdAddShoppingCart, MdOutlineFavoriteBorder } from "react-icons/md";
import {AiFillStar} from "react-icons/ai";

const ProductCard = (props) => {
  return (
    <div className="ProductCardWrap">
      <div className="ProductCard">
        <img
          alt=""
          className="ProductImage"
          src={`${props.url}`}
        />
        <div className="ProductInfoWrap">
          <p className="ProductName">{props.name}</p>
          <div className="PriceAndRatingWrap">
          <p className="ProductPrice">₹ {props.rating}/10</p>
          <p className="ProductRating">5<AiFillStar/></p>
          </div>
        </div>
        <div className="ProductActions">
          <div className="AddToCard">
            <MdAddShoppingCart />
          </div>
          <div className="AddToWishList">
            <MdOutlineFavoriteBorder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;