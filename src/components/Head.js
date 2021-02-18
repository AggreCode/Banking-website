import React from 'react'
import {useState, useEffect} from 'react'


function Head({auth,history,setAuth}) {
    const LogOut=async()=>{
        const res = await fetch('http://localhost:5000/auth/logout')
        const data = await res.json()
   
        localStorage.setItem('auth2',false);
        localStorage.setItem('token', data.token);
       setAuth(false)
        console.log(localStorage.getItem('token'))
        console.log(localStorage.getItem('auth2'))
         history.push('/home')
         
       
     }
   
    return (
       
             <div class="container">
                                <div className="nav-bar">
            <div className="logo"> 
                <img src={require("./css/images/Group 1.png")} alt="Logo" />
             </div> 
             <div className="options"> 
             <ul>
            <li><a href="./" className="nav-link">Home</a></li>
            <li><a href="./" className="nav-link">About Us</a></li>
            <li><a href="./"  className="nav-link">Contact Us</a></li>
             </ul>
             {auth?
             <div className="afterAuth">
             <button className="signup"><a href="/pay" className="">Pay</a></button>
              <button className="Log In"><a href="/viewlog" className="login">Log</a></button>
              <button className="Log In"><a href="/viewcustomers" className="login">users</a></button>
              <button className="Log In" onClick={LogOut}>LogOut</button>
             </div>:
         
              <div className="sign-log">
                       <button  className="log-sign"><a href="/login"  className="login">Log In</a></button>
        
             </div>}
            </div> 
            
        
        </div>
        <hr />
     
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
