import React, {useEffect,useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-hot-toast";
import Loader from '../Loader';
const Variable = () =>{
    const [frequency, setFrequency] = useState("")
    const [cpm, setCpm] = useState("")
    const [id, setId] = useState("")
    const params = useParams();
    const [loadershown , setloadershown] =useState(false);

    useEffect (()=>{
        axios.get(
            `${process.env.REACT_APP_BASE_URL}v1/variables`,{headers: { 
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+localStorage.getItem('token')
            }}
          ).then((response)=>{
                console.log('response', response.data.data[0].cpm)
                setFrequency(response.data.data[0].frequency) 
                setCpm(response.data.data[0].cpm) 
                setId(response.data.data[0].id) 
          })
    },[])

let handleSubmit = async (e) =>{
e.preventDefault()
try{
    if(frequency == ""){
        toast.error("Frequency field is required");
        return false;
    }
    if(cpm == ""){
        toast.error("cpm  field is required");
        return false;
    }
    var data = {
        "frequency" : frequency,
        "cpm" : cpm,
    }
   
      setloadershown(true);
      await axios.post(`${process.env.REACT_APP_BASE_URL}v1/variables/update/${id}`,data,{ headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('token')
      }}).then( (response) => {
         setloadershown(false)
         toast.success(response.data.message);
       })
}
catch (err){
    console.log(err);
}
}

return (
<div className="content_outer">
   <div className="content">
      <div className="card_outer">
         <h2>Variable</h2>
         <div className='form_inner'>
            <Form onSubmit={handleSubmit}>
               <Row>
                  <Col sm={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Fequency</Form.Label>
                     <Form.Control type="number" value={frequency} name = "frequency" onChange={e => {setFrequency(e.target.value)}} placeholder="Frequency" />
                  </Form.Group>
                  </Col>
                  <Col sm={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>CPM</Form.Label>
                     <Form.Control type="number" value={cpm} name="cpm" onChange={e => {setCpm(e.target.value)}} placeholder="CPM" />
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
)
}
export default Variable;