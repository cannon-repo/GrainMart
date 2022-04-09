import React from 'react';
import { useSelector } from "react-redux";
import {IoAddCircleSharp} from "react-icons/io5";

const SellerProducts = ({products, trigger}) => {
  const sellerName = useSelector((state) => state.userData.sellerName);
  return (
    <div className='SellerProductsWrap'>
        <nav className='SellerProdHead'>
            <p className='SellerNameProd'>Heyy <b style={{fontFamily: 'Montserrat', color: '#000'}}>{sellerName}</b></p>
            <button onClick={() => trigger(true)} className='AddProdBtn'><IoAddCircleSharp/></button>
        </nav>
        <p className='MyProductsTxt'>My Products ({products.length})</p>
        <div className='SellerProducts'>
            {
                products.map((val,index) => <p key={index} style={{margin
                : '10px 0px'}}>{val}</p>)
            }
        </div>
    </div>
  )
}

export default SellerProducts;