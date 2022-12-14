import React from 'react';
import { NavLink } from 'react-router-dom';
import "./SubCategoryOverlay.css";

const SubCategoryOverlay = ({data}) => {
  return (
    <div className='SubCategoryOverlay'>
      {
        data.map((val,index) => {
          return <NavLink key={index} to={`/shop/${val}`}><p className="EachSubCategory">{val}</p></NavLink>
        })
      }
    </div>
  )
}

export default SubCategoryOverlay;