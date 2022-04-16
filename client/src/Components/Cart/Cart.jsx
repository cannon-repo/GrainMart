import React from 'react';
import "./Cart.css";
import {FaShoppingCart} from "react-icons/fa";
import useFetchCartSize from '../../Hooks/FetchCartSize';
import { useSelector } from 'react-redux';

const Cart = () => {

  useFetchCartSize();

  const cartSize = useSelector((state) => state.cartData.CartSize);

  return (
    <div className='CartWrap'>
        <div className='Cart'><FaShoppingCart/></div>
        <div className='CartBadge'>{cartSize}</div>
    </div>
  );
};

export default Cart;