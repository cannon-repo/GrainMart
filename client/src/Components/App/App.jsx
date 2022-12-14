import React from 'react';
import "./App.css";
import {useWindowSize} from "../../Hooks/ResizeHook";
import Navbar from '../Navbar/Navbar';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from '../Home/Home';
import Shop from "../Shop/Shop";
import Register from '../Register/Register';
import Login from '../Login/Login';
import useCheckUser from "../../Hooks/CheckUser";
import CartScreen from '../Cart/CartScreen';
import SellerScreen from '../Seller/SellerScreen';
import { useSelector } from 'react-redux';
import useGetSellerInfo from '../../Hooks/GetSellerInfo';
import SellerRegister from "../Seller/SellerRegister";
import WishList from '../Wishlist/WishList';
import Profile from '../Profile/Profile';
import Info from '../Profile/Info';
import SellerInfo from '../Profile/SellerInfo';
import Addresses from '../Profile/Addresses';
import Orders from '../Profile/Orders';
import EachProduct from '../EachProduct/EachProduct';

const App = () => {

  useCheckUser();
  useGetSellerInfo();

  const hasUser = useSelector((state) => state.userData.hasUser);
  const isSeller = useSelector((state) => state.userData.isSeller);
  const [,height] = useWindowSize();

  return (
  <div className='GrainMart' style={{height: height}}>
    <Navbar/>
    <div className='Screen'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop/:category" element={<Shop/>}/>
        <Route path="/register" element={<Register/>} /> {/* same as login */}
        <Route path="/login" element={<Login/>} /> {/* if user is loggedin nothing happens and user stays on that page only and not redirected to login */}
        <Route exact path='/wishlist' element={<WishList/>}/>
        <Route exact path='/profile' element={<Profile/>}>
          <Route index element={<Navigate to="info" replace />} />
          <Route path="info" element={<Info/>}/>
          <Route path="sellerinfo" element={<SellerInfo/>}/>
          <Route path="addresses" element={<Addresses/>}/>
          <Route path="orders" element={<Orders/>}/>
        </Route>
        <Route path="/cart" element={hasUser || localStorage.getItem('loggedin') ? <CartScreen /> : <Login/>} />
        <Route exact path="/sellerpanel" element={!hasUser && !localStorage.getItem('loggedin') ? <Navigate to="/login"/> : isSeller || localStorage.getItem('isSeller') ? <SellerScreen/> : <Navigate to="/sellerregister"/>} />
        <Route exact path="/sellerregister" element={isSeller || localStorage.getItem('isSeller') ? <Navigate to="/sellerpanel" /> : hasUser || localStorage.getItem('loggedin') ? <SellerRegister/> : <Navigate to="/login"/> } />
      </Routes>
    </div>
    {/* <EachProduct/> */}
  </div>
  );
};

export default React.memo(App);