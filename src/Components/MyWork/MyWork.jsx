/* eslint-disable no-unused-vars */
import React from 'react'
import "./MyWork.css";
import theme_pattern from '../../assets/Logo.avif'
import mywork_data from '../../assets/mywork_data';
import arrow_icon1 from '../../assets/arrow_icon1.svg'
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" style={{height:"100px"}} />
        </div>
        <div className="mywork-container">
         {mywork_data.map((work,index)=>{
            // return <img key={index} src={work.w_img} alt='' />
            return (
              <div key={index} className="card" style={{ width: '18rem' }}>
                <img src={work.w_img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">{work.w_web}</p>
                </div>
              </div>
            );
         })}

           



        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon1} alt="" style={{height:"40px"}}/>
        </div>
    </div>
  )
}

export default MyWork