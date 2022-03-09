import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Successful.css'

function Successful() {
  const navigate=useNavigate();
  const logout=()=>{
    window.sessionStorage.clear();
    alert("Go to home page")
    navigate('/home')
  }

  return (
    <div className='reg4 pt-5'> 
       <h1>Thank You! For visiting our website</h1>
       <button onClick={logout}>LogOut</button>
        </div>
  )
}

export default Successful