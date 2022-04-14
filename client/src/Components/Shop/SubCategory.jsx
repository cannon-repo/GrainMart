import React from 'react';
import {NavLink} from "react-router-dom";

const SubCategory = ({trigger, display, yoffset, setyoffset, subCatItems}) => {
  return (
    <div onClick={() => trigger(false)} onMouseOver={() => trigger(true)} onMouseOut={() => trigger(false)} className='ShrinkedSubCategory' style={{display: display ? 'block' : 'none', right:`${yoffset}px`}}>
        {
            subCatItems.map((val,index) => <NavLink key={index} to={`/shop/${val}`}><p>{val}</p></NavLink>)
        }
    </div>
  )
}

export default SubCategory;