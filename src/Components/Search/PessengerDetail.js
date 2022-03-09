import React,{useState}from 'react'
import{useFormik} from 'formik'
import './Pessenger.css'
import {Col, Container, Row } from 'react-bootstrap';
import {useNavigate, UseNavigate} from 'react-router-dom'
import Footer from '../Footer/Footer';


const validateform=(formvalue)=>{
   const errors={};
   const reg_exp_email= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const reg_exp_password=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%&]).{4,15}$/;

     if(!formvalue.fname){
        errors.fname="please enter your first name"
    }
    if(!formvalue.lname){
        errors.lname="please enter your last name"
    }
   
if(!formvalue.email){
        errors.email="please enter your email"
    }else if(!reg_exp_email.test(formvalue.email)){
        errors.email="invalid email"
    }
    if(!formvalue.from){
        errors.from="Mandatory field"
    }
    if(!formvalue.to){
        errors.to="Mandatory field"
    }
    
    console.log("error",errors);
    return errors;

}

function PessengerDetail() {


 


    const navigate =useNavigate();

    const payment=()=>{
        alert("Thank you for fill the details")
        
        navigate('/payment')

    }
     
    const formik=useFormik({
        initialValues:{
            "from":'',
            "fname":'',
            "email":'',
            "to":'',
            "lname":'',
            "PreferedAirLine":'',
            "setting":''
           

            },
        validate:validateform,
        onSubmit:(values)=>
        {
            console.log("received",values);
        }
    
  }
        
    )

  return (
    <div>

    <div className='reg3 pt-5'>
        <div >
            
      <div className='regform'><h2>Booking Details</h2></div> 
            <div className='main'>

         <form onSubmit={formik.handleSubmit} className='form-group'>
            <Row>
                <Col > 
                <Container>
                <label className='userlabel' >From</label>
            <input type="text" name='from' placeholder='From'
            value={formik.values.from}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}></input>
            {formik.touched.from && formik.errors.from ?
            (<span style={{color:'red'}}>{formik.errors.from}</span>):null}<br></br><br></br>
            
           
               <label className='userlabel'>FirstName</label>
            <input type="text" name='fname' placeholder='rajasree'
            value={formik.values.fname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}></input>
            {formik.touched.fname && formik.errors.fname ?
            (<span style={{color:'red'}}>{formik.errors.fname}</span>):null}<br></br><br></br>
            
            

            
            
            
            
 <label className='userlabel'>Email</label>
            <input type="email" name='email' placeholder='abc@abc.com'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}></input>
            {formik.touched.email && formik.errors.email ?
            (<span style={{color:'red'}}>{formik.errors.email}</span>):null}<br></br><br></br>
             </Container>
                </Col>
                <Col>
                <Container>
                <label className='userlabel'>To</label>
            <input type="text" name='to' placeholder='Where to?'
            value={formik.values.to}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}></input>
            {formik.touched.to && formik.errors.to ?
            (<span style={{color:'red'}}>{formik.errors.to}</span>):null}<br></br><br></br>

                
<label className='userlabel'>LastName</label>
            <input type="text" name='lname' placeholder='saha'
            value={formik.values.lname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}></input>
            {formik.touched.lname && formik.errors.lname ?
            (<span style={{color:'red'}}>{formik.errors.lname}</span>):null}<br></br><br></br>
                
                <select name='PreferedAirLine' className='userlabel1'>
                    <option >ChooseAirLine</option>
                    <option value='indigo' >IndiGo</option>
                    <option value='AirAsia'>AirAsia</option>
                    <option  value='AirIndia'>AirIndia</option>
                    <option  value='SpiceJet'>SpiceJet</option>
                    <option  value='Vistara'>VisTara</option>
                    </select>
                    <br></br><br></br>

                    <select name='setting' className='userlabel1'>
                    <option >Prefered Seating</option>
                    <option value='Economy' >Economy class</option>
                    <option value='Business'>Business Class</option>
                    <option  value='First'>FirstClass</option>
                    
                    </select>
                
                </Container>
                </Col>
            </Row>
           
            
            
            <button type='submit'disabled={!(formik.isValid && formik.dirty)} onClick={payment}>submit</button>
        </form>
        </div>
        </div>

        <br/>  <br/> <br/> <br/> <br/> <br/>
        <Footer/>

        </div>

    </div>
  )
}

export default PessengerDetail


