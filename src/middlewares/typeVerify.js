import React from 'react'
import { Navigate } from "react-router-dom";
import { authSelector } from '../app/features/Auth/authSlice';
import {useSelector } from 'react-redux';

export const VerifyType = ({children}) => {
    const {type } = useSelector(
        authSelector
      );
      if(localStorage.getItem("type") == 1){
        return  children 
    }else{
        return <Navigate to={{ pathname : '/home' }} />
    }
}