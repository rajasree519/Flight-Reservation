import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faYoutube,faFacebook, faInstagram, faWhatsapp, faFacebookF} from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <div>
        <footer className='f1'>
        <div className='footerbackground'>
              
            <Row md={3}>
                 <Col >
           
				<div >
					<h5 className='write'>Quick Links</h5>
					<ul >
          <Link to="/about">About</Link>  <br/>
           <Link to="/gallery">Gallery</Link> <br/>
           <Link to="/search">Booking</Link> <br/>
           
					</ul>
         
          </div>
          
          <br></br>
          </Col>
          
          <Col>
          <h5 className='write'>Contact
          <h5><FontAwesomeIcon icon={faWhatsapp} color="green"></FontAwesomeIcon></h5>
          <h5><FontAwesomeIcon icon={faPhone} color="red"></FontAwesomeIcon>+1800678546</h5>
          
        </h5>
         </Col>
         <Col >
          <h5 className='write'> Social
               
                  <h5><FontAwesomeIcon icon={faInstagram}color="red"></FontAwesomeIcon></h5>
                  
                  <h5><FontAwesomeIcon icon={faYoutube}color="red"></FontAwesomeIcon></h5>
                  <h5><FontAwesomeIcon icon={faFacebookF} color="white"></FontAwesomeIcon></h5> <br/>
                  </h5>
           </Col>
         <Col>
            <h5 className='copy'>
                 <FontAwesomeIcon icon={faCopyright} color="white"></FontAwesomeIcon>
                 Copy right 2021 all right reserved.By Rajasree Saha</h5>
            </Col>
           
            </Row>
         
            </div>
              
                        
        </footer>
      
    </div>
  )
}

