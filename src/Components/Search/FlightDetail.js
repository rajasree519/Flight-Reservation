import React from 'react'
import{useParams} from 'react-router-dom'
import jsondata from '../Search/Flight.json'
import {Table} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';



function FlightDetail() {
  const navigate=useNavigate();
  const click=()=>{
    navigate('/pdetails')
  }
    const val=useParams();
    console.log("val",val);

    const source1=jsondata.Flight.find((data)=>data.flight_id===val.so)
    console.log("source1",source1);
    const source2=source1.destination.find((data1)=>data1.des_id===val.ds)
    console.log("source2",source2)


    
   
  return (
    <div className='reg7'>
    <h1> Book your Flight Here</h1>


      
      <table className='tabledes mt-5'>
        <thead>
          <tr>
            <td>Flight-Id</td>
            <td>
              source
            </td>
            <td>
              destination
            </td>
            <td>FlightName</td>
            <td>
              price
            </td>
            <td>Booking Flight</td>
          </tr>
        </thead>
        <tbody>
          {source2.flight_details.map((detail)=>
          <tr>
            <td>
              {detail.flight_id}
            </td>
            <td>
              {detail.source}
            </td>
            <td>
              {detail.destination}
            </td>
            <td>
              {detail.flight_name}
            </td>
            <td>
              {detail.price}
            </td>
            <td>
            <button  className='btn'onClick={click}><Link to={'/pdetails'} style={{textDecoration:'none'}}>Click Here</Link></button>

            </td>
           
          </tr>)}
         
          
        </tbody>
      </table>
      <br></br>
     <br></br>
     <br></br>
      <Footer/>

    </div>
  )
}

export default FlightDetail