import React from "react";
import "./Categories.css";
import { categories } from "../../Assets/Data/CategoryList";

const Categories = () => {
  console.log(categories);
  return (
    <div className="Categories">
      {categories.map((data, index) => {
        return (
          <div key={index} className="EachCategoryItem">
            <img alt={data.name} src={require(`../../Assets/Images/Category/${data.imageName}.jpg`)} />
            <p>{data.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
