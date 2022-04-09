import React from "react";
import { useSelector } from "react-redux";
import useGetSellerInfo from "../../Hooks/GetSellerInfo";
import "./SellerScreen.css";

const SellerScreen = () => {
  useGetSellerInfo();

  const sellerName = useSelector((state) => state.userData.sellerName);
  
  return (
    <div className="SellerDetailsWrap">
      <div className="SellerDetails">
        <p>Hello {sellerName}</p>
        <p>Welcome to grainmart seller space</p>
      </div>
    </div>
  );
};

export default SellerScreen;
