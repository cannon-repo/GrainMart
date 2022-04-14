import React from "react";
import { MdAddShoppingCart, MdOutlineFavoriteBorder } from "react-icons/md";
import {AiFillStar} from "react-icons/ai";

const ProductCard = (props) => {

  const serverHost = "http://192.168.18.8:5000/public/images/";

  const calcOfferPrice = () => {
    const mrp = props.mrp;
    const off = props.offer;
    const offerPrice = Math.ceil(mrp - ((mrp*off)/100));
    return offerPrice;
  }

  return (
    <div className="ProductCardWrap">
      <div className="ProductCard">
        <img
          alt=""
          className="ProductImage"
          src={serverHost + props.url}
        />
        <div className="ProductInfoWrap">
          <p className="ProductName">{props.name}</p>
          <div className="PriceAndRatingWrap">
          <p className="ProductPrice">₹{calcOfferPrice()}&nbsp;&nbsp;<span style={{color: '#999', textDecoration: 'line-through'}}>₹{props.mrp}</span>&nbsp;&nbsp;<span style={{color: 'var(--green)'}}>{props.offer}%&nbsp;off</span></p>
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