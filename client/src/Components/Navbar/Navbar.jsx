import React, { useEffect } from "react";
import Logo from "../Logo/Logo";
import "./Navbar.css";
import { HiOutlineSearch } from "react-icons/hi";
import Cart from "../Cart/Cart";
import { MdExpandMore } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import UserAvatar from "../UserAvatar/UserAvatar";
import useCheckUser from "../../Hooks/CheckUser";

const Navbar = () => {
  useCheckUser();

  const hasUser = useSelector((state) => state.userData.hasUser);

  return (
    <div className="Navbar">
      <NavLink to="/" className="LogoWrap">
        <Logo />
      </NavLink>
      <div className="SearchBox">
        <input type="text" placeholder="Search products" />
        <div className="SearchBtn">
          <HiOutlineSearch />
        </div>
      </div>
      <div className="NavLinks">
        {hasUser ? (
          <UserAvatar />
        ) : (
          <NavLink to="/login" className="Login">
            Login
          </NavLink>
        )}
        <span className="More">
          More
          <p>
            <MdExpandMore />
          </p>
          <div className="MoreWrap">
            <div className="MorePtr">
              <span className="Ptr"></span>
            </div>
            <div className="MoreInfo">
              <section>Offers</section>
              <section><NavLink to="/sellerpanel" style={{textDecoration: 'none', textDecorationColor: '#000', color: '#000', width: '100%',height: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>Sell on GrainMart</NavLink></section>
            </div>
          </div>
        </span>
        <span>
          <NavLink to="/cart">
            <Cart />
          </NavLink>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
