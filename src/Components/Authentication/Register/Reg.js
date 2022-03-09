import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './Reg.css'
import Footer from '../../Footer/Footer'

const validateform=(formvalue)=>{
    const errors={};
    const reg_exp_email= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const reg_exp_password=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%&]).{4,15}$/;

    if(!formvalue.username){
        errors.firstname="please enter your full name"
    }
 
    if(!formvalue.email){
        errors.email="please enter your email"
    }else if(!reg_exp_email.test(formvalue.email)){
        errors.email="invalid email"
    }
    if(!formvalue.password){
        errors.password="please enter your password"
    }else if(!reg_exp_password.test(formvalue.password)){
        errors.password="incorrect password"
    }
    console.log("error",errors);
    return errors;

}

const Reg =()=> {
    
    const val=useParams();
    console.log("val",val);
    const navigate=useNavigate();

    const formik=useFormik({
        initialValues:{
            username:'',
            
            email:'',
            password:''
        },
        validate:validateform,
        onSubmit:(values)=>{
            console.log("received value",values);

            axios.post(' https://node-project-storage.herokuapp.com/postUserData',values)
            .then((res)=>{
                console.log("axios Respones",res);
                alert("Thank you For Registration")
                navigate('/login');
            })
            .catch((err)=>{
                console.log("axios error",err);
            })
            

        }
    })
  return (
    
    <div>

<div className='reg pt-5'>
    <div >
        

        
       <div className='regform'><h2>Registration Form</h2></div> 
        <div className='main'>
        <form onSubmit={formik.handleSubmit}>
            <div id='name'>
            <label className='userlabel'>User Name</label>
            <input   className='username' type="text" name='username' placeholder='John shart'
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.username && formik.errors.username? 
            (<span style={{color:'red'}}>{formik.errors.username}</span> ): null}
            <br></br><br></br>
           
           
            <label className='userlabel'>Email</label>
            <input type="email" className='email' name='email' placeholder='abc@gmail.com'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
             {formik.touched.email && formik.errors.email ?
            (<span style={{color:'red'}}>{formik.errors.email}</span>):null}
            <br></br><br></br>
            <label className='userlabel'>Password</label>
            <input type="password"  className='password' name='password' placeholder='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
             {formik.touched.password && formik.errors.password ?
            (<span style={{color:'red'}}>{formik.errors.password}</span>):null}
            <br></br><br></br>
            <button type='submit'disabled={!(formik.isValid && formik.dirty)}>Register</button>
                <br></br>
                <br></br>
                        <button><Link to={"/login"}>AlreadySignIn?Login</Link></button>
        
                        </div>         
        </form>
        </div>

    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Reg