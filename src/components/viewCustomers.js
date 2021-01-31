import React from 'react'
import { Media, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
function Users({users}) {
    return(
           <Media>
               <Media body className="ml-5 mb-3">
                     {
                         users.map((user)=>{
                            return <h3>{user.name}</h3>
                         })
                     }
               </Media>
           </Media>
            
           
    )
                     
                    }
     


export default Users
