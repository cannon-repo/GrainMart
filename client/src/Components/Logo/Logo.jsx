import React from "react";
import "./Logo.css";
import { FaOpencart } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="Logo">
      <p className="LogoBrand">
        Grain<span>MART</span>
      </p>
      <div className="LogoIcon">
        <FaOpencart />
      </div>
    </div>
  );
};

export default Logo;
