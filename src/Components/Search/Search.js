import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import jsondata from '../Search/Flight.json'
// import {Card,Col,Container,Row} from 'react-bootstrap'


import {Table} from 'react-bootstrap';
import './Search.css'
import Footer from '../Footer/Footer';



function Search() {
const [initialrecords,setinitialrecords]=useState(jsondata);
  return (
    <div className='reg7'>
    <h1> Book your Flight Here</h1>
     <table className='tabledes mt-5'>
  <thead >
    <tr>
      <th>Flight-Id</th>
      <th >Source</th>
      <th>Destination-Flight</th>
      
      
    </tr>
  </thead>

  
  <tbody>
  {initialrecords.Flight.map((initialrecords)=>
  <tr>
    <td>{initialrecords.flight_id}</td>
    <td>{initialrecords.source}</td>
    
      <td>

      
    <button className='btn' >
        <Link to={`/fldestination/${initialrecords.flight_id}`} style={{textDecoration:'none'}}>click here</Link>
        </button>
        </td>
    </tr>
    
    
  )}
    
  </tbody>
 
  </table>
  <br></br>
  <br></br>
<br></br>
<br></br>
  <Footer/>
</div>
 
    
    
  )
}

export default Search