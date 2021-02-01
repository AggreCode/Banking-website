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
const toggleUse =()=>{
   setView(!togview)
}
  const toggleTransfer=()=>{
    SetTransferView(true)
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
           
            </nav>
            <div className='jumbo'>
              <h4>  My Bank</h4>
            <p>Lorem coptio dolores ducimus, odit dolorum blanditiis aliquid tenetur mollitia eligendi, quidem reprehenderit ut 
              cum quae.
                 
            </p>
            </div>
        </div>
        {!transferView? <Main toggleUse={toggleUse} users={users} togview={togview}/>:  <form> <div className="form-control">
   <label htmlFor="Name">Name </label>
    <input type="text" className="text" name="Name"  placeholder="Full Name"/>
</div>   
  
 <div className="form-control">
   <label htmlFor="amount">Amount </label> 
   <input type="number" className="text" name="amount"/>
</div> 
<div className="form-control-submit">
 <input type="submit" className="submit"/>
</div></form>}
        
        </div>
    );
  
}

export default App;
