
import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './../Components/Home/Home.css'
import {useNavigate} from 'react-router-dom'

export default function Header() {
  const navigate=useNavigate();

  const logout=()=>{
    window.sessionStorage.clear();
    alert("Go to home page")
    navigate('/home')
  }
  return (
    <div >
        <Navbar className='Navbar' variant="dark">
    
    <Navbar.Brand href="#home">AirLine Ticket Booking</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to ="/home" >Home</Nav.Link>
      <Nav.Link as={Link} to ="/about" >About</Nav.Link>
     
      <Nav.Link as={Link} to ="/gallery" >Gallery</Nav.Link>
      
      <Nav.Link as={Link} to="/login" >Login</Nav.Link>

      <Nav.Link as={Link} to="/pdetails">PessengerDetail</Nav.Link>
      <Nav.Link as={Link} to="/payment">payment</Nav.Link> 

      <Nav.Link as={Link} to="/search">Flight Booking</Nav.Link> 

      <button onClick={logout}>LogOut</button>

   

  
      
      
    </Nav>
    
  </Navbar>
    </div>
  )
}
