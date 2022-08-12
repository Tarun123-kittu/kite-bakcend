import React, { useState , useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import './style.css'
import axios from "axios";

const Reports = () => {
   const [reports, setReports] = useState([]);
   const [dateDisable, setDateDisable] = useState(true);
   const [daterange, setrange] = useState("")
   const [startend, setStartend]=useState({start: "", end: ""})
   const [campaign, setCampaign] = useState("");
   const [format, setFormat] = useState("");
   const [advertiser, setAdvertiser] = useState("");
   const [period, setPeriod] = useState("");
   const [dimension, setDimension] = useState("");
   const [filterDate, setFilterDate] = useState("");
   const [impressions, setImpressions] = useState(true);
   const [views, setViews] = useState(false);
   const [clicks, setClicks] = useState(false);
   const [engagements, setEngagements] = useState(false);
   const [cpcv, setcpcv] = useState(false);
   const [ctr, setctr] = useState(false);
   const [egRate, setegRate] = useState(false);
   

   const handleApply = (event, picker) => {
     
      picker.element.val(
         picker.startDate.format('MM/DD/YYYY') +
         ' - ' +
         picker.endDate.format('MM/DD/YYYY')
      );
      setStartend({start: picker.startDate.format('YYYY-MM-DD'), end:picker.endDate.format('YYYY-MM-DD')})
      setrange(picker.startDate.format('DD/MM/YYYY')+' - ' +picker.endDate.format('DD/MM/YYYY'))
   };
   const handleCancel = (event, picker) => {
      picker.element.val('');
   };

   function refreshPage() {
      window.location.reload();
    }

   let searchquery=`creation_date=${daterange}&startDate=${startend.start}&endDate=${startend.end}&campaign=${campaign}&format=${format}&period=${period}&advertiser=${advertiser}&dimension=${dimension}&filterDate=${filterDate}&impressions=${impressions ? impressions:""}&views=${views ? views:""}&clicks=${clicks ? clicks:""}&engagements=${engagements ? engagements:""}&cpcv=${cpcv ? cpcv:""}&ctr=${ctr ? ctr:""}&egRate=${egRate ? egRate:""}`

   useEffect(() => {
      fetchReports();
   }, []);
   const getReports = async(e) => {
      e.preventDefault();
      fetchReports();
   }
   
   let fetchReports = async() => {
      
      axios.get(
         `${process.env.REACT_APP_BASE_URL}v1/reports?${searchquery}`,{headers: { 
           'Content-Type': 'application/json',
           'Authorization': 'Bearer '+localStorage.getItem('token')
         }}
       ).then((response) => {
           console.log("data--",response.data.data);
           setReports(response.data.data);
       });
   }
   const handleSelectChange = (event) =>{
      let value = event.target.value;
      value == 'custom' ? setDateDisable(false) : setDateDisable(true);
   }
   const findpercetage = (array, element) => {
      let sum = array.map(item => item.impressions).reduce((prev, curr) => prev + curr, 0);
      let percentage = sum == 0 ? 0 : ((array.map(item => item[element]).reduce((prev, curr) => prev + curr, 0) / sum) * 100).toFixed(2);
      return percentage
   }
return (
   <div className='content_outer'>
   <div className='content'>

<div className='card_outer'>
    <h2>Reports</h2>
<div className='reports_inner'>
   <Form onSubmit={getReports}>
      <Row >
         <Col Col lg={2} md={2}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Period</Form.Label>
            <Form.Select aria-label="Default select example" onChange={(e) => {handleSelectChange(e); setPeriod(e.target.value)}} >
               <option disabled={true} selected={true}>Select</option>
               <option value="Yesterday">Yesterday</option>
               <option  value="month">So far this month</option>
               <option value="seven_days">Last seven days</option>
               <option value="last_month">Last month</option>
               <option value="custom">Custom date</option>
            </Form.Select>
         </Form.Group>
         </Col>
         <Col  md={3} lg={2}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date Range</Form.Label>
            <DateRangePicker initialSettings={{
                           autoUpdateInput: false
                           
                        }}
                           onApply={handleApply}
                           onCancel={handleCancel}
                           disabled={true}
                           >
                           <Form.Control type="text" placeholder="Creation Date" className="form-control" disabled={dateDisable}/>
                        </DateRangePicker>
         </Form.Group>
         </Col>
         <Col md={4} lg={3}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Campaign</Form.Label>
            <Form.Select aria-label="Default select example" onChange={e => {setCampaign(e.target.value)  }}>
               <option disabled={true} selected={true}>Select</option>
               {reports?.campaign?.map((data , index) => (
               <option value={data.campaign} key={index}> {data.campaign}</option>
               ))}
            </Form.Select>
         </Form.Group>
         </Col>
         <Col lg={2} md={3}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Format</Form.Label>
            <Form.Select aria-label="Default select example" onChange={e => {setFormat(e.target.value)  }}>
               <option disabled={true} selected={true}>Select</option>
               {reports?.formats?.map((data , index) => (
               <option value={data.format} key={index}>{data.format}</option>
               ))}
            </Form.Select>
         </Form.Group>
         </Col>
         <Col lg={2} md={3}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Advertiser</Form.Label>
            <Form.Select aria-label="Default select example" onChange={e => {setAdvertiser(e.target.value)  }}>
               <option disabled={true} selected={true}>Select</option>
               {reports?.advertiser?.map((data , index) => (
               <option value={data.advertiser} key={index}>{data.advertiser}</option>
               ))}
            </Form.Select>
         </Form.Group>
         </Col>
         <Col sm={12} md={12} lg={3}>
         <div className="submit_btn">
         <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ opacity:'0' }} >Reset</Form.Label> <br/>
            <Button variant="outline-danger" onClick={refreshPage}>
            Reset
            </Button>
         </Form.Group>
         </div>
         </Col>
      </Row>

       <div className=''>
       <Row>
            <Col sm={4} className="border-right">
            <h2 className='mb-3'>Dimensions</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Select aria-label="Default select example" onChange={e => {setDimension(e.target.value)  }}>
                  <option disabled={true} selected={true}>Select</option>
                  <option value="advertiser">Advertiser</option>
                  <option value="campaign">campaign</option>
                  <option value="format">Formats</option>
                  <option value="date">Date</option>
               </Form.Select>
            </Form.Group>
            <h2 className='mb-3'>Date</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Select aria-label="Default select example" onChange={e => {setFilterDate(e.target.value)  }}>
                  <option disabled={true} selected={true} value="">Select</option>
                  <option  value="byDay">By Date</option>
                  <option value="byMonth">By Month</option>
               </Form.Select>
            </Form.Group>
            </Col>
            <Col sm={8}>
            <div className='metrics'>
                <h2 className='text-center'>Metrics</h2>
               <ul>
                  <li>
                     <Form.Check
                        label="Impressions"
                        name="impressions"
                        type="checkbox"
                        checked = {impressions}
                        onChange={e => {console.log("vlue--",e.target.checked); setImpressions(e.target.checked)  }}
                        />
                  </li>
                  <li>
                     <Form.Check
                        reverse
                        label="Views"
                        name="views"
                        type="checkbox"
                        onChange={e => {setViews(e.target.checked)  }}
                        />
                  </li>
                  <li>
                     <Form.Check
                        reverse
                        label="Clicks"
                        name="clicks"
                        type="checkbox"
                        onChange={e => {setClicks(e.target.checked)  }}
                        />
                  </li>
                  <li>
                     <Form.Check
                        reverse
                        label="Engagements"
                        name="engagements"
                        type="checkbox"
                        onChange={e => {setEngagements(e.target.checked)  }}
                        />
                  </li>
                  <li>
                     <Form.Check
                        reverse
                        label="CPCV"
                        name="cpcv"
                        type="checkbox"
                        onChange={e => {setcpcv(e.target.checked)  }}
                        />
                  </li>
                  <li>
                     <Form.Check
                        reverse
                        label="CTR"
                        name="ctr"
                        type="checkbox"
                        onChange={e => {setctr(e.target.checked)  }}
                        />
                  </li>
                  <li>
                     <Form.Check
                        reverse
                        label="Engage rate"
                        name="egRate"
                        type="checkbox"
                        onChange={e => {setegRate(e.target.checked)  }}
                        />
                  </li>
               </ul>
            </div>
            <div>
            </div>
            </Col>
         </Row>
            <Button variant="success" type="submit" className=" d-block w-75 m-auto">Generate</Button>
       </div>
     
   </Form>


  

   </div>
   </div>
   </div>


   
{(impressions ==true || views == true || clicks == true || engagements == true || cpcv == true || ctr == true || egRate == true ) &&
<div className='content'>

<div className='card_outer'>
<div className='reports_inner'>

<Table striped bordered hover>
      <thead>
        <tr>
         { dimension != "" &&
          <th>{dimension}</th> 
         }
         { filterDate != "" &&
          <th>Date</th> 
         }
         { impressions == true &&
          <th>Impressions</th> 
         }
         { views == true &&
          <th>Views</th> 
         }
         { clicks == true &&
          <th>Clicks</th> 
         }
         { engagements == true &&
          <th>Engagements</th> 
         }
         { cpcv == true &&
          <th>CPCV</th> 
         }
         { ctr == true &&
          <th>CTR</th> 
         }
         { egRate == true &&
          <th>Engage Rate</th> 
         }
         
        </tr>
      </thead>
      <tbody>
         { (dimension != "" || filterDate != "") &&
         <>
         {reports?.overview?.map((value , index) =>{
            return (
               <tr>
               {
                  dimension != "" &&
                  <td>{value[dimension]}</td>
                  
               }
               {
                  filterDate != "" &&
                  <td>{value.date}</td>
                  
               }
               {
                  impressions == true &&
                  <td>{value.impressions}</td>
                  
               }
               {
                  views == true &&
                  <td>{value.views}</td>
                 
               }
               {
                  clicks == true &&
                  <td>{value.clicks}</td>
                  
               }
               {
                  engagements == true &&
                  <td>{value.engagements}</td>
                  
               }
               {
                  cpcv == true &&
                  
                     <>
                     {(value.format == 'Branded Video (AA)' || value.format == 'Bumper Ads / URL YouTube (KSV)' || value.format == 'Pre Roll - In stream / URL YouTube (KSV)' || value.format == 'Pre Roll 30¨ (AA / Programatic)') &&
                     <td>{ (value.impressions) == 0 ? 0 : ((value.views / value.impressions) * 100).toFixed(2) }%</td>
                     }
                     {(value.format != 'Branded Video (AA)' || value.format != 'Bumper Ads / URL YouTube (KSV)' || value.format != 'Pre Roll - In stream / URL YouTube (KSV)' || value.format != 'Pre Roll 30¨ (AA / Programatic)') &&
                     <td>N/A</td>
                     }
                  </>
               }
               {
                  ctr == true &&
                  
                     <>
                     {(value.format != 'Virtual OOH - Estático' && value.format != 'Virtual OOH - GIF') &&
                     <td>{ (value.impressions) == 0 ? 0 : ((value.clicks / value.impressions) * 100).toFixed(2) }%</td>
                     }
                     {(value.format == 'Virtual OOH - Estático' && value.format == 'Virtual OOH - GIF') &&
                     <td>N/A</td>
                     }
                  </>
               }
               {
                  egRate == true &&
                  
                     <>
                     {(value.format == 'Interstitial Tradicional (AA)' || value.format == 'Interstitial / Carousel (AA)' || value.format == 'Interstitial / Filmstrip (AA)' || value.format == 'Interstitial / Minigame (AA)') &&
                     <td>{ (value.impressions) == 0 ? 0 : ((value.views / value.engagements) * 100).toFixed(2) }%</td>
                     }
                     {(value.format != 'Interstitial Tradicional (AA)' || value.format != 'Interstitial / Carousel (AA)' || value.format != 'Interstitial / Filmstrip (AA)' || value.format != 'Interstitial / Minigame (AA)') &&
                     <td>N/A</td>
                     }
                  </>
               }
             </tr>

            )
         })}
         </>
       
         }
         { (dimension == "" || filterDate == "") &&
            <>
            {
                  impressions == true &&
                  <td>{reports?.overview?.map(item => item.impressions).reduce((prev, curr) => prev + curr, 0)}</td>
                  
            }
            {
                  views == true &&
                  <td>{reports?.overview?.map(item => item.views).reduce((prev, curr) => prev + curr, 0)}</td>
                  
            }
            {
                  clicks == true &&
                  <td>{reports?.overview?.map(item => item.clicks).reduce((prev, curr) => prev + curr, 0)}</td>
                  
            }
            {
                  engagements == true &&
                  <td>{reports?.overview?.map(item => item.engagements).reduce((prev, curr) => prev + curr, 0)}</td>
                  
            }
            {
                  cpcv == true &&
                  <td>{ reports?.cpcv?.map(item => item.impressions).reduce((prev, curr) => prev + curr, 0) == 0 ? 0 : ((reports.cpcv.map(item => item.views).reduce((prev, curr) => prev + curr, 0) / reports.cpcv.map(item => item.impressions).reduce((prev, curr) => prev + curr, 0)) * 100).toFixed(2) }%</td>
                  
            }
            {
                  ctr == true &&
                  <td>{ reports?.ctr?.map(item => item.impressions).reduce((prev, curr) => prev + curr, 0) == 0 ? 0 : ((reports.ctr.map(item => item.clicks).reduce((prev, curr) => prev + curr, 0) / reports.ctr.map(item => item.impressions).reduce((prev, curr) => prev + curr, 0)) * 100).toFixed(2) }%</td>
                  
            }
            {
                  egRate == true &&
                  <td>{ reports?.egRate?.map(item => item.impressions).reduce((prev, curr) => prev + curr, 0) == 0 ? 0 : ((reports.egRate.map(item => item.engagements).reduce((prev, curr) => prev + curr, 0) / reports.egRate.map(item => item.impressions).reduce((prev, curr) => prev + curr, 0)) * 100).toFixed(2) }%</td>
                  
            }
            
            </>
         }
       
      </tbody>
    </Table>
   </div>
   </div>
   </div>
}
  
</div>

)
}
export default Reports