import React, { useEffect, useState } from "react";
import FilterResults from "./FilterResults";
import ProductCard from "./ProductCard";
import "./Shop.css";
import ShrinkedCategory from "./ShrinkedCategory";
import Footer from "../Footer/Footer";
import useCheckUser from "../../Hooks/CheckUser";
import { useParams } from "react-router-dom";
import NoProduct from "../../Assets/Images/no-product.png";
import SubCategory from "./SubCategory";

const Shop = () => {
  const params = useParams();
  useCheckUser();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`/api/product/${params.category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  }, [params.category]);

  const [subCatDisplay, setSubCatDisplay] = useState(false);
  const [yoffset,setYoffset] = useState(0);
  const [subCatItems, setSubCatItems] = useState([]);

  return (
    <div className="ShopWrap">
      <ShrinkedCategory trigger={setSubCatDisplay} setyoffset={setYoffset} setSubCatItems={setSubCatItems}/>
      <SubCategory trigger={setSubCatDisplay} display={subCatDisplay} yoffset={yoffset} setyoffset={setYoffset} subCatItems={subCatItems}/>
      {products.length > 0 ? (
        <>
          <FilterResults />
          <div className="Shop">
            {products.map((val, index) => {
              return (
                <ProductCard
                  key={index}
                  url={val.Image}
                  name={val.Name}
                  mrp={val.Price}
                  offer={val.Offer}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="ShopEmpty">
          <img alt="no product" src={NoProduct} />
          <p>Ooops, No Product Found</p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Shop;
