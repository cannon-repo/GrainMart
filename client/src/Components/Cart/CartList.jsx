import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { toggle } from "../../Redux/CartSlice";

const CartList = ({product, wishlisted, flag, flagSwitch}) => {

  const dispatch = useDispatch();

  const [itemQty, setItemQty] = useState(product.Quantity);
  const [decBtnState, setDecBtnState] = useState('transparent');

  const hasUser = useSelector((state) => state.userData.hasUser);
  const UserId = useSelector((state) => state.userData.userId);

  const updateProductQuantity = (qty) => {
    fetch('/api/user/updatecartproductqty', {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({UserId, ProductId: product.ProductId, Quantity: qty})
    }).then((res) => res.json()).then((data) => {
        dispatch(toggle());
    }).catch((err) => console.log(err));
  }
  
  const decHandler = () => {
    if(itemQty > 1) {
      updateProductQuantity(itemQty-1);
      setItemQty(itemQty-1);
    }
    return;
  }
  
  const incHandler = () => {
    updateProductQuantity(itemQty+1);
    setItemQty(itemQty+1);
  }

  useEffect(() => {
    if(itemQty === 1) {
      setDecBtnState('gainsboro');
    } else {
      setDecBtnState('transparent');
    }
  }, [itemQty]);

  const serverHost = "http://192.168.42.187:5000/public/images/";

  const calcOfferPrice = () => {
    const mrp = product.Price;
    const off = product.Offer;
    const offerPrice = Math.ceil(mrp - ((mrp*off)/100));
    return offerPrice;
  }

  const removeProductHandler = () => {
    fetch('/api/user/deletecartitems', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({UserId,ProductId: product.ProductId})
    }).then((res) => res.json()).then((data) => {
        dispatch(toggle());
    }).catch((err) => console.log(err));
  }

  const addToWishlistHandler = () => {
    if(hasUser || localStorage.getItem("loggedin") === true) {
      fetch('/api/user/addwishlist', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({UserId,ProductId: product.ProductId, Category: product.Category, Name: product.Name, Price: product.Price, Offer: product.Offer, Image: product.Image, SellerId: product.SellerId}),
      }).then((res) => res.json()).then((data) => {
        flagSwitch(!flag);
      }).catch((err) => console.log('Error from wishlistHandler' + err));
    }
    return;
  }

  return (
    <div className="CartList">
      <div className="ItemInfoLeft">
        <img className="ItemImg" alt="item" src={`${serverHost}${product.Image}`} />
        <div className="qtyCtr">
          <div className="dec" style={{backgroundColor: decBtnState}} onClick={decHandler}>-</div>
          <div className="qtyVal">{itemQty}</div>
          <div className="inc" onClick={incHandler}>+</div>
        </div>
      </div>
      <div className="ItemInfoRight">
        <div>
          <p className="ItemName">{product.Name}</p>
          <p className="ItemSeller">Seller: {product?.SellerId ? product.SellerId : "xyz"}</p>
        </div>
        <p className="ItemPrice"><span style={{fontWeight: 'bolder'}}>₹{calcOfferPrice()}</span><span style={{marginLeft: '10px', textDecoration: 'line-through', color: '#999'}}>₹{product.Price}</span><span style={{marginLeft: '10px', color: 'var(--green)', fontWeight: 'bolder'}}>{product.Offer}% Off</span></p>
        <div className="ItemActionBtn">
          <button onClick={addToWishlistHandler} style={{marginRight: '10px'}} disabled={wishlisted}>Add to Wishlist</button>
          <button onClick={removeProductHandler}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartList);
