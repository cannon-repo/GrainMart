import React from 'react';
import { BsChevronDown } from "react-icons/bs";

const EachCategory = (props) => {
  return (
    <div className="EachCategory">
      <span>{props.name}</span>
      <span>
        <BsChevronDown />
      </span>
    </div>
  );
}

export default EachCategory;