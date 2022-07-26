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
        <div className="UserAvatar">{user.userName ? user.userName[0] : ''}</div>
        <div className="UserAvatarDropDownWrap">
          <div className="UserAvatarPtr">
            <span className="Ptr"></span>
          </div>
          <div className="UserAvatarDropDown">
            <section>Profile</section>
            <section><NavLink to="/wishlist" style={{textDecoration: 'none', textDecorationColor: '#000', color: '#000', width: '100%',height: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>Wishlist</NavLink></section>
            <section onClick={logoutClickHandler}>Logout</section>
          </div>
        </div>
      </div>
  );
}

export default UserAvatar;