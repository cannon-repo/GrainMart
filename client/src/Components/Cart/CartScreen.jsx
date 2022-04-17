import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCheckUser from "../../Hooks/CheckUser";
import CartListWrap from "./CartListWrap";
import "./CartScreen.css";
import CartValue from "./CartValue";

const CartScreen = () => {
  useCheckUser();

  const hasUser = useSelector((state) => state.userData.hasUser);
  const userId = useSelector((state) => state.userData.userId);
  const CartToggle = useSelector((state) => state.cartData.CartToggle);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (hasUser || localStorage.getItem("loggedin")) {
      fetch(`/api/user/getusercart/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setCart(data.data);
          // console.log('Cart',data.data);
        })
        .catch((err) => console.log(err));
    } else {
      setCart([]);
    }
  }, [hasUser, userId, CartToggle]);

  return (
    <div className="CartScreenWrap">
      <p
        style={{
          fontSize: "calc(15px + 0.5vw)",
          fontWeight: "bold",
          textAlign: "start",
          width: "100%",
          margin: "20px 0px",
        }}
      >
        My Items({cart.length})
      </p>
      <div className="CartScreen">
        {cart.length > 0 ? (
          <>
            <CartListWrap cartItems={cart} />
            <CartValue cartItems={cart} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default React.memo(CartScreen);
