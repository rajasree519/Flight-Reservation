import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import Footer from '../../Footer/Footer'

const validateform=(formvalue)=>{
    const errors={};
    const reg_exp_email= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const reg_exp_password=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%&]).{4,15}$/;

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


function Login() {
    const navigate=useNavigate();
   const formik=useFormik({
        initialValues:{
           
            email:'', 
              password:''
        },
        validate:validateform,
        onSubmit:(values)=>{
            console.log("received value",values);

            axios.post('https://node-project-storage.herokuapp.com/postLoginData',values)
            .then((res)=>{
                console.log("axios Respones",res);
                alert("log in successful");
                
                window.sessionStorage.setItem("Tokenvalue",res.data.token);
                navigate('/pdetails')
            })
            .catch((err)=>{
                console.log("axios error",err);
            })
            

        }
    })
  return (
      
    <div>
        <div className='reg1 pt-5'>
        <div>
        <div className='regform'><h2>LogIn Form</h2> </div>
        <div  className='main'>
        
        <form onSubmit={formik.handleSubmit}>
            
           
            <label className='userlabel'>Email</label>
            <input type="email" name='email' placeholder='abc@gmail.com'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
             {formik.touched.email && formik.errors.email ?
            (<span style={{color:'red'}}>{formik.errors.email}</span>):null}
            <br></br><br></br>
            <label className='userlabel' >Password</label>
            <input type="password" name='password' placeholder='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
             {formik.touched.password && formik.errors.password ?
            (<span style={{color:'red'}}>{formik.errors.password}</span>):null}
            <br></br><br></br>
            
            <button  className='userlabel' type='submit'disabled={!(formik.isValid && formik.dirty)}>Login</button>
            
                <button><Link to={"/reg"}>New user?SignIn</Link></button>
        </form>
        </div>
        </div>
        </div>

        <Footer/>
    </div>
  )
}


export default Login