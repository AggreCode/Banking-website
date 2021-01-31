import React from 'react'
import {useState, useEffect} from 'react'
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
 
function  Main() {
   const [togview,setView]= useState(false)
   const [users,setUser]= useState([{
       name: "Biswa",
       email: "biswajittlh@gmail.com",
       balance: 2000

   },
   {
    name: "Biswa1.0",
    email: "biswajittlh@gmail.com",
    balance: 20000

},
{
    name: "Biswa2.0",
    email: "biswajittlh@gmail.com",
    balance: 200000

}
])
const toggleUse =()=>{
    setView(true)
}
    return (
        <div>
         
            
            <div className='bread'>
            <a className="bread-item active">Home</a>
             <button className="bread-item" onClick={toggleUse}> View All Customers </button>
            </div>
                <div>
                  {!togview? <Home /> :<Users users={users}/>} 
             
                </div>
             
        </div>
    )
}

export default  Main
