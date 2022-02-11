import React from 'react';
import Logo from '../Logo/Logo';
import "./Navbar.css";
import {HiOutlineSearch} from "react-icons/hi";
import Cart from '../Cart/Cart';
import {MdExpandMore} from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
  <div className='Navbar'>
      <NavLink to="/" className='LogoWrap'>
      <Logo/>
      </NavLink>
      <div className='SearchBox'>
          <input type="text" placeholder='Search products'/>
          <div className='SearchBtn'><HiOutlineSearch/></div>
      </div>
      <div className='NavLinks'>
          <span>Login</span>
          <span className='More'>More<p><MdExpandMore/></p>
          <div className='MoreWrap'>
              <div className='MorePtr'><span className='Ptr'></span></div>
              <div className='MoreInfo'>
              <section>Offers</section>
              <section>Sell on GrainMart</section>
              </div>
          </div>
          </span>
          <span><Cart/></span>
      </div>
  </div>
  );
};

export default Navbar;