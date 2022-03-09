import React from 'react'
import {Carousel} from 'react-bootstrap'
import '../Home/Home.css'
import {Navigate, useNavigate} from 'react-router-dom'
import Footer from '../Footer/Footer';

function Home() {
	 const Navigate=useNavigate();
	 const click=()=>{
		 Navigate('/flight')

	 }
	 const click1=()=>{
		Navigate('/search')

	}
  return (
    <div>
		<div className='image'>

			<h1 className='text'>welcome to Online Domestic Flight Booking System</h1>
		<button  className='Flight' onClick={click1}>Book A fLIGHT</button>
			

			<br/>	<br/>	<br/>	<br/>
				<br/>	<br/>	<br/>	<br/>
					<br/>	<br/>
			
		<Footer/>
		
		
		</div>
    
	
	</div>
  )
}

export default Home