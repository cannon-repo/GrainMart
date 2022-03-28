import React, { useEffect, useRef } from 'react'

const CartValue = ({cartItems}) => {

  const cartPriceRef = useRef(Number(0));
  const cartDiscount = useRef(Number(0));

  useEffect(() => {
    cartPriceRef.current = Number(0);
    cartItems.map((val) =>
      cartPriceRef.current = (Number(cartPriceRef.current) + Number(val.price)));
  }, [cartItems]);

  useEffect(() => {
    cartDiscount.current = (cartPriceRef.current*10)/100;
  }, [cartPriceRef]);

  return (
    <div className='CartValue'>
        <div className='CartValueRows Bold BorderD'>PRICE DETAILS</div>
        <div className='CartValueRows'>
          <p>Price ({cartItems.length} items)</p>
          <p className='Bold'>₹{cartPriceRef.current}</p>
        </div>
        <div className='CartValueRows'>
          <p>Discount</p>
          <p className='TextGreen Bold'>- ₹{cartDiscount.current}</p>
        </div>
        <div className='CartValueRows'>
          <p>Delivery Charges</p>
          <p className='TextGreen Bold'>FREE</p>
        </div>
        <div className='CartValueRows Bold BorderD BorderU'>
          <p>Total Amount</p>
          <p>₹{cartPriceRef.current - cartDiscount.current}</p>
        </div>
        <div className='CartValueRows Bold TextGreen'>You will save ₹{cartDiscount.current} on this order</div>
    </div>
  )
}

export default CartValue