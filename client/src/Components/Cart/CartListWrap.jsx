import React, { useEffect, useState } from "react";
import CartList from "./CartList";
import { RiEBike2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { updateWishlist } from "../../Redux/WishlistSlice";

const CartListWrap = ({ cartItems }) => {

  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlistData.Wishlist);
  const [toggle, setToggle] = useState(true);
  const userId = useSelector((state) => state.userData.userId);

  useEffect(() => {
    fetch(`/api/user/getuserwishlist/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          dispatch(updateWishlist({ newWishlist: data.data }));
        } else {
          alert(data.msg);
        }
      }).catch((err) => console.log(err));
  }, [userId, dispatch, toggle]);

  const isWishListed = (prodId) => {
    const res = wishlist.filter((val) => val.ProductId === prodId);
    return res.length > 0;
  }

  return (
    <div className="CartListWrap">
      {cartItems.map((val, id) => {
        return <CartList key={id} product={val} wishlisted={isWishListed(val.ProductId)} flagSwitch={setToggle} flag={toggle} />;
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

export default React.memo(CartListWrap);