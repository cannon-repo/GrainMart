import React from "react";
import "./Categories.css";
import { categories } from "../../Assets/Data/CategoryList";
import SubCategoryOverlay from "../SubCategoryOverlay/SubCategoryOverlay";

const Categories = () => {
  return (
    <div className="Categories">
      {categories.map((data, index) => {
        return (
          <div key={index} className="EachCategoryItem">
            <img alt={data.name} src={require(`../../Assets/Images/Category/${data.imageName}.jpg`)} />
            <p>{data.name}</p>
            {
              data.hasSubCategory && <div className="SubCategoryOverlayWrap"><SubCategoryOverlay data={data.list}/></div>
            }
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
