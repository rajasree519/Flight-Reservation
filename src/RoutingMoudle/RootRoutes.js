import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import About from '../Components/About/About'

import Login from '../Components/Authentication/Login/Login'
import Reg from '../Components/Authentication/Register/Reg'
import Default from '../Components/Default/Default'
import Gallery from '../Components/Gallery/Gallery'
import Home from '../Components/Home/Home'
import Pnf from '../Components/PageNotFound/Pnf'
import FlightDestination from '../Components/Search/FlightDestination'
import FlightDetail from '../Components/Search/FlightDetail'
import Payment from '../Components/Search/Payment'
import PessengerDetail from '../Components/Search/PessengerDetail'
import Search from '../Components/Search/Search'

import Successful from '../Components/Search/Successful'
import Header from '../Layout/Header'
import Protected from './Protected'
import UnAuth from './UnAuth'



export const RootRoutes=()=> {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route element={<Protected/>}>
          <Route path="pdetails" element={<PessengerDetail/>}/>
          <Route path="payment" element={<Payment/>}/>
        </Route>
            <Route path="reg" element={<Reg/>}/>
            <Route path="login" element={<Login/>}/>

            <Route path="home" element={<Home/>}/>
            <Route path="gallery" element={<Gallery/>}/>
            <Route path="about" element={<About/>}/>
            
            <Route path="search" element={<Search/>}/>
            <Route path="fldestination/:so" element={<FlightDestination/>}/>
            <Route path="fldetails/:so/:ds" element={<FlightDetail/>}/>

            
           
            <Route path="payment" element={<Payment/>}/>

            <Route path="success" element={<Successful/>}/>

            
            <Route path="unauth" element={<UnAuth/>}/>
            <Route path="payment" element={<Payment/>}/>
       
           
            <Route path="/" element={<Default/>}/>

            <Route path="*" element={<Pnf/>}/>
         



            
            

           
        </Routes>
       
    </Router>
  )
}

export default RootRoutes