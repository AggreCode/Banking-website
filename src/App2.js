import React, { Component } from "react";
import Main from './components/mainComponent'
import {useState, useEffect} from 'react'
import Header from './components/header.js'

import Head from './components/Head.js'
  import "./App.css";
import{Label, Input, Form,FormGroup,ModalBody,ModalHeader,Modal,Button} from 'reactstrap'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'




const App2=()=> {
   const[mopen,setMopen]= useState(false)
   const[username, setUsername]=useState('')
   const[password, setPassword]=useState('')
   
   const toggleModal=()=>{
     setMopen(!mopen)
   }
   const handleLogin=()=>{
     console.log("login successsful")
   }
  
    return (
      <div className="App">
         
       <Head setMopen={setMopen}/>

        
           <Modal isOpen={mopen} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => setUsername(input)} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => setPassword(input)}  />
                            </FormGroup>
                           
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

        </div>
    )
  
}

export default App2;
