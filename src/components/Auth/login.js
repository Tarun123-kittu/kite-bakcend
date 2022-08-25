import React, { useState , useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';
import Image from 'react-bootstrap/Image'
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { authSelector , clearState , login } from "../../app/features/Auth/authSlice";
import {useSelector , useDispatch} from 'react-redux';

 function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigation = useNavigate();

    const {isLoggedIn ,isFetching ,isError ,isSuccess , error } = useSelector(
        authSelector
    );

    useEffect(() => {
        if(isSuccess){
            dispatch(clearState());

            toast.success("Logged In");
            navigation("/home");

        }

        if(isError){
            let keys = Object.keys(error);
                if(keys[0] == "email"){
                    toast.error(error.email);
                }
                if(keys[0] == "error"){
                    toast.error(error.error);
                }
                dispatch(clearState());
        }
        
       

    }, [isLoggedIn ,isFetching ,isError ,isSuccess])

    let handleSubmit = async (e) => {
   
        e.preventDefault();
        try {
            if(email == ""){
                toast.error("Email field is required");
                return false;
            }
            if(password == ""){
                toast.error("Password field is required");
                return false;
            }
              dispatch(login({email , password}))
        }catch (err){
            console.log(err);
        }

    };
    

    return (
        <div className="sufee-login d-flex align-content-center flex-wrap">
        <div className="container">
            <div className="login-content">
                <div className="log_in_form">
                    <div className="login-logo">
                        <a href="index.html">
                          <Image src="assets/images/mariano.png"/>
                        </a>
                    </div>
                    <div className="login-form">
                     <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                         <Form.Control type="email"  name="email" placeholder="Email" onChange={e => {setEmail(e.target.value)  }}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control type="password"  name = "password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Button  type="submit" className="mt-5">
                            Submit
                        </Button>
                        <div className="mt-3"><Link className="forgot_password   text-center" to="/forgot">Forgot password</Link></div>
                     </Form>
                     </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Login;