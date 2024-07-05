/* eslint-disable no-unused-vars */
import React from 'react'
import "./About.css"
import theme_pattern from '../../assets/Logo.avif'
import profile_img from '../../assets/vhac_img2.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" className='theme' />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" className='pic' />
            </div>
            <div className="about-right">
                <div className="about-para">
                <h3>Work Experience</h3>

<p><b>Full Stack Developer Intern | BLW Indian Railways </b> </p>
<p><b>June, 2024 – June, 2024</b></p>

<p><b>Full Stack Development:</b> Contributed to the development of web applications using a combination of front-end and back-end technologies. Developed user interfaces with HTML, CSS, and JavaScript, and implemented server-side logic using frameworks such as Node.js/Express also used Mongodb for storing Data.</p>
<p><b>LTS (Locomotive Tracking System):</b> Assisted in the development and maintenance of the Locomotive Tracking System, ensuring real-time data accuracy and improving operational efficiency.</p>
<p><b>Planning:</b>Involved in planning and strategizing project timelines and deliverables, collaborating with team members to meet project milestones.</p>
<p><b>Problem-Solving: </b> Identified and resolved technical issues, implemented enhancements, and conducted thorough testing to ensure the reliability of applications.</p>

                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS(Bootstrap and TailWind)</p>
                        <hr style={{width:"50%"}} />
                    </div>
                    
                    <div className="about-skill">
                        <p>React Js</p>
                        <hr style={{width:"70%"}} />
                    </div>
                   
                    <div className="about-skill">
                        <p>JavaScript</p>
                        <hr style={{width:"60%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Nodejs | Expressjs | Ejs</p>
                        <hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill">
                        <p>Database: SQL|MongoDb</p>
                        <hr style={{width:"80%"}} />
                    </div>
                </div>
            </div>
        
            <div className="about-achievements">
               
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEARS OF EXPERIENCE IN DEVELOPMENT</p>
                   
                </div>
                <hr className='hr'/>
                <br />
                
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                  
                </div>
                <hr />
                {/* <hr className='hr'/>
               
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>HAPPY CLIENTS</p>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default About