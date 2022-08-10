import React from "react";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const VerifyAuth = ({children}) => {
    
    if(localStorage.getItem("token") != null && localStorage.getItem("token") != ""){
        return  (jwtDecode(localStorage.getItem("token")).exp < Date.now() / 1000) ? <Navigate to={{ pathname : '/' }} /> :  children 
    }else{
        return <Navigate to={{ pathname : '/' }} />
    }
}