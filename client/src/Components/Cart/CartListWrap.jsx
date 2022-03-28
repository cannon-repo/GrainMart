import React from "react";
import CartList from "./CartList";
import { RiEBike2Line } from "react-icons/ri";

const CartListWrap = ({ cartItems }) => {
  return (
    <div className="CartListWrap">
      {cartItems.map((val, id) => {
        return <CartList data={val} />;
      })}
      <div className="PlaceOrder">
        <div className="DeliveryNote">
          <p>Get your order delivered within 24 hours</p>
          <div className="DeliveryAnimation">
            <div className="DeliveryBike">
              <RiEBike2Line />
            </div>
            <hr />
          </div>
        </div>
        <button className="PlaceOrderBtn">Place Order</button>
      </div>
    </div>
  );
};

export default CartListWrap;
