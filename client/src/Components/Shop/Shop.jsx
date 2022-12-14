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
import { useSelector } from "react-redux";

const Shop = () => {
  const params = useParams();
  useCheckUser();

  const hasUser = useSelector((state) => state.userData.hasUser);
  const userId = useSelector((state) => state.userData.userId);

  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [wishlistToggle, setWishlistToggle] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartToggle, setCartToggle] = useState(true);

  useEffect(() => {
    fetch(`/api/product/${params.category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  }, [params.category]);

  useEffect(() => {
    if(hasUser || localStorage.getItem("loggedin") === true) {
      fetch(`/api/user/getuserwishlist/${userId}`).then((res) => res.json()).then((data) => {
        setWishlist(data.data);
      }).catch((err) => console.log(err));
    } else {
      setWishlist([]);
    }
    return;
  }, [hasUser, userId, wishlistToggle]);

  useEffect(() => {
    if(hasUser || localStorage.getItem("loggedin") === true) {
      fetch(`/api/user/getusercart/${userId}`).then((res) => res.json()).then((data) => {
        setCart(data.data);
      }).catch((err) => console.log(err));
    } else {
      setCart([]);
    }
    return;
  }, [hasUser, userId, cartToggle]);

  const [subCatDisplay, setSubCatDisplay] = useState(false);
  const [yoffset,setYoffset] = useState(0);
  const [subCatItems, setSubCatItems] = useState([]);

  const isWishlisted = (prodId) => {
    if(!wishlist || wishlist.length === 0) {
      return false;
    }
    const res = wishlist.filter((val) => val.ProductId === prodId);
    if(res.length > 0) {
      return true;
    }
    return false;
  }

  const isInCart = (prodId) => {
    if(!cart || cart.length === 0) {
      return false;
    }
    const res = cart.filter((val) => val.ProductId === prodId);
    if(res.length > 0) {
      return true;
    }
    return false;
  }

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
                  productId={val._id}
                  data={val}
                  wishlisted={isWishlisted(val._id)}
                  setWishlistToggle={setWishlistToggle}
                  wishlistToggle={wishlistToggle}
                  isInCart={isInCart(val._id)}
                  setCartToggle={setCartToggle}
                  cartToggle={cartToggle}
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

export default React.memo(Shop);
