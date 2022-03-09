import React from 'react'
import {useNavigate} from 'react-router-dom'

function UnAuth() {
    const navigate=useNavigate();
    const click=()=>{
        navigate("/login")
    }
  return (


    <div><h1>
        you are unauthorized person..
        please first Log in  after that
        you  Successfully booked the ticket.


    </h1>

    <button onClick={click}>click here for login</button>

    </div>
  )
}

export default UnAuth