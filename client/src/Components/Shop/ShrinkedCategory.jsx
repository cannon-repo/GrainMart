import React from 'react';
import EachCategory from './EachCategory';

const category = ["Vegetables", "Fruits", "Staples", "Packaged Food", "Snacks", "Dairy"]

const ShrinkedCategory = () => {
  return (
    <div className='ShrinkedCategory'>
        {
            category.map((val,index) => {
                return <EachCategory key={index} name={val}/>
            })
        }
    </div>
  )
}

export default ShrinkedCategory;