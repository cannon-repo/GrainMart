import React, { useEffect, useRef } from 'react'

const CartValue = ({cartItems}) => {

  const cartPriceRef = useRef(Number(0));
  const cartDiscount = useRef(Number(0));

  const calcTotMRP = () => {
    cartPriceRef.current = 0;
    cartItems.map((val) => {
      cartPriceRef.current = (Number(cartPriceRef.current) + Number(val.Price*val.Quantity));
      return 0;
    });
    return cartPriceRef.current;
  }

  const calcTotDiscount = () => {
    cartDiscount.current = 0;
    cartItems.map((val) => {
      cartDiscount.current = (Number(cartDiscount.current) + val.Quantity*Number(Math.ceil((val.Price*val.Offer)/100)));
      return 0;
    });
    return cartDiscount.current;
  }

  const calcFinalPrice = () => {
    return (calcTotMRP() - calcTotDiscount());
  }


  useEffect(() => {
    calcTotMRP();
    calcTotDiscount();
    calcFinalPrice();
    // eslint-disable-next-line
  }, [cartItems]);

  return (
    <div className='CartValue'>
        <div className='CartValueRows Bold BorderD'>PRICE DETAILS</div>
        <div className='CartValueRows'>
          <p>Price ({cartItems.length} items)</p>
          <p className='Bold'>₹{calcTotMRP()}</p>
        </div>
        <div className='CartValueRows'>
          <p>Discount</p>
          <p className='TextGreen Bold'>- ₹{calcTotDiscount()}</p>
        </div>
        <div className='CartValueRows'>
          <p>Delivery Charges</p>
          <p className='TextGreen Bold'>FREE</p>
        </div>
        <div className='CartValueRows Bold BorderD BorderU'>
          <p>Total Amount</p>
          {/* <p>₹{cartPriceRef.current - cartDiscount.current}</p> */}
          <p>₹{calcFinalPrice()}</p>
        </div>
        <div className='CartValueRows Bold TextGreen'>You will save ₹{cartDiscount.current} on this order</div>
    </div>
  )
}

export default React.memo(CartValue);