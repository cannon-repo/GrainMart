import React from 'react';
import FilterResults from './FilterResults';
import ProductCard from './ProductCard';
import "./Shop.css";
import ShrinkedCategory from './ShrinkedCategory';
import {Item1} from "../../Assets/Data/ItemSliderList";
import Footer from '../Footer/Footer';
import useCheckUser from "../../Hooks/CheckUser";

const Shop = () => {
  useCheckUser();
  return (
    <div className='ShopWrap'>
        <ShrinkedCategory/>
        <FilterResults/>
        <div className='Shop'>
          {
            Item1.map((val,index) => {
              return <ProductCard key={index} url={val.url} name={val.name} rating={val.rating}/>
            })
          }
        </div>
        <Footer/>
    </div>
  )
}

export default Shop;