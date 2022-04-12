import React from "react";
import { useSelector } from "react-redux";
import { IoAddCircleSharp } from "react-icons/io5";
import useFetchSellerProducts from "../../Hooks/FetchSellerProducts";
import SellerEachProduct from "./SellerEachProduct";

const SellerProducts = ({ trigger }) => {
  const sellerName = useSelector((state) => state.userData.sellerName);
  const products = useSelector((state) => state.productData.products);

  useFetchSellerProducts();

  return (
    <div className="SellerProductsWrap">
      <nav className="SellerProdHead">
        <p className="SellerNameProd">
          Heyy{" "}
          <b style={{ fontFamily: "Montserrat", color: "#000" }}>
            {sellerName}
          </b>
        </p>
        <button onClick={() => trigger(true)} className="AddProdBtn">
          <IoAddCircleSharp />
        </button>
      </nav>
      <p className="MyProductsTxt">My Products ({products.length})</p>
      <div className="SellerProducts">
        {products.map((val, index) => (
          <SellerEachProduct key={index} product={val} />
        ))}
      </div>
    </div>
  );
};

export default SellerProducts;
