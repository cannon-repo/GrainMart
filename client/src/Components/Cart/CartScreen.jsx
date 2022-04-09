import React from "react";
import CartListWrap from "./CartListWrap";
import "./CartScreen.css";
import CartValue from "./CartValue";

const cartItems = [
    {name: 'Carrot', price: '30', img: 'https://thumbs.dreamstime.com/b/orange-carrot-green-tops-vegetable-flat-style-172733644.jpg', qty: '1'},
    {name: 'Mango', price: '200', img: 'https://florigen.co.ke/wp-content/uploads/fruit-mango-apple-02.jpg', qty: '1'},
    {name: 'Chips', price: '80', img: 'https://www.bigbasket.com/media/uploads/p/l/40202281-2_6-lays-potato-chips-american-style-cream-onion-flavour-best-quality-crunchy.jpg', qty: '1'},
    {name: 'Milk', price: '50', img: 'https://static.turbosquid.com/Preview/2019/02/26__22_40_08/Milky01.pngB09131D4-5B27-453C-9721-88B31F06E6D3Zoom.jpg', qty: '1'}
]

const CartScreen = ({data}) => {
  console.log('From cart', data);
  return (
    <div className="CartScreenWrap">
        <p style={{fontSize: 'calc(15px + 0.5vw)', fontWeight: 'bold', textAlign: 'start', width: '100%', margin: '20px 0px'}}>My Items({cartItems.length})</p>
      <div className="CartScreen">
        <CartListWrap cartItems={cartItems}/>
        <CartValue cartItems={cartItems} />
      </div>
    </div>
  );
};

export default CartScreen;
