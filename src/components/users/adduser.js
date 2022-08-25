import React, { useState , useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { MultiSelect } from 'react-multi-select-component';
import { toast } from "react-hot-toast";
import Loader from '../Loader';

const Adduser = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState([]);
  const [selectedids, setSelectedids] = useState([]);
  const [deals , setDeals] =useState([]);
  const [loadershown , setloadershown] =useState(false);

    useEffect(() => {
       axios.get(
        `${process.env.REACT_APP_BASE_URL}v1/all-deals`,{headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+localStorage.getItem('token')
        }}
      ).then((response) => {
       let dataids= response.data.data.map((i)=>({...i, label: ("" +  i.deal_id).toString(), value: ("" +  i.deal_id).toString() }))
         setDeals(dataids);
      });
    }, []);

   

    const options = deals.map((i)=>{
      i.value=i.deal_id;
       i.label=i.deal_id
      }
       );

       let handleSubmit = async (e) => {
   
        e.preventDefault();
        try {
          if(first_name.trim() == ""){
            toast.error("First Name field is required");
            return false;
          }

          if(last_name.trim() == ""){
            toast.error("Last Name field is required");
            return false;
          }
            if(email.trim() == ""){
                toast.error("Email field is required");
                return false;
            }
            if(company.trim() == ""){
              toast.error("Company field is required");
              return false;
            }
            if(type.trim() == ""){
              toast.error("Type field is required");
              return false;
            }
            if(password.trim() == ""){
                toast.error("Password field is required / Spaces are not allowed");
                return false;
            }
            if(selectedids.length === 0){
              toast.error("No Deals selected for user");
              return false;
            }
           
            
            
            var data = {
                "first_name" : first_name,
                "last_name" : last_name,
                "email": email,
                "company": company,
                "type": type,
                "password": password,
                "deal" : selectedids
              };
              
              var config = {
                method: 'post',
                url: `${process.env.REACT_APP_BASE_URL}v1/store-user`,
                headers: { 
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer '+localStorage.getItem('token')
                },
                data : data
              };
              setloadershown(true)
              await axios(config)
              .then( (response) => {
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

    const selectValue = async(values) => {
      let dealVals = [];
      values.map((item , i)=>{
        dealVals.push(item.value);
      })
      setSelected(values);
      setSelectedids(dealVals)

    }


  return (
    <div className="content_outer">
    <div className="content">
    <div className="App">

    <div className='card_outer'>
    <h2>Add User
    </h2>
    <div className='form_inner'>
    <Form onSubmit={handleSubmit}>
    <Row>
      <Col sm={6}>   
       <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" name = "first_name" placeholder="Enter First Name" onChange={e => {setFirstName(e.target.value)  }}/>
   
    </Form.Group>
    </Col>
      <Col sm={6}>   
       <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" name="last_name" placeholder="Enter Last Name" onChange={e => {setLastName(e.target.value)  }}/>
   
    </Form.Group>
    </Col>
      <Col sm={6}>   
       <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email </Form.Label>
      <Form.Control type="email" name="email" placeholder="Enter email" onChange={e => {setEmail(e.target.value)  }}/>
   
    </Form.Group>
    </Col>
      <Col sm={6}>   
       <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Company</Form.Label>
      <Form.Control type="text" name="company" placeholder="Company" onChange={e => {setCompany(e.target.value)  }}/>
   
    </Form.Group>
    </Col>
      <Col sm={6}>   
       <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Type </Form.Label>
      <Form.Select aria-label="Default select example" name="type" onChange={e => {setType(e.target.value)  }}>
      <option disabled selected>Select Type</option>
      <option value="1">Super User</option>
      <option value="2">User</option>
    </Form.Select>
   
    </Form.Group>
    </Col>
      <Col sm={6}>   
       <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" name="password" placeholder="Password" onChange={e => {setPassword(e.target.value)  }}/>
   
    </Form.Group>
    </Col>
      <Col sm={6}>   
       <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Deal Id</Form.Label>
      <MultiSelect
        options={deals}
        value={selected}
        onChange={(values)=>{selectValue(values)}}
        labelledBy="Select"
        disableSearch={true}
      />
   
    </Form.Group>
    </Col>
    </Row>
    
    <Button variant="outline-success" type="submit">
      Submit
    </Button>
  </Form>
  <Loader showLoader={loadershown} />
    </div>
  </div>

    </div>
    </div>
  </div>
    
  )
}

export default Adduser