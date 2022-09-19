import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProductDetails, toggle } from "../../Redux/EachProductSlice";
import "./ItemSlider.css";

const ItemSlider = () => {

  const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`/api/product/Fruits`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const serverHost = "http://192.168.42.187:5000/public/images/";

  const calcOfferPrice = (mrp, off) => {
    const offerPrice = Math.ceil(mrp - ((mrp*off)/100));
    return offerPrice;
  }

  const openProduct = (Name, Price, Offer, Category, Image, Seller) => {
    dispatch(setProductDetails({Name, Price, Offer, Category, Image, Seller}));
    dispatch(toggle());
  }

  return (
    <div className="ItemSlider">
      {products.map((data, index) => {
        return (
          <div key={index} className="EachItem" onClick={() => openProduct(data.Name, data.Price, data.Offer, data.Category, data.Image, data.SellerId)}>
            {/* <img alt={`${data.name}`} src={`${data.url}`} /> */}
            <div className="EachItemImg" style={{backgroundImage: `url(${serverHost}${data.Image})`}}></div>
            <p className="ItemName">{data.Name}</p>
            <p className="ProductPrice">₹{calcOfferPrice(data.Price, data.Offer)}&nbsp;<span style={{color: '#999', textDecoration: 'line-through'}}>₹{data.Price}</span>&nbsp;&nbsp;<span style={{color: 'var(--green)'}}>{data.Offer}%&nbsp;off</span></p>
            {/* <p className="ItemPrice">₹ {data.Price}/10</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default ItemSlider;
