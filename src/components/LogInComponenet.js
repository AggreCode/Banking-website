import React from 'react'
import ReactModalLogin from "react-modal-login";
import { BrowserRouter, Link, Switch, Route, Router, Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import {useState, useEffect} from 'react'
function LogInComponenet({users,setAuth}) {
  const[username,setUsername]= useState("")
  const[password,setPassword]= useState("")
  const history = useHistory();
useEffect(()=>{
setAuth(false)
},[])
 
const handleLogin=async(e)=>{
  e.preventDefault();
 

 const dataobj = {username,password}
 const res = await fetch('http://localhost:5000/auth/login',{
  method:"POST",
  headers:{
          "Content-type":"application/json"
  },
  body:JSON.stringify(dataobj)
})
const data = await res.json()
 console.log(data.token)
if(res.ok){
  
   localStorage.setItem('auth2',true);
   localStorage.setItem('token', data.token);
   setAuth(true)
   alert("You have successfully logged in")
  
  
 }
 else {
  alert("please register yourself")
 }
 
}
    return (
        <div className="login-component">
          <div className="container">
    <div className="overlay">
      <h5>Welcome
       <br />&nbsp; &nbsp;  To   <br />
       Biswa Bank</h5>
    </div>

       
       
          <div className="form-login">
             <form onSubmit={handleLogin} >
             <h2>Log In</h2>
               <input type="text" placeholder="Username" onChange={e=>setUsername(e.target.value)} required/>
               <input  type="password" placeholder="Password"onChange={e=>setPassword(e.target.value)} required/>
            <button type="submit" >Submit</button>
            <span>Didn't Registered Yet?&nbsp; &nbsp;<a href="/signup">Register Here</a></span>
             </form>
            

           </div>

        
          </div>
     
 
        </div>
    )
}

export default LogInComponenet
