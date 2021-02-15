import React from 'react'
import ReactModalLogin from "react-modal-login";
import {useState, useEffect} from 'react'
function LogInComponenet() {
    const[showModal,setShowModal]= useState(true)
    const [loading,setLoading]= useState(false)
    const [error, setError]= useState(null)
    const openModal=()=>{
        setShowModal(true)
    }
    const closeModal=()=>{
        setShowModal(false)
        setError(null)
    }
   const onLoginSuccess=(method, response) =>{
        console.log("logged successfully with " + method);
      }
    const  onLoginFail=(method, response)=> {
        console.log("logging failed with " + method);
        setError(response)
      }
  const startLoading=()=>{
      setLoading(true)

  }
  const finishLoading=()=>{
    setLoading(false)
    
}

    return (
        <div>
           
 
 <ReactModalLogin
   visible={showModal}
   onCloseModal={closeModal}
   loading={loading}
   error={error}
  
   loginError={{
     label: "Couldn't sign in, please try again."
   }}
   registerError={{
     label: "Couldn't sign up, please try again."
   }}
   startLoading={startLoading}
   finishLoading={finishLoading}
  
 />
        </div>
    )
}

export default LogInComponenet
