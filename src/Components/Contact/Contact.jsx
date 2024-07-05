/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/Logo.avif'
import mail_icon from '../../assets/mail_icon.png'
import location_icon from '../../assets/location_icon.png'
import call_icon from '../../assets/call_icon.jpg'
import { useState } from 'react'

const Contact = () => {
    const [info, setInfo] = useState({
        name : "",
        email : "",
        message : "",
    });

    let handleInputChange = (event) => {
        setInfo((currData)=>{
            return {...currData , [event.target.name]: event.target.value};
        });
   
}



    const onSubmit = async (event) => {
        event.preventDefault();
       
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6cecdbb1-101e-4241-8aa3-e4e9485c7dcb");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
          
        //form submit krte hi inputs ki saari value gayab ho jaayengi and firse restart hoga 
        console.log(event);
    setInfo({
        name : "",
        email : "",
        message : "",
    });

      };





  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" style={{height:"100px"}} />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime. </p>
                <div className="contact-details">
                    <div className="contact-detail">
                   <img src={mail_icon} alt="" style={{height:"30px"}} />
                   <p>vachaspati1997@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" style={{height:"30px"}}  />
                        <p>+91 8707329654</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" style={{height:"30px"}} />
                        <p>Chandigarh, Bharat(India)</p>
                        
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
           <label htmlFor="name">Your Name</label>
           <input type="text" placeholder='Enter your name'  name='name' value={info.name} id="name"  onChange={handleInputChange}/>
           <label htmlFor="email">Your Email</label>
           <input type="email" placeholder='Enter your email' name='email' value={info.email} id="email" onChange={handleInputChange}/>
           <label htmlFor="message">Write your message here</label>
           <textarea name="message" rows="8" placeholder='Enter your message' value={info.message} id="message"  onChange={handleInputChange}></textarea>
           <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact