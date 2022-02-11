import React from 'react';
import {AiOutlineArrowUp, AiOutlineArrowDown} from "react-icons/ai";

const FilterResults = () => {
  return (
    <div className='FilterResults'>
        <p className='FilterResultsHero'>Sort By</p>
        <div className='EachBlockWrap'>
        <div className='EachBlock'>
            <p>Newest</p>
        </div>
        <div className='EachBlock'>
            <p>Price</p><AiOutlineArrowDown/>
        </div>
        <div className='EachBlock'>
            <p>Price</p><AiOutlineArrowUp/>
        </div>
        <div className='EachBlock'>
            <p>Popularity</p>
        </div>
        </div>
    </div>
  )
}

export default FilterResults;