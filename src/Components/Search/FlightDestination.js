import React,{useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import jsondata from '../Search/Flight.json'
import {Table} from 'react-bootstrap';
import './Destination.css'
import Footer from '../Footer/Footer';


function FlightDestination() {

  // const [initialrecords,setinitialrecords]=useState(jsondata);
  const val=useParams();
  console.log("to",val);

  let desti=jsondata.Flight.find((des)=>des.flight_id === val.so);
  console.log("desti",desti);


  return (
    <div className='reg7'>
      <h1> Book your Flight Here</h1>

     

      <table className='tabledes mt-5'>
        <thead>
        <tr>
          <td>Destination-ID</td>
          <td>Destination-Name</td>
          <td>Flight-Details</td>
        </tr>

        </thead>
        <tbody>
        {desti.destination.map((visit)=>
        <tr>
          <td>
          {visit.des_id}

          </td>
          <td>
            {visit.des_name}
          </td>
          
            <td>
              <button className='btn' >
                <Link to={`/fldetails/${val.so}/${visit.des_id}`} style={{textDecoration:'none'}}>Flight Details</Link>
                </button>
            </td>
          
         
        </tr>
        )}

        </tbody>
        
      </table>
     
      <Footer/>
      
    </div>
  )
}

export default FlightDestination