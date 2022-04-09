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
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={hasUser ? <CartScreen data={hasUser}/> : <Login/>} />
        <Route exact path="/sellerpanel" element={!hasUser && !localStorage.getItem('loggedin') ? <Navigate to="/login"/> : isSeller || localStorage.getItem('isSeller') ? <SellerScreen/> : <Navigate to="/sellerregister"/>} />
        <Route exact path="/sellerregister" element={hasUser || localStorage.getItem('loggedin') ? <SellerRegister/> : <Navigate to="/login"/> } />
      </Routes>
    </div>
  </div>
  );
};

export default React.memo(App);