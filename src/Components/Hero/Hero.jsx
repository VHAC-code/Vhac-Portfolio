/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/vhac_img3.jpg"
import ReactDOM from 'react-dom' ;
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I`m Vachas Pati Pandey,</span> MernStack Developer based in Bharat(India).</h1>
        <p>I am currently a third-year B.Tech student specializing in Information Technology. With a solid foundation in programming, data structures, and algorithms, I am passionate about solving complex problems and developing innovative software solutions. My coursework has equipped me with skills in various programming languages such as C, C++, and Java, as well as Mern Stack technologies.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className= 'anchor-link' offset={50} href='#contact'>
                Connect with me
            </AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero