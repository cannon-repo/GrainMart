import React from "react";
import "./AddProduct.css";
import { categories } from "../../Assets/Data/CategoryList";

const AddProduct = ({ trigger }) => {
  return (
    <div className="AddProductWrap">
      <div onClick={() => trigger(false)} className="AddProductBackDrop"></div>
      <div className="AddProduct">
        <form className="AddProductForm">
          <p className="AddProductHead">Add Product</p>
          <div className="AddProdInputWrap">
            <p>Name</p>
            <input type="text" placeholder="Enter Product Name" />
          </div>
          <div className="AddProdInputWrap">
            <p>Max Price</p>
            <input type="number" placeholder="Enter Product MRP" />
          </div>
          <div className="AddProdInputWrap">
            <p>Offer</p>
            <input type="number" placeholder="Enter Offer Percentage" />
          </div>
          <div className="AddProdInputWrap">
            <p>Category</p>
            <select>
              <option value="">Select Category</option>
              {categories.map((val, index) => {
                return !val.hasSubCategory ? (
                  <option key={index} value={val.name}>
                    {val.name}
                  </option>
                ) : (
                  val.list.map((vals, indexs) => (
                    <option index={index + indexs} value={vals}>
                      {vals}
                    </option>
                  ))
                );
              })}
            </select>
          </div>
          <div className="AddProdInputWrap">
            <p>Images</p>
            <input type="text" placeholder="Add Product Images" />
          </div>
          <button className="AddProductSubmitBtn">Sell this product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
