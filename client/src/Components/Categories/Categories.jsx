import React from "react";
import "./Categories.css";
import { categories } from "../../Assets/Data/CategoryList";
import SubCategoryOverlay from "../SubCategoryOverlay/SubCategoryOverlay";
import { NavLink } from "react-router-dom";
import {useWindowSize} from "../../Hooks/ResizeHook";

const Categories = () => {

  const hor = useWindowSize();

  const eachHor = Math.min(60, Math.floor(hor[0]/6) - 20);

  console.log(hor, eachHor);

  const clickHandler = (e, flag) => {
    if("ontouchstart" in document.documentElement) {
      if(flag) {
        e.preventDefault();
      }
    }
  }

  return (
    <div className="Categories">
      {categories.map((data, index) => {
        return (
          <div className="EachCategoryItemWrap">
            <NavLink onClick={(e) => clickHandler(e,data.hasSubCategory)} to="/shop" style={{ textDecoration: "none" }} key={index}>
              <div className="EachCategoryItem">
                <img
                  className="EachCategoryItemImg"
                  alt={data.name}
                  src={require(`../../Assets/Images/Category/${data.imageName}.jpg`)}
                  style={{width: `${eachHor}px`}}
                />
                <p className="EachCategoryItemTxt">{data.name}</p>
              </div>
            </NavLink>
            {data.hasSubCategory && (
              <div className="SubCategoryOverlayWrap" style={{right: index === 2 ? '-100%' : '0%'}}>
                <SubCategoryOverlay data={data.list} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
