import React from 'react'

const NoSellerProducts = ({trigger}) => {
  return (
    <div className='NoSellerProducts'>
      <p className='NoProductTxt'>No Products Found</p>
      <button onClick={() => trigger(true)} className='AddFirstProdBtn'>Add Product</button>
    </div>
  )
}

export default NoSellerProducts;