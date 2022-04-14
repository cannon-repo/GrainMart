import React, { useRef } from "react";
import { BsChevronDown } from "react-icons/bs";

const EachCategory = (props) => {

  const wrapRef = useRef(null);

  
  const getDimensionsHandler = () => {
    props.setSubCatItems(props.subcategory);
    const rect = wrapRef?.current?.getBoundingClientRect();
    if(props.name === 'Vegetables') {
      props.setyoffset(window.innerWidth - rect.right - 75);
    } else {
      props.setyoffset(window.innerWidth - rect.right);
    }
    props.trigger(true);
  }

  return (
      <div ref={wrapRef} onMouseOver={getDimensionsHandler} onMouseOut={() => props.trigger(false)} className="EachCategory">
        <span>{props.name}</span>
        <span>
          <BsChevronDown />
        </span>
      </div>
  );
};

export default EachCategory;
