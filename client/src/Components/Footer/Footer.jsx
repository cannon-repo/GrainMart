import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='FooterWrap'>
  <div className='Footer'>
      <div className='FooterAbout'>
        <p className='FooterHero'>ABOUT</p>
        <div className='FooterLinks'>
          <p>Contact Us</p>
          <p>About Us</p>
        </div>
      </div>
      <div className='FooterHelp'>
        <p className='FooterHero'>HELP</p>
        <div className='FooterLinks'>
          <p>Cancellation & Returns</p>
          <p>FAQ</p>
        </div>
      </div>
      <div className='FooterSocial'>
        <p className='FooterHero'>SOCIAL</p>
        <div className='FooterLinks'>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
  </div>
  <div className='SignWrap'>
    <span className='MadeBy'>Made By - </span>
    <span className='DigiSign'></span>
  </div>
  </div>
  );
};

export default Footer;