import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SellImg from "../../Assets/Images/Banners/SellWithUs.png";
import useCheckUser from "../../Hooks/CheckUser";
import useGetSellerInfo from "../../Hooks/GetSellerInfo";
import { setSellerInfo } from "../../Redux/UserDataSlice";

const disabled = {
  backgroundColor: "gainsboro",
  cursor: "auto",
};
const active = {
  backgroundColor: "transparent",
  cursor: "pointer",
};

const SellerRegister = () => {
  
  useCheckUser();
  useGetSellerInfo();

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const userId = useSelector((state) => state.userData.userId);

  const [brandValue, setBrandValue] = useState("");
  const [idValue, setIdValue] = useState("");
  const [btnStyle, setBtnStyle] = useState(disabled);

  useEffect(() => {
    if (brandValue.length >= 3 && idValue.length >= 5) {
      setBtnStyle(active);
    } else {
      setBtnStyle(disabled);
    }
  }, [brandValue, idValue, btnStyle]);

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("/api/seller/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ SellerName: brandValue, SellerId: idValue, UserId: userId }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log('Data from sellerRegister',data);
        if (data.success) {
          dispatch(setSellerInfo({sellerId: idValue, sellerName: brandValue}));
          navigate("/sellerpanel");
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="SellerRegWrap">
      <div className="SellerRegister">
        <div className="SellerRegBanner">
          <img alt="banner" src={SellImg} />
        </div>
        <div className="SellerRegForm">
          <p className="SellerRegFormHead">Register</p>
          <div className="SellerRegInputWrap">
            <p>Brand</p>
            <input
              val={brandValue}
              onChange={(e) => setBrandValue(e.target.value)}
              type="text"
              placeholder="Enter your brand name"
              minLength={3}
            />
          </div>
          <div className="SellerRegInputWrap">
            <p>SellerId</p>
            <input
              val={idValue}
              onChange={(e) => setIdValue(e.target.value)}
              type="text"
              placeholder="Enter your seller id"
              minLength={5}
            />
          </div>
          <button
            onClick={submitHandler}
            style={btnStyle}
            className="SellerRegFormBtn"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerRegister;
