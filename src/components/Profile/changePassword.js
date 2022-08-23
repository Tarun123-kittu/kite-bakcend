import React , {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Loader from '../Loader';
import { toast } from "react-hot-toast";

const ChangePassword = () => {
  const [loadershown , setloadershown] =useState(false);
  const [password, setPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [new_password_confirmation, setNewPasswordConfirmation] = useState("");

  let handleSubmit = async (e) => {

    e.preventDefault();
    try {
      if(password.trim() == ""){
        toast.error("Password field is required / Spaces are not allowed");
        return false;
      }

      if(new_password.trim() == ""){
        toast.error("New Password field is required / Spaces are not allowed");
        return false;
      }

      if(new_password_confirmation.trim() == ""){
        toast.error("Confirm Password field is required / Spaces are not allowed");
        return false;
      }    
        
        var data = {
            "password" : password,
            "new_password" : new_password,
            "new_password_confirmation": new_password_confirmation,
          };
          
          setloadershown(true)
          await axios.post(`${process.env.REACT_APP_BASE_URL}v1/update-password`,data,{ headers: { 
           'Content-Type': 'application/json',
           'Authorization': 'Bearer '+localStorage.getItem('token')
         }}).then( (response) => {
            setloadershown(false)
            toast.success(response.data.message);
          })
          .catch( (error) => {
            setloadershown(false)
            let keys = Object.keys(error.response.data);
            if(keys.length == 2 && keys[1] == "errors"){
              toast.error(error.response.data.errors[0]);
            }
            if(keys.length == 1 && keys[0] == "message"){
              toast.error(error.response.data.message);
            }
            
          });
    }catch (err){
        console.log(err);
    }

  }; 

  return (
    <div className='content_outer'>
        <div className='content'>
                <div className='card_outer'>
                    <h2>Change Password</h2>
                    <div className='form_inner'>
    <Form onSubmit={handleSubmit}>
    <Row>
      <Col sm={12}>   
       <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Current Password</Form.Label>
      <Form.Control type="password" onChange={(e) => {setPassword(e.target.value) }} placeholder="Enter Current Password" />
   
    </Form.Group>
    </Col>
      <Col sm={12}>   
       <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>New Password</Form.Label>
      <Form.Control type="password" onChange={(e) => {setNewPassword(e.target.value) }} placeholder="Enter New Password" />
   
    </Form.Group>
    </Col>
      <Col sm={12}>   
       <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Confirm New Password </Form.Label>
      <Form.Control type="password" onChange={(e) => {setNewPasswordConfirmation(e.target.value) }} placeholder="Confirm Password" />
   
    </Form.Group>
    </Col>

    </Row>    
    <Button variant="outline-success" type="submit">
      Update
    </Button>
  </Form>
  <Loader showLoader={loadershown} />
    </div>
                </div>
        </div>
    </div>
  )
}

export default ChangePassword