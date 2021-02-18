import React from 'react'
import {useState, useEffect} from 'react'
const axios = require('axios');

const TransferPage=({users,setLogbook, logbook,  history})=> {
    const [togview,setView]= useState(false)
    const [name,setName]=useState('')
    const [name2,setName2]=useState('')
    const [amount,setAmount]=useState(0)
    const [auth,setAuth] =useState(false)
     const fetchUser= async (id)=>{
      const token = localStorage.getItem('token');
     const res= await fetch (`http://localhost:5000/users/${id}`, {
    
      headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
      }
  })
     const data =  res.json();
     return data
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
  

 
 const token = localStorage.getItem('token');

  fetch(`http://localhost:5000/logs`, {
     method: 'POST',
     body: JSON.stringify(log),
     headers: {
         'Content-Type': 'application/json',
         'x-access-token': token
     }
 })
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
   const token = localStorage.getItem('token');
    const upreceiver ={...receiver,balance: receiver.balance + parseInt(amount)}
  
    const upsender ={...sender,balance: sender.balance - parseInt(amount)}
    console.log(upsender)
    console.log(upreceiver)
    const res1 = await fetch(`http://localhost:5000/users/${id1}`,{
      method:"PUT",
      headers:{
        'Content-type':'application/json',
        'x-access-token': token
      },
      body: JSON.stringify(upsender)
    })
    const res2 = await fetch(`http://localhost:5000/users/${id2}`,{
     method:"PUT",
     headers:{
       'Content-type':'application/json',
       'x-access-token': token
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
   history.push("/home");
 }
 const authChange=()=>{
    setAuth(!auth)
 }
    return (
       
     
         <form id="payform" onSubmit={onSubmit}> <div className="form-control">
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
</div></form>
   
      
    )
}

export default TransferPage
