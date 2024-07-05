/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from './Components/NavBar/NavBar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import About from './Components/About/About.jsx';
import Services from './Components/Services/Services.jsx';
import MyWork from './Components/MyWork/MyWork.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';

const App = () => {
  return (
    <div>
    <NavBar/>
    <Hero/>
    <About/>
    <Services/>
    <MyWork/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App;