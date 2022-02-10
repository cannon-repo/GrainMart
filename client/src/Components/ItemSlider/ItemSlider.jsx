import React from 'react';
import "./ItemSlider.css";

const ItemSlider = (props) => {
  return (
  <div className='ItemSlider'>
      {
          props.data.map((data,index) => {
              return (
                  <div className='EachItem'>
                      <img alt={`${data.name}`} src={`${data.url}`}/>
                      <p className='ItemName'>{data.name}</p>
                      <p className='ItemPrice'>₹ {data.rating}/10</p>
                  </div>
              )
          })
      }
  </div>
  );
};

export default ItemSlider;