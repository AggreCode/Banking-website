import React from 'react'
import {useState, useEffect} from 'react'


function Head({auth}) {
   
    return (
       
             <div class="container">
     
        <div className="hero-image">
            <img src={require("./css/images/Group 2.png")} alt="hero-image" />
        </div>
        <div className="aim">
        <div className="aim-header">
           <h2> Welcome To Biswa Bank</h2> <img src={require("./css/images/Group 10.png")} alt="logo-image" />
           <div className="aim-body">
         <h5> Biswa Bank will revolutionize the system</h5>
         </div>
         
         </div>

      
                 </div>
        <div className="aim2-header">
        <h2> Our Aim</h2> 
          <div className="aim2-body">
         <h5> Let's embark on a journey to  decentralise the Indian Banking System</h5>
         </div>
        </div>
       
             <div className="get-started">
                 <button><a href="/signup" class="get-start">Get Started
                </a>    </button>
             </div>
          
            <div className="last">
                <img src={require("./css/images/Group 11.png")} alt="last" />
            </div>
            </div>
      
    )
}

export default Head
