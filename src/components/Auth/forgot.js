import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Image,Form,Button } from 'react-bootstrap'
import axios from "axios";
import { toast } from "react-hot-toast";


const Forgot = () => {
    const [email, setEmail] = useState("");
    const navigation = useNavigate();
    
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(email == ""){
                toast.error("Email field is required");
                return false;
            }
           
            var data = {
                "email": email,
              };
              
              var config = {
                method: 'post',
                url: `${process.env.REACT_APP_BASE_URL}v1/forgot-password`,
                headers: { 
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json'
                },
                data : data
              };
              
              await axios(config)
              .then( (response) => {
                toast.success("Password Reset link has been sent to your email");
                navigation("/");
              })
              .catch( (error) => {
                toast.error(error.response.data.message);
              });
        }catch (err){
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
                       
                        <Button  type="submit" className="">
                            Reset Password
                        </Button>
                      
                        </Form>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Forgot