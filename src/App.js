import React, { Component } from "react";
import Main from './components/mainComponent'
import {useState, useEffect} from 'react'
import Header from './components/header'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import "./App.css";
import TransferPage from "./components/TransferPage"


const App=()=> {
  const [transferView,SetTransferView] = useState(false)
  const [togview,setView]= useState(false)
   const [name,setName]=useState('')
   const [name2,setName2]=useState('')
   const [amount,setAmount]=useState(0)
  const [users,setUser]= useState()
const [logbook,setLogbook]= useState(
  []
)
useEffect(()=>{
  const getTasks = async() =>{
    const users= await fetchUsers()
    setUser(users)
  }
  getTasks()
})
const fetchUsers= async ()=>{
  const res= await fetch ('http://localhost:5000/users')
  const data = await res.json();
  return data
}
const fetchUsers= async ()=>{
  const res= await fetch ('http://localhost:5000/users')
  const data = await res.json();
  return data
}

const toggleUse =()=>{
   setView(!togview)
   SetTransferView(false)
}
  const toggleTransfer=()=>{
    SetTransferView(true)
    setView(false)
  }
  const UpdateUser1=({name,amount})=>{
    setUser(users.map((user,id)=>{
      return user.name==name ? {...user,balance:(user.balance) -(parseInt(amount,10))}:user
    }))
   
    
   
  }
  const UpdateUser2=({name2,amount})=>{
    setUser(users.map((user)=>{
      return user.name==name2 ? {...user,balance:(user.balance) +(parseInt(amount,10))}:user
    }))
    
   
  }
  const validateUser=({name,amount})=>{
          users.map((user,index)=>{
            return user.name==name && user.balance<amount ? false: user
          })
          return true
  }
  const onSubmit=(e)=>{
    e.preventDefault()
    if(!name){
      alert('please add sender')
      return
    }
    if(!name2){
      alert('please add receiver')
      return
    }
  if( validateUser({name,amount}))
   {
    UpdateUser1({name,amount})
    UpdateUser2({name2,amount})
   }
   else { alert('You Have insufficient balance')}
     setName('')
    setName2('')
    setAmount(0)
  }
  
    return (
      <div className="App">
               <div>
             <nav className='nav-container'>
                <a href="/" className="home" style={{float:'left'}}>My Bank</a>
                <a href="/" className="link1 active">Home</a>
                <a href="/" className="link2">About Us</a>
                <a href="/" className="link3">Contact Us</a>
                <button className="bread-nav" onClick={toggleTransfer}>Transfer Money</button>
                <button className="bread-item" onClick={toggleUse}> View All Customers </button>
          
            </nav>
            <div className='jumbo'>
              <h4>  My Bank</h4>
            <p>Lorem coptio dolores ducimus, odit dolorum blanditiis aliquid tenetur mollitia eligendi, quidem reprehenderit ut 
              cum quae.
                 
            </p>
            </div>
        </div>
        {!transferView? <Main toggleUse={toggleUse} users={users}  togview={togview}/>: 
         <form onSubmit={onSubmit}> <div className="form-control">
   <label htmlFor="name">Sender </label>
    <input type="text" className="text" name="name" 
   value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Full Name"/>
</div>   
<div className="form-control">
   <label htmlFor="name2">Receiver </label>
    <input type="text" className="text" name="name2" 
   value={name2} onChange={(e)=>setName2(e.target.value)}  placeholder="Full Name"/>
</div>   
  
 <div className="form-control">
   <label htmlFor="amount">Amount </label> 
   <input type="number" className="text"
   value={amount} onChange={(e)=>setAmount(e.target.value)} name="amount"/>
</div> 
<div className="form-control-submit">
 <input type="submit" className="submit"/>
</div></form>}
        
        </div>
    );
  
}

export default App;
