import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./UserAvatar.css";
import {resetUser} from "../../Redux/UserDataSlice";
import useCheckUser from '../../Hooks/CheckUser';

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
            <section onClick={logoutClickHandler}>Logout</section>
          </div>
        </div>
      </div>
  );
}

export default UserAvatar;