import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import { categories } from "../../Assets/Data/CategoryList";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toggle } from "../../Redux/ProductsSlice";

const AddProduct = ({ trigger }) => {

  const dispatch = useDispatch();

  const sellerId = useSelector((state) => state.userData.sellerId);

  const [name, setName] = useState('');
  const [mrp, setMrp] = useState('');
  const [offer, setOffer] = useState('');
  const [category, setCategory] = useState('');
  const [img, setImg] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (name && mrp && offer && category && img) {
      setBtnDisabled(false);
      return;
    }
    setBtnDisabled(true);
  }, [name, mrp, offer, category, img]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("SellerId", sellerId);
    formData.append("Name", name);
    formData.append("Category", category);
    formData.append("Price", mrp);
    formData.append("Offer", offer);
    formData.append("Image", img);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    axios
      .post("/api/seller/addproduct", formData, config)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        trigger(false);
        dispatch(toggle());
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="AddProductWrap">
      <div onClick={() => trigger(false)} className="AddProductBackDrop"></div>
      <div className="AddProduct">
        <form
          className="AddProductForm"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <p className="AddProductHead">Add Product</p>
          <div className="AddProdInputWrap">
            <p>Name</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Product Name"
            />
          </div>
          <div className="AddProdInputWrap">
            <p>Max Price</p>
            <input
              value={mrp}
              onChange={(e) => setMrp(e.target.value)}
              type="number"
              placeholder="Enter Product MRP"
            />
          </div>
          <div className="AddProdInputWrap">
            <p>Offer</p>
            <input
              value={offer}
              onChange={(e) => setOffer(e.target.value)}
              type="number"
              placeholder="Enter Offer Percentage"
            />
          </div>
          <div className="AddProdInputWrap">
            <p>Category</p>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map((val, index) => {
                return !val.hasSubCategory ? (
                  <option key={index} value={val.name}>
                    {val.name}
                  </option>
                ) : (
                  val.list.map((vals, indexs) => (
                    <option key={index + indexs} value={vals}>
                      {vals}
                    </option>
                  ))
                );
              })}
            </select>
          </div>
          <div className="AddProdInputWrap">
            <p>Images</p>
            <input
              className="ProdImgInput"
              onChange={(e) => setImg(e.target.files[0])}
              type="file"
              accept=".jpg, .png, .jpeg"
              name="Image"
              placeholder="Add Product Image"
            />
          </div>
          <button
            type="submit"
            className="AddProductSubmitBtn"
            disabled={btnDisabled}
          >
            Sell this product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
