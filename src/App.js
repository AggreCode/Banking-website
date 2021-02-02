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
  const [users,setUser]= useState([{
      name: "Biswa",
      email: "biswajittlh@gmail.com",
      balance: 2000

  },
  {
   name: "Biswa1.0",
   email: "biswajittlh@gmail.com",
   balance: 20000

},
{
   name: "Biswa2.0",
   email: "biswajittlh@gmail.com",
   balance: 200000

}
])
const [logbook,setLogbook]= useState(
  []
)
const toggleUse =()=>{
   setView(!togview)
   SetTransferView(false)
}
  const toggleTransfer=()=>{
    SetTransferView(true)
    setView(false)
  }
  const UpdateUser=({name,amount,name2})=>{
    setUser(users.map((user)=>{
      return user.name==name ? {...user,balance:(user.balance)  - (parseInt(amount,10))}:user
    }))
    setUser(users.map((user)=>{
      return user.name==name2 ? {...user,balance:user.balance+parseInt(amount,10)}:user
    }))
   
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
    UpdateUser({name,amount,name2})
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
        {!transferView? <Main toggleUse={toggleUse} users={users} togview={togview}/>: 
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
