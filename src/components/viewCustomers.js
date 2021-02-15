import React from 'react'

function Users({users}) {
    
    return(
           <div className="customers">
           <h4>All Customers</h4> 
         <table>
             <tr className="header">
             <th>Customer Name</th>
             <th>Balance(in Rupees)</th>
             </tr>
           
             
         {
                users.map((user,id)=>{
                    return (
                    <tr className="user-view" key={id}>
                              <td>{user.name}</td>
                              <td> {user.balance}</td>
                            </tr>
                    )
                 })
       } 
             </table>  
        
     
       
    </div>
          
    )
                     
                    }
     


export default Users
