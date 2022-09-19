import React from 'react';
import "./Info.css";

const Info = () => {
  return (
      <div className='InfoWrap'>
          <div className='InfoField InfoName'>
              <p>Name</p>
          </div>
          <div className='InfoField InfoImg'>
              <p>User Image</p>
          </div>
          <div className='InfoField InfoId'>
              <p>User Id</p>
          </div>
          <div className='InfoField InfoGender'>
              <p>Gender</p>
          </div>
          <div className='InfoField InfoIsSeller'>
              <p>Seller</p>
          </div>
          <div className='InfoField InfoEmail'>
              <p>Email</p>
          </div>
          <div className='InfoField InfoPhone'>
              <p>Phone</p>
          </div>
      </div>
  )
}

export default Info;