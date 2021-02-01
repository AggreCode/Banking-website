import React from 'react'

function Users({users}) {
    
    return(
           <div className="customers">
           <h4>All Customers</h4> 
           {
        
        users.map((user)=>{
            return (
                <div className="user-view">
                      <h3>{user.name}</h3>
                      <div className="desript">Rs {user.balance}</div>
                    </div>
            )
         })
       
    }</div>
          
    )
                     
                    }
     


export default Users
