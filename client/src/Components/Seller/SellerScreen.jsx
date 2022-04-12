import React, { useState } from "react";
import useGetSellerInfo from "../../Hooks/GetSellerInfo";
import NoSellerProducts from "./NoSellerProducts";
import "./SellerScreen.css";
import "./SellerProducts.css";
import SellerProducts from "./SellerProducts";
import AddProduct from "./AddProduct";
import { useSelector } from "react-redux";
import useFetchSellerProducts from "../../Hooks/FetchSellerProducts";

const SellerScreen = () => {

  const products = useSelector((state) => state.productData.products);

  useGetSellerInfo();

  const [showAddProduct, setShowAddProduct] = useState(false);

  useFetchSellerProducts();

  return (
    <div className="SellerScreenWrap">
      {products.length === 0 ? (
        <NoSellerProducts trigger={setShowAddProduct} />
      ) : (
        <SellerProducts trigger={setShowAddProduct} />
      )}
      {showAddProduct && <AddProduct trigger={setShowAddProduct} />}
    </div>
  );
};

export default React.memo(SellerScreen);
