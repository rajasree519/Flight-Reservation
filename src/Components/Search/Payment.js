import React,{useState} from 'react'
import {useFormik} from 'formik'
import './Payment.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'


const validateform=(formValue)=>{
     const errors={};

     if(!formValue.username) {
         errors.username="please enter your name"
         
     }
     if(!formValue.cardnumber){
         errors.cardnumber="please enter card number"
     } else if(formValue.cardnumber.length<12){
         errors.cardnumber="enter 12 digit number"
     }
    
    if(!formValue.month){
        errors.month="enter month"
    }
    // if(!formValue.year){
    //     errors.year="choose yaer"
    // }

    if(!formValue.cvv){
        errors.cvv="please enter cvv number"
    } else if(formValue.cvv.length<3){
        errors.cvv="enter 3 digit number"
    }
    else if(formValue.cvv.length>3){
       errors.cvv="enter 3 digit number"
   }
   
   console.log("error",errors);
   return errors;

}

function Payment() {
    
// const [num1,setnumber]=useState();
// const [total,settotal]=useState();
// const total_price=()=>{
//     settotal (num1*price)
// }
// const price= 500;






    const navigate=useNavigate();
    const Click=()=>{
        alert("payment successful")
        navigate('/success')
    }
    const formik=useFormik({
        initialValues:{
            "username":'',
            "cardnumber":'',
            "month":'',
            "year":'',
            "cvv":'',
            "number":''

        },

        validate:validateform,
        onSubmit:(values)=>{
            console.log("val",values);
        }
    });
  return (
    <div >
        <div className='payment'>
        <h3>Payment information</h3>
        

        <form onSubmit={formik.handleSubmit}>
            <h3>Accepted Card</h3>
            <img src='https://pluspng.com/img-png/credit-card-png-hd-credit-card-transparent-png-image-1102.png' width="100"></img>
           <img src='https://all-lb.visa.com/dam/VCOM/regional/na/us/pay-with-visa/images/stimulus-payment-card-envelope-640x640.jpg' width="100"></img>
           <img src='https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2016/07/getting-paypal-credit-card.jpg'width="100"></img>
           <br></br><br></br>

           {/* <input type='number' value={num1} name='number' onChange={event=>setnumber(+event.target.value)}/> */}
            
            <input type="text" name='username' placeholder=' Card Holder Name'
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}>
                {formik.touched.username && formik.errors.username ?
            (<span style={{color:'red'}}>{formik.errors.title}</span>):null}
            </input>
            <br></br><br></br>
                    
            <input type="text" name='cardnumber' placeholder='Card Number' maxLength={12}
            value={formik.values.cardnumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}></input>
                {formik.touched.cardnumber && formik.errors.cardnumber ?
            (<span style={{color:'red'}}>{formik.errors.cardnumber}</span>):null}
                <br></br><br></br>
               
             <input type="text" name='month' placeholder='exp month'
             value={formik.values.month}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}></input>
                 {formik.touched.month && formik.errors.month ?
             (<span style={{color:'red'}}>{formik.errors.month}</span>):null}

<br></br><br></br>
                
                <select name='year'>
                     <option>Exp year</option>
                     <option value={2022}>2022</option>
                     <option  value='2023' >2023</option>
                     <option  value='2024'>2024</option>
                     <option  value='2025'>2025</option>
                     <option  value='2026'>2026</option>
                     <option  value='2027'>2027</option>
                
            
             </select>
                 {formik.touched.year && formik.errors.year ?
             (<span style={{color:'red'}}>{formik.errors.year}</span>):null}
             <br></br><br></br>
            
            <input type="text" name='cvv' placeholder='cvv'
            value={formik.values.cvv}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}></input>
            {formik.touched.cvv && formik.errors.cvv?
             (<span style={{color:'red'}}>{formik.errors.cvv}</span>):null}
             <br></br><br></br>

             {/* <button onClick={total_price}>total={total}</button> */}

            <button  type='submit' disabled={!(formik.isValid && formik.dirty)} onClick={Click}>Confirm your payment</button>
        </form>


        <br/> <br/><br/><br/><br/><br/>

        <Footer/>
       
        
        </div>
        
        </div>
  )
}

export default Payment