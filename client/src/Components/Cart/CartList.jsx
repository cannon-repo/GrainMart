import React, { useEffect, useState } from "react";

const CartList = ({ data }) => {

  const [itemQty, setItemQty] = useState(1);
  const [decBtnState, setDecBtnState] = useState('transparent');

  const decHandler = () => {
    if(itemQty > 1) {
      setItemQty(itemQty-1);
    }
    return;
  }
  
  const incHandler = () => {
    setItemQty(itemQty+1);
  }

  useEffect(() => {
    if(itemQty === 1) {
      setDecBtnState('gainsboro');
    } else {
      setDecBtnState('transparent');
    }
  }, [itemQty]);

  return (
    <div className="CartList">
      <div className="ItemInfoLeft">
        <img className="ItemImg" alt="item" src={`${data.img}`} />
        <div className="qtyCtr">
          <div className="dec" style={{backgroundColor: decBtnState}} onClick={decHandler}>-</div>
          <div className="qtyVal">{itemQty}</div>
          <div className="inc" onClick={incHandler}>+</div>
        </div>
      </div>
      <div className="ItemInfoRight">
        <div>
          <p className="ItemName">{data.name}</p>
          <p className="ItemSeller">Seller: {data?.seller ? data.seller : "xyz"}</p>
        </div>
        <p className="ItemPrice"><span style={{fontWeight: 'bolder'}}>₹{data.price - (data.price*10)/100}</span><span style={{marginLeft: '10px', textDecoration: 'line-through', color: '#999'}}>₹{data.price}</span><span style={{marginLeft: '10px', color: 'var(--green)', fontWeight: 'bolder'}}>10% Off</span></p>
        <div className="ItemActionBtn">
          <button style={{marginRight: '10px'}}>Add to Wishlist</button>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartList;
