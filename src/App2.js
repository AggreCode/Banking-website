import React, { Component } from "react";
import Main from './components/mainComponent'
import {useState, useEffect} from 'react'
import Header from './components/header.js'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label } from 'reactstrap';

import "./App.css";
import TransferPage from "./components/TransferPage"
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

const axios = require('axios');


const App2=({users,setUser,setLogbook, logbook})=> {
  const [transferView,SetTransferView] = useState(false)
    const [togview,setView]= useState(false)
     const [name,setName]=useState('')
     const [name2,setName2]=useState('')
     const [amount,setAmount]=useState(0)
     const [auth,setAuth] =useState(false)
     const [username,SetUsername]= useState('')
     const [password,SetPassword]= useState('')
     const fetchUser= async (id)=>{
      const res= await fetch (`http://localhost:5000/users/${id}`)
      const data =  res.json();
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
  const getUser=(n)=>{
  
    var rid=-1
  for(var i=0;i<users.length;i++)
  {
    if(users[i].name===n){
    rid= users[i]._id
    }
  }
   return rid
   
  }
 
  const AddLog= (log)=>{
   

  axios.post('http://localhost:5000/logs',log)
  .then(res =>{
             console.log(res)
             setLogbook([...logbook,res])   
  })
  .catch(err=>{
    console.log(err)
  })


    
   
   
  }
  const onSubmit=async (e)=>{
    e.preventDefault()
     if(!name||!name2||!amount||(name===name2))
    {
      alert("error")
      return
    }
    

     const id1=getUser(name)
     const id2=getUser(name2)
    if(id1==-1||id2==-1)   {
      alert("error")
      return
    }
  console.log(id1)
    
     
     const sender = await fetchUser(id1)
     const receiver = await fetchUser(id2)
     if(sender.balance<amount){
      alert("error")
      return
    }

     const upreceiver ={...receiver,balance: receiver.balance + parseInt(amount)}
   
     const upsender ={...sender,balance: sender.balance - parseInt(amount)}
     console.log(upsender)
     console.log(upreceiver)
     const res1 = await fetch(`http://localhost:5000/users/${id1}`,{
       method:"PUT",
       headers:{
         'Content-type':'application/json'
       },
       body: JSON.stringify(upsender)
     })
     const res2 = await fetch(`http://localhost:5000/users/${id2}`,{
      method:"PUT",
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(upreceiver)
    })
 
   const data1= await res1.json()
   const data2= await res2.json()
   console.log(data1)
    
    AddLog({id1,id2,amount})
    
     setName('')
    setName2('')
    setAmount(0)
  }
  const authChange=()=>{
     setAuth(!auth)
  }
  
    return (
      <div className="App">
         
         
               <div>
             <nav className='nav-container'>
                <a href="/" className="home" style={{float:'left'}}>My Bank</a>
                <a href="/home" className="link1 active">Home</a>
                <a href="/viewlog" className="link1">View Log</a>
                <button className="bread-nav" onClick={toggleTransfer}>Transfer Money</button>
                <button className="bread-nav" onClick={toggleUse}> View All Customers </button>
                <button  className="signup"> <a href="/signup" >SignUp</a></button>  
                <button  className="signup" onClick={authChange}> Login</button>  
                 
            </nav>
            <div className='jumbo'>
              <h4>  My Bank</h4>
            <p>Lorem coptio dolores ducimus, odit dolorum blanditiis aliquid tenetur mollitia eligendi, quidem reprehenderit ut 
              cum quae.
                 
            </p>
            </div>
        </div>
        
      <div>
        {!transferView? <Main toggleUse={toggleUse} users={users}  togview={togview}/>: 
         <form onSubmit={onSubmit}> <div className="form-control">
   <label htmlFor="name">Sender </label>
    <input type="text" className="text" name="name" 
   value={name} required onChange={(e)=>setName(e.target.value)}  placeholder="Full Name"/>
</div>   
<div className="form-control">
   <label htmlFor="name2">Receiver </label>
    <input type="text" className="text" name="name2" 
   value={name2} required onChange={(e)=>setName2(e.target.value)}  placeholder="Full Name"/>
</div>   
  
 <div className="form-control">
   <label htmlFor="amount">Amount </label> 
   <input type="number" className="text"
   value={amount}  required onChange={(e)=>setAmount(e.target.value)} name="amount"/>
</div> 
<div className="form-control-submit">
 <input type="submit" className="submit"/>
</div></form>}
        </div>
        
        <Modal isOpen={auth} >
                    <ModalHeader >Login</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="username">username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => SetUsername(input)} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) =>SetPassword(input)}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                   />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
      

        </div>
    )
  
}

export default App2;
