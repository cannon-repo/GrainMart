import React from 'react';
import "./App.css";
import {useWindowSize} from "../../Hooks/ResizeHook";
import Navbar from '../Navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import Home from '../Home/Home';
import Shop from "../Shop/Shop";

const App = () => {
  const [,height] = useWindowSize();
  return (
  <div className='GrainMart' style={{height: height}}>
    <Navbar/>
    <div className='Screen'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
    </div>
  </div>
  );
};

export default App;