import React from 'react';
import EachCategory from './EachCategory';
import {categories} from "../../Assets/Data/CategoryList";

const ShrinkedCategory = ({trigger, setyoffset, setSubCatItems}) => {
  return (
    <div className='ShrinkedCategory'>
        {
            categories.map((val,index) => {
                return <EachCategory trigger={trigger} setyoffset={setyoffset} key={index} name={val.name} subcategory={val.hasSubCategory ? val.list : [val.name]} setSubCatItems={setSubCatItems}/>
            })
        }
    </div>
  )
}

export default ShrinkedCategory;