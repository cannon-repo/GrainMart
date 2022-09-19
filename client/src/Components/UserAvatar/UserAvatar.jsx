import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./UserAvatar.css";
import {resetUser} from "../../Redux/UserDataSlice";
import useCheckUser from '../../Hooks/CheckUser';
import { NavLink } from 'react-router-dom';

const UserAvatar = () => {

  useCheckUser();

  const dispatch = useDispatch();

  const user = useSelector((state) => state.userData);
  
  const logoutClickHandler = (e) => {
    e.preventDefault();
    fetch("/api/user/logout").then((res) => res.json()).then((data) => {
      if(data.success) {
        localStorage.removeItem('loggedin');
        localStorage.removeItem('isSeller');
        dispatch(resetUser());
      } else {
        alert(data.msg);
      }
    }).catch((err) => console.log(err));
  }

  return (
      <div className="UserAvatarWrap">
        <div className="UserAvatar"></div>
        <div className="UserAvatarDropDownWrap">
          <div className="UserAvatarPtr">
            <span className="Ptr"></span>
          </div>
          <div className="UserAvatarDropDown">
            <section><NavLink to="/profile" style={{textDecoration: 'none', textDecorationColor: '#000', color: '#000', width: '100%',height: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '15px 10px'}}>Profile</NavLink></section>
            <section><NavLink to="/wishlist" style={{textDecoration: 'none', textDecorationColor: '#000', color: '#000', width: '100%',height: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '15px 10px'}}>Wishlist</NavLink></section>
            <section style={{padding: '15px 10px'}} onClick={logoutClickHandler}>Logout</section>
          </div>
        </div>
      </div>
  );
}

export default UserAvatar;