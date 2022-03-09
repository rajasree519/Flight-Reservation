import React from 'react'
import {useNavigate} from 'react-router-dom'
import Footer from '../Footer/Footer';
import './Default.css'

function Default() {
    const Navigate=useNavigate();
    const click=()=>{
        Navigate('/home')
    }
  return (
   
        <div >
            <div className='de'>
                
         
            <button className='details' onClick={click}>Let's Go Flying</button>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/>
            <Footer/>
            </div>


        </div>
        
    
  )
}

export default Default