import React, { Component } from "react";

import Header from './header.js'
import LogInComponenet from './LogInComponenet.js'
import Users from './viewCustomers.js'
import Head from './Head.js'
import Logout from './logout.js'
import TransferPage from './TransferPage.js'
import Navigationheader from './navigation-header.js'
import SignUp from './signUpComponent.js'
import {useState, useEffect} from 'react'
import { BrowserRouter, Link, Switch, Route, Router, Redirect,withRouter } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import {  loginUser } from '../redux/ActionCreator';

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
// const mapStateToProps = state => {
//     return {
    
//       auth: state.auth
//     }
// }
 
// const mapDispatchToProps = (dispatch) => ({
//     loginUser: (creds) => dispatch(loginUser(creds)),
//    });
  

const Main=()=> {
  const history = useHistory();
    const [users,setUser]= useState([])
  const [logbook,setLogbook]= useState(
    []
  )
  const [auth,setAuth]= useState(false)
  const [toglog,setTogLog]=useState(true)
 
  
useEffect(()=>{
  const token = localStorage.getItem('token');
 
 console.log(localStorage.getItem('auth2'))
  console.log(token)
  fetch('http://localhost:5000/users',{

  headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
  }
})
  .then((res)=> res.json())
  .then((data)=> setUser(data))
  .catch((err)=>console.log({msg:err}))
  fetch('http://localhost:5000/logs',{

    headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
    }
  })
  .then((res)=> res.json())
  .then((data)=> {setLogbook(data)
      console.log(data)})
  .catch((err)=>console.log({msg:err}))
  console.log(logbook)
},[])

 return (
      <div>
  <Navigationheader auth={auth} setAuth={setAuth}   history={history}/>
       <BrowserRouter>
       <Switch>

       <Route exact path='/home' component={()=><Head  />}/>
       <Route exact path='/viewlog' component={()=><Header logbook={logbook} history={history} />}/>
       <Route exact path='/signup' component={()=><SignUp setUser={setUser} users={users} history={history} />}/>
       <Route exact path='/login' component={()=><LogInComponenet users={users} setAuth ={setAuth} />}/>
       <Route exact path='/viewcustomers' component={()=><Users users={users} history={history}/>}/>
       <Route exact path='/pay' component={()=><TransferPage users={users}logbook={logbook} history={history} setLogbook= {setLogbook} />}/>
       <Route exact path='/logout' component={()=><Logout />}/>

       <Redirect to= '/home'/>
       </Switch>
        </BrowserRouter>
      </div>
    
        
       
    )
  
}

export default Main
