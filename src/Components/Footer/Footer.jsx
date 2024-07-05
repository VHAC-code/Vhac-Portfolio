/* eslint-disable no-unused-vars */
import React from 'react'
import'./Footer.css'
import footer_logo from '../../assets/logo.svg'
import user_icon from '../../assets/user_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" style={{height : "100px"}}/>
                <p>Full Stack Developer with hands-on experience in creating dynamic web applications. Recently completed an internship at BLW Indian Railways, where I worked on various projects involving full-stack development, database management, and user interface design. </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" style={{height : "30px"}} />
                    <input type="email" placeholder='Enter your email' />
                </div>
               
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        
        
       
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Vachas Pati Pandey. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer