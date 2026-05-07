import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                 <img src={assets.logo} alt="" />
                 <p>Lorem ipssssum dolor sit amet consectetur adipisicing elit. Quam error sapiente repellendus odio, cumque voluptates. Amet corporis fugiat, hic natus odio quia consectetur quis sequi aut eveniet nemo. Mollitia, ipsa?</p>
                 <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                 </div>
            </div>
            <div className="footer-content-right">
                <h2>Comapny</h2>
                <ul>
                    <li>about</li>
                    <li>Contact Us</li>
                    <li>Delivery</li>
                    <li>Policy</li>
                </ul>
            </div>
            <div className="footer-content-center">
                <h2>Get In TOuch</h2>
                <ul>
                   
                   <li>6476</li>
                   <li>contact@gmail.com</li>
                </ul>
            </div>
            
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 @ all rights are reserved</p>

    </div>
  )
}

export default Footer