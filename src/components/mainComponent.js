import React from 'react'

import { Media, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Users from './viewCustomers'
import {Link} from 'react-router-dom'
const Home =()=>{
    return(
     <div className="aim">
     <h3>Our Aim</h3>
     <hr/>
     <p>i similique nesciunt, fugiat dolores ab facilis voluptates autem labore id quasi, eligendi quia?

     </p>
   </div>
    )
 }

 
function  Main({toggleUse,togview, users}) {
    
 

    return (
        <div className="main">
         
          
                <div>
          
               {!togview?null :<Users users={users}/>}
                
                    </div>

             
        </div>
    )
}

export default  Main
