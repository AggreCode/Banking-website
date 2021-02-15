import React from 'react'

const Header=({logbook})=> {
    return (
        <div className="customers">
         <h2>All Transactions</h2> 
         <table>
             <tr className="header">
             <th>Sender</th>
             <th>Receiver</th>
             <th>Amount(in Rupees)</th>
             </tr>
           
             
         {
                logbook.map((log,id)=>{
                    return (
                    <tr className="user-view" key={id}>
                              <td>{log.sender.name}</td>
                              <td>{log.receiver.name}</td>
                              <td> {log.balance}</td>
                            </tr>
                    )
                 })
       } 
             </table>  
        
    
 </div>   
    )
}

export default Header
