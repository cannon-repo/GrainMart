import React from "react";
import "./SellerEachProduct.css";
import {MdEdit} from "react-icons/md";
import {AiFillStar} from "react-icons/ai";

const SellerEachProduct = ({ product }) => {
  const serverHost = "http://192.168.42.169:5000/public/images/";

  const calcDiscountPrice = (mrp = product.Price, offer = product.Offer) => {
      const sellPrice = Math.ceil(mrp - ((mrp*offer)/100));
      return sellPrice;
  }

  return (
    <div className="SellerEachProduct">
      <img className="SEPImage" src={serverHost + product.Image} alt="" />
      <div className="SellerEachProdData">
          <p className="SEPName">{product.Name}</p>
          <div className="SEPMrpDiscount">
              <p>MRP:&nbsp;<b style={{color: '#999'}}>₹{product.Price}</b></p>
              <p style={{width: '40%'}}>Discount:&nbsp;<b style={{color: 'var(--green)'}}>{product.Offer}%</b></p>
          </div>
          <p>Sell&nbsp;Price:&nbsp;<b>₹{calcDiscountPrice()}</b></p>
          <div className="SEPUnitsRating">
            <p>Units&nbsp;Sold:&nbsp;10</p>
            <div style={{width: '40%', display: 'flex', alignItems: 'center'}} className="SEPRating">
                <p>Rating:</p>&nbsp;
                <p style={{backgroundColor: 'var(--green)', padding: '3px 0px', fontSize: '12px', fontWeight: 'bolder', color: '#fff', borderRadius: '4px', width: '35px', textAlign: 'center', fontFamily: 'Montserrat', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>4.1<AiFillStar/></p>
            </div>
          </div>
          <div className="SEPEdit">
              <p>Configure&nbsp;Details</p>
              <MdEdit/>
          </div>
      </div>
    </div>
  );
};

export default SellerEachProduct;
