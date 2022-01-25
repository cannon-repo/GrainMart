import React from 'react';
import "./Cart.css";
import {FaShoppingCart} from "react-icons/fa";

const Cart = () => {
  return (
    <div className='CartWrap'>
        <div className='Cart'><FaShoppingCart/></div>
        <div className='CartBadge'>0</div>
    </div>
  );
};

export default Cart;