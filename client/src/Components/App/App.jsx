import React from 'react';
import "./App.css";
import {useWindowSize} from "../../Hooks/ResizeHook";
import Navbar from '../Navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import Home from '../Home/Home';
import Shop from "../Shop/Shop";
import Register from '../Register/Register';
import Login from '../Login/Login';

const App = () => {
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
      </Routes>
    </div>
  </div>
  );
};

export default App;