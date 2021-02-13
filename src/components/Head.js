import React from 'react'

function Head() {
    return (
       
             <div class="container">
        <div class="nav-bar">
            <div class="logo"> 
                <img src="./css/images/Group 1.png" alt="Logo" />
             </div> 
             <div class="options"> 
             <ul>
            <li><a href="./" class="nav-link">Home</a></li>
            <li><a href="./" class="nav-link">About Us</a></li>
            <li><a href="./" class="nav-link">Contact Us</a></li>
             </ul>
             
              <div class="sign-log">
                <button class="signup"><a href="/signup" class="signup">Sign Up</a></button>
                <button class="Log In"><a href="/login" class="login">Log In</a></button>
        
             </div>
            </div> 
            
        
        </div>
        <hr />
        <div class="hero-image">
            <img src="./css/images/Group 2.png" alt="hero-image" />
        </div>
        <div class="hero">
            <img src="./css/images/Group 3.png" alt="hero" />
        </div>
              <div class="aim">
                  <img src="./css/images/Group 10.png" alt="aim" />
              </div>
             <div class="get-started">
                 <button><a href="" class="get-start">Get Started
                </a>    </button>
             </div>
            <div class="quotes">
                <img src="./css/images/Group 7.png" alt="" />
            </div>
            <div class="last">
                <img src="./css/images/Group 9.png" alt="" />
            </div>
            </div>
      
    )
}

export default Head
