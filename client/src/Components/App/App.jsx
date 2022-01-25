import React from 'react';
import "./App.css";
import {useWindowSize} from "../../Hooks/ResizeHook";
import Navbar from '../Navbar/Navbar';

const App = () => {
  const [,height] = useWindowSize();
  return (
  <div className='GrainMart' style={{height: height}}>
    <Navbar/>
  </div>
  );
};

export default App;