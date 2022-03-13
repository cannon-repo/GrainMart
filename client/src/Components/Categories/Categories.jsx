import React from "react";
import "./Categories.css";
import { categories } from "../../Assets/Data/CategoryList";
import SubCategoryOverlay from "../SubCategoryOverlay/SubCategoryOverlay";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <div className="Categories">
      {categories.map((data, index) => {
        return (
          <NavLink to="/shop" style={{textDecoration: 'none'}} key={index} className="EachCategoryItem">
            <img alt={data.name} src={require(`../../Assets/Images/Category/${data.imageName}.jpg`)} />
            <p>{data.name}</p>
            {
              data.hasSubCategory && <div className="SubCategoryOverlayWrap"><SubCategoryOverlay data={data.list}/></div>
            }
          </NavLink>
        );
      })}
    </div>
  );
};

export default Categories;
