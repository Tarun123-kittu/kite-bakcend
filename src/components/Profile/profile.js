import React, {useEffect , useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Loader from '../Loader';
import { toast } from "react-hot-toast";

const Profile = () => {

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [loadershown , setloadershown] =useState(false);

  useEffect(() => {
    axios.get(
      `${process.env.REACT_APP_BASE_URL}v1/user-profile`,{headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('token')
      }}
    ).then((response) => {
        setFirstName(response.data.first_name);
        setLastName(response.data.last_name);
        setEmail(response.data.email);
        setCompany(response.data.company);
    });
  }, [])

  let handleSubmit = async (e) => {

    e.preventDefault();
    try {
      if(first_name == ""){
        toast.error("First Name field is required");
        return false;
      }

      if(last_name == ""){
        toast.error("Last Name field is required");
        return false;
      }

        if(userEmail == ""){
            toast.error("Email field is required");
            return false;
        }
        
        if(company == ""){
          toast.error("Company field is required");
          return false;
        }
        
        var data = {
            "first_name" : first_name,
            "last_name" : last_name,
            "email": userEmail,
            "company": company,
            
          };
          
          setloadershown(true)
          await axios.post(`${process.env.REACT_APP_BASE_URL}v1/update-profile`,data,{ headers: { 
           'Content-Type': 'application/json',
           'Authorization': 'Bearer '+localStorage.getItem('token')
         }}).then( (response) => {
            setloadershown(false)
            toast.success(response.data.message);
          })
          .catch( (error) => {
            setloadershown(false)
            let keys = Object.keys(error.response.data);
            if(keys[0] == "email"){
                toast.error(error.response.data.email);
            }
            if(keys[0] == "errors"){
                toast.error(error.response.data.errors);
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
                    <h2>Profile</h2>
                    <div className='form_inner'>
    <Form onSubmit={handleSubmit}>
    <Row>
      <Col sm={6}>   
       <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" name='first_name' onChange={(e) => {setFirstName(e.target.value) }} value={first_name} placeholder="Enter First Name" />
   
    </Form.Group>
    </Col>
      <Col sm={6}>   
       <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" onChange={(e) => {setLastName(e.target.value) }} value={last_name}  placeholder="Enter Last Name" />
   
    </Form.Group>
    </Col>
      <Col sm={6}>   
       <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email </Form.Label>
      <Form.Control type="email" onChange={(e) => {setEmail(e.target.value) }} value={userEmail} placeholder="Enter email" />
   
    </Form.Group>
    </Col>
      <Col sm={6}>   
       <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Company</Form.Label>
      <Form.Control type="text" onChange={(e) => {setCompany(e.target.value) }} value={company} placeholder="Company" />
   
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

export default Profile