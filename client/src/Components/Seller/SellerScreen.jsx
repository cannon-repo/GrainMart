import React, { useState } from "react";
import useGetSellerInfo from "../../Hooks/GetSellerInfo";
import NoSellerProducts from "./NoSellerProducts";
import "./SellerScreen.css";
import "./SellerProducts.css";
import SellerProducts from "./SellerProducts";
import AddProduct from "./AddProduct";

const products = ['rice', 'floor', 'juice', 'apple', 'carrot'];

const SellerScreen = () => {
  useGetSellerInfo();

  const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <div className="SellerScreenWrap">
      {
        products.length === 0 ? <NoSellerProducts trigger={setShowAddProduct}/> : <SellerProducts trigger={setShowAddProduct} products={products}/>
      }
      {
        showAddProduct && <AddProduct trigger={setShowAddProduct}/>
      }
    </div>
  );
};

export default React.memo(SellerScreen);
