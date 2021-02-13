import React from 'react'

function Users({users}) {
    
    return(
           <div className="customers">
           <h4>All Customers</h4> 
           
        
       {
                users.map((user,id)=>{
                    return (
                        <div className="user-view" key={id}>
                              <h3>{user.name}</h3>
                              <div className="desript">Rs {user.balance}</div>
                            </div>
                    )
                 })
       } 
       
    </div>
          
    )
                     
                    }
     


export default Users
