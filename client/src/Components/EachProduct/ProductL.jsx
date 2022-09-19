import React from "react";
import "./ProductL.css";

const ProductL = ({ prod }) => {
  return (
    <svg className="ProductLWrap" width="100%" height="150px">
      <path fill="#000" d="M 0 0 Q 350 150 100vw 0"></path>
    </svg>
  );
  // // <div className='ProductLWrap'>
  //     {/* <p>{prod.name}</p>
  //     <p>{prod.category}</p>
  //     <p>{prod.price}</p>
  //     <p>{prod.offer}</p>
  //     <p>{prod.seller}</p>
  //     <p>{prod.info}</p> */}
  // // </div>
};

export default ProductL;
