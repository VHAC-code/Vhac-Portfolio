/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react' ;
import "./NavBar.css" ;
import logo from "../../assets/logo.svg"
import underline from '../../assets/Logo.avif'
import { useState } from 'react';
import ReactDOM from 'react-dom' ;
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/togglemenu_open.svg'
import menu_close from '../../assets/togglemenu_close.svg'
import { useRef } from 'react';

const NavBar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = ()=>{
        menuRef.current.style.right = "0";
    }
    const closeMenu = ()=>{
        menuRef.current.style.right = "-350px";
    }

  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo' />
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' style={{height:"40px"}}/>
        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" style={{height:"25px"}}/>
            <li><AnchorLink className= 'anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <img src={underline} alt='' />:<></>}</li>
            <li><AnchorLink className= 'anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about"? <img src={underline} alt='' />:<></>}</li>
            <li><AnchorLink className= 'anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"? <img src={underline} alt='' />:<></>}</li>
            <li><AnchorLink className= 'anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"? <img src={underline} alt='' />:<></>}</li>
            <li><AnchorLink className= 'anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"? <img src={underline} alt='' />:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className= 'anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default NavBar;