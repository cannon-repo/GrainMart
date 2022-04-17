import React from "react";
import { MdAddShoppingCart, MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import {AiFillStar} from "react-icons/ai";
import useCheckUser from "../../Hooks/CheckUser";
import { useDispatch, useSelector } from "react-redux";
import {BsCartCheckFill} from "react-icons/bs";
import { toggle } from "../../Redux/CartSlice";

const ProductCard = (props) => {

  const dispatch = useDispatch();

  useCheckUser();

  const UserId = useSelector((state) => state.userData.userId);
  const hasUser = useSelector((state) => state.userData.hasUser);

  const serverHost = "http://192.168.42.169:5000/public/images/";

  const calcOfferPrice = () => {
    const mrp = props.data.Price;
    const off = props.data.Offer;
    const offerPrice = Math.ceil(mrp - ((mrp*off)/100));
    return offerPrice;
  }

  const addToWishlistHandler = () => {
    if(hasUser || localStorage.getItem("loggedin") === true) {
      fetch(props.wishlisted ? '/api/user/deletewishlist' : '/api/user/addwishlist', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({UserId,ProductId: props.productId, Category: props.data.Category, Name: props.data.Name, Price: props.data.Price, Offer: props.data.Offer, Image: props.data.Image, SellerId: props.data.SellerId}),
      }).then((res) => res.json()).then((data) => {
        props.setWishlistToggle(!props.wishlistToggle);
      }).catch((err) => console.log('Error from wishlistHandler' + err));
    }
    return;
  }
  
  const addToCartHandler = () => {
    if(hasUser || localStorage.getItem("loggedin") === true) {
      fetch(props.isInCart ? '/api/user/deletecartitems' : '/api/user/addcartitems', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({UserId,ProductId: props.productId, Category: props.data.Category, Name: props.data.Name, Price: props.data.Price, Offer: props.data.Offer, Image: props.data.Image, SellerId: props.data.SellerId}),
      }).then((res) => res.json()).then((data) => {
        props.setCartToggle(!props.cartToggle);
        dispatch(toggle());
      }).catch((err) => console.log('Error from cartHandler' + err));
    }
    return;
  }

  return (
    <div className="ProductCardWrap">
      <div className="ProductCard">
        <div className="ProductImage" style={{backgroundImage: `url(${serverHost}${props.data.Image})`}}></div>
        <div className="ProductInfoWrap">
          <p className="ProductName">{props.data.Name}</p>
          <div className="PriceAndRatingWrap">
          <p className="ProductPrice">₹{calcOfferPrice()}&nbsp;&nbsp;<span style={{color: '#999', textDecoration: 'line-through'}}>₹{props.data.Price}</span>&nbsp;&nbsp;<span style={{color: 'var(--green)'}}>{props.data.Offer}%&nbsp;off</span></p>
          <p className="ProductRating">5<AiFillStar/></p>
          </div>
        </div>
        <div className="ProductActions">
          <div className="AddToCart" onClick={addToCartHandler}>
            {
              props.isInCart ? <BsCartCheckFill style={{color: 'var(--green'}}/> : <MdAddShoppingCart />
            }
          </div>
          <div className="AddToWishList" onClick={addToWishlistHandler}>
            {
              props.wishlisted ? <MdFavorite style={{color: 'red'}}/> :
              <MdOutlineFavoriteBorder />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);