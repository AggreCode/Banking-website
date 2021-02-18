import React from 'react'

function Navigationheader({auth,history,setAuth}) {
    
    
    const LogOut=async()=>{
       const res = await fetch('http://localhost:5000/auth/logout')
       const data = await res.json()
  
       localStorage.setItem('auth2',false);
       localStorage.setItem('token', data.token);
       setAuth(false)
       console.log(localStorage.getItem('token'))
       console.log(localStorage.getItem('auth2'))
        
        
      
    }
    return (
        <div>
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
        </div>
    )
}

export default Navigationheader
