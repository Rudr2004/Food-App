//import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footercontent">
        <div className="footercotent-left">
        <h1 className="logo">Food App</h1>
            <p className="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta iste sint officia nulla id autem expedita neque dignissimos repellat, praesentium sed voluptatem, doloribus explicabo? Ipsa dolore iste repellendus magnam in?</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footercotent-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About-us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footercotent-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 4578124970</li>
                <li>abc@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright"> All Rights Reserved!</p>
    </div>
  )
}

export default Footer
