import React from 'react'

const Header=({logbook})=> {
    return (
        <div className="customers">
        <h4>All Transaction</h4> 
       
     
    {
             logbook.map((log)=>{
                 return (
                     <div  className="user-view">
                           <h3>from {log.sender.name} to {log.receiver.name}</h3>
                           <div className="desript">Rs {log.balance}</div>
                         </div>
                 )
              })
    } 
    
 </div>   
    )
}

export default Header
