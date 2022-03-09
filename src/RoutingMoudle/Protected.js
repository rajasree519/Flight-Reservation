import React from 'react'
import { Navigate,Outlet } from "react-router-dom";

function Protected() {
    const isAuth=window.sessionStorage.getItem("Tokenvalue");
    return isAuth?<Outlet/>:<Navigate to= "/unauth"/>;
}

export default Protected





