import React from 'react'
import {useState, useEffect} from 'react'
import { BrowserRouter, Link, Switch, Route, Router, Redirect } from 'react-router-dom'

const SignUp=({setUser,users})=> {
        const [username,SetUsername]=  useState('')
        const [password,SetPassword]=  useState('')
        const [name,SetName]=  useState('')
        const [balance,SetBalance]=  useState(0)
    
      const[isRegister,setisRegister]= useState(false)
        const OnSubmit= async (e)=>{
               e.preventDefault()
     const dataobj = {username,password,name,balance}
  
    
     const res = await fetch('http://localhost:5000/auth/register',{
             method:"POST",
             headers:{
                     "Content-type":"application/json"
             },
             body:JSON.stringify(dataobj)
     })
        var  data = await res.json()
      console.log(data)
setTimeout(setisRegister(true),3000) 
 alert("You are registered")
 console.log(users)
   
           }
 return (
        <div className="signupcomponent">
             
                 <form id="signupform" name="signupform" onSubmit={OnSubmit} >
                <div className="form-control">
                <label htmlFor="username">Username</label>
             <input type="text" alt="username"  required onChange={e => SetUsername(e.target.value)} name="username"placeholder="username" />
                </div>
              
             <div className="form-control">
             <label htmlFor="password">Password</label>
             <input type="text" alt="password" name="password" required   onChange={e => SetPassword(e.target.value)} placeholder="password" />
    
             </div>
                     <div className="form-control">
                     <label htmlFor="name">Name</label>
             <input type="text" alt="name" name="name" required onChange={e => SetName(e.target.value)}  placeholder="name" />
       
                     </div>
               <div className="form-control">
               <label htmlFor="balance">Balance</label>
             <input type="text" alt="balance" name="balance" required  value={balance} onChange={e => SetBalance(e.target.value)}placeholder="balance" />
             
               </div>
               <div className="form-control-submit">
              
             <input type="submit" className="submit"/>
             
               </div>

            
            </form>
         {
                 isRegister ? 

                 <Redirect to="/login"/>
                : null
         }

        </div>
           
    )
}

export default SignUp
