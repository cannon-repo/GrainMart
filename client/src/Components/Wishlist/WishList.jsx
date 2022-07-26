import React, { useEffect, useState } from "react";
import "./WishList.css";
import { useDispatch, useSelector } from "react-redux";
import { updateWishlist } from "../../Redux/WishlistSlice";
import { MdOutlineDelete } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

const WishList = () => {
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlistData.Wishlist);
  const userId = useSelector((state) => state.userData.userId);
  const itemsCnt = useSelector((state) => state.wishlistData.ItemsCnt);

  const [toggle, setToggle] = useState(true);

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

  const serverHost = "http://192.168.18.3:5000/public/images/";

  const calcOfferPrice = (mrp, off) => {
    const offerPrice = Math.ceil(mrp - ((mrp*off)/100));
    return offerPrice;
  }

  const removeItem = (prodId) => {
    fetch('/api/user/deletewishlist', {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({UserId: userId, ProductId: prodId}),
    }).then((res) => res.json()).then((data) => {
      if(data) {
        setToggle(!toggle);
      } else {
        alert(data.msg);
      }
    }).catch((err) => console.log(err));
  }

  return (
    <main className="WishListWrap">
      <section className="WishListHead">
        <p>My Wishlist</p>
        &nbsp;
        <p>{`(${itemsCnt})`}</p>
      </section>
      <section className="WishListData">
        {wishlist.map((val) => {
          return (
            <div className="WishListItemWrap" key={val._id}>
              <div
                className="WishListItemImg"
                style={{ backgroundImage: `url(${serverHost}${val.Image})` }}
              ></div>
              <div className="WishListItemData">
                <div className="WLItemName">
                  <p>{val.Name}</p>
                </div>
                <div className="WLItemRating">
                  <p className="ProductRating">
                    5<AiFillStar />
                  </p>
                </div>
                <div className="WLItemPrice">
                <p className="ProductPrice">₹{calcOfferPrice(val.Price, val.Offer)}&nbsp;&nbsp;<span style={{color: '#999', textDecoration: 'line-through'}}>₹{val.Price}</span>&nbsp;&nbsp;<span style={{color: 'var(--green)'}}>{val.Offer}%&nbsp;off</span></p>
                </div>
              </div>
              <div className="WishListItemDelete">
                <button className="WLDelIcon" onClick={() => removeItem(val.ProductId)}>
                  <MdOutlineDelete />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default React.memo(WishList);
