import React from 'react';
import "./SubCategoryOverlay.css";

const SubCategoryOverlay = ({data}) => {
  return (
    <div className='SubCategoryOverlay'>
      {
        data.map((val,index) => {
          return <p key={index} className="EachSubCategory">{val}</p>
        })
      }
    </div>
  )
}

export default SubCategoryOverlay;