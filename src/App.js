import React, { Component } from "react";
import App2 from './App2.js'
import Header from './components/header.js'
import LogInComponenet from './components/LogInComponenet.js'
import Users from './components/viewCustomers.js'
import TransferPage from './components/TransferPage.js'
import SignUp from './components/signUpComponent.js'
import {useState, useEffect} from 'react'
import { BrowserRouter, Link, Switch, Route, Router, Redirect } from 'react-router-dom'

import { TransitionGroup, CSSTransition } from 'react-transition-group';



const App=()=> {
   
    const [users,setUser]= useState([])
  const [logbook,setLogbook]= useState(
    []
  )
  const [toglog,setTogLog]=useState(true)
useEffect(()=>{
  fetch('http://localhost:5000/users')
  .then((res)=> res.json())
  .then((data)=> setUser(data))
  .catch((err)=>console.log({msg:err}))
  fetch('http://localhost:5000/logs')
  .then((res)=> res.json())
  .then((data)=> {setLogbook(data)
      console.log(data)})
  .catch((err)=>console.log({msg:err}))
},[])

 
  
  
    return (
   
       <BrowserRouter>
       <Switch>

       <Route exact path='/home' component={()=><App2 users={users} setUser={setUser} setLogbook={setLogbook} logbook={logbook}/>}/>
       <Route exact path='/viewlog' component={()=><Header logbook={logbook} />}/>
       <Route exact path='/signup' component={()=><SignUp setUser={setUser} users={users} />}/>
       <Route exact path='/login' component={()=><LogInComponenet />}/>
       <Route exact path='/viewcustomers' component={()=><Users users={users} />}/>
       <Route exact path='/pay' component={()=><TransferPage users={users}logbook={logbook} setLogbook= {setLogbook} />}/>

       <Redirect to= '/home'/>
       </Switch>
        </BrowserRouter>
        
       
    )
  
}

export default App;
