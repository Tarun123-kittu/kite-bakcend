import React, { useState, useEffect } from 'react'
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
   const [startend, setStartend] = useState({ start: "", end: "" })
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
   const [showResults, setShowResults] = useState(true)

   const removeEmptyParams=(url)=>{
      return encodeURI(url.replace(/[^=&]+=(&|$)/g,"").replace(/&$/,""));
   }

   const handleApply = (event, picker) => {

      picker.element.val(
         picker.startDate.format('MM/DD/YYYY') +
         ' - ' +
         picker.endDate.format('MM/DD/YYYY')
      );
      setStartend({ start: picker.startDate.format('YYYY-MM-DD'), end: picker.endDate.format('YYYY-MM-DD') })
      setrange(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'))
      searchquery = removeEmptyParams(`creation_date=${picker.startDate.format('DD/MM/YYYY')}+-+${picker.endDate.format('DD/MM/YYYY')}&startDate=${picker.startDate.format('YYYY-MM-DD')}&endDate=${picker.endDate.format('YYYY-MM-DD')}&campaign=${campaign}&format=${format}&period=&advertiser=${advertiser}&dimension=${dimension}&filterDate=${filterDate}&impressions=${impressions ? impressions : ""}&views=${views ? views : ""}&clicks=${clicks ? clicks : ""}&engagements=${engagements ? engagements : ""}&cpcv=${cpcv ? cpcv : ""}&ctr=${ctr ? ctr : ""}&egRate=${egRate ? egRate : ""}`)
      fetchReports();
   };
   const handleCancel = (event, picker) => {
      picker.element.val('');
   };

   function refreshPage() {
      window.location.reload();
   }

   let searchquery = `creation_date=${daterange}&startDate=${startend.start}&endDate=${startend.end}&campaign=${campaign}&format=${format}&period=${period}&advertiser=${advertiser}&dimension=${dimension}&filterDate=${filterDate}&impressions=${impressions ? impressions : ""}&views=${views ? views : ""}&clicks=${clicks ? clicks : ""}&engagements=${engagements ? engagements : ""}&cpcv=${cpcv ? cpcv : ""}&ctr=${ctr ? ctr : ""}&egRate=${egRate ? egRate : ""}`

   useEffect(() => {
      fetchReports();
   }, []);
   const getReports = async (e) => {
      e.preventDefault();
      fetchReports();
   }

   let fetchReports = async () => {
      axios.get(
         `${process.env.REACT_APP_BASE_URL}v1/reports?${searchquery}`, {
            headers: {
               "Accept":"application/json, text/plain, /",
               "Content-Type": "multipart/form-data",
               'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
      }
      ).then((response) => {
         setReports(response.data.data);
      }).catch((error)=>{
         console.log("ERRROR", error);
      });
   }
   const handleSelectChange = (event) => {
      let value = event.target.value;
      value == 'custom' ? setDateDisable(false) : setDateDisable(true);
      if(value != 'custom'){
         searchquery = removeEmptyParams(`creation_date=&startDate=&endDate=&campaign=${campaign}&format=${format}&period=${value}&advertiser=${advertiser}&dimension=${dimension}&filterDate=${filterDate}&impressions=${impressions ? impressions : ""}&views=${views ? views : ""}&clicks=${clicks ? clicks : ""}&engagements=${engagements ? engagements : ""}&cpcv=${cpcv ? cpcv : ""}&ctr=${ctr ? ctr : ""}&egRate=${egRate ? egRate : ""}`);
         fetchReports();
         setPeriod(value) 
      }else{
         setPeriod("") 
      }
   }
   const datechange = (events) =>{
      let dimnesionValue = events.target.value;
      dimnesionValue === "date" ? setShowResults(true) : setShowResults(false)
      if(dimnesionValue === "date"){
         setFilterDate("")
      }
   }
   const findpercetage = (array, element) => {
      let sum = array.map(item => item.impressions).reduce((prev, curr) => prev + curr, 0);
      let percentage = sum == 0 ? 0 : ((array.map(item => item[element]).reduce((prev, curr) => prev + curr, 0) / sum) * 100).toFixed(2);
      return percentage
   }
   const usedimension = (newdimension) => {
      searchquery = removeEmptyParams(`creation_date=${daterange}&startDate=${startend.start}&endDate=${startend.end}&campaign=${campaign}&format=${format}&period=${period}&advertiser=${advertiser}&dimension=${newdimension}&filterDate=${filterDate}&impressions=${impressions ? impressions : ""}&views=${views ? views : ""}&clicks=${clicks ? clicks : ""}&engagements=${engagements ? engagements : ""}&cpcv=${cpcv ? cpcv : ""}&ctr=${ctr ? ctr : ""}&egRate=${egRate ? egRate : ""}`)
      fetchReports();
      setDimension(newdimension)
   }
   const usedatefilter = (newdatefilter) => {
      searchquery = removeEmptyParams(`creation_date=${daterange}&startDate=${startend.start}&endDate=${startend.end}&campaign=${campaign}&format=${format}&period=${period}&advertiser=${advertiser}&dimension=${dimension}&filterDate=${newdatefilter}&impressions=${impressions ? impressions : ""}&views=${views ? views : ""}&clicks=${clicks ? clicks : ""}&engagements=${engagements ? engagements : ""}&cpcv=${cpcv ? cpcv : ""}&ctr=${ctr ? ctr : ""}&egRate=${egRate ? egRate : ""}`)
      fetchReports();
      setFilterDate(newdatefilter)
   }
   const handleCampainChange=(campaignName)=>{
      searchquery =removeEmptyParams(`creation_date=${daterange}&startDate=${startend.start}&endDate=${startend.end}&campaign=${campaignName}&format=${format}&period=${period}&advertiser=${advertiser}&dimension=${dimension}&filterDate=${filterDate}&impressions=${impressions ? impressions : ""}&views=${views ? views : ""}&clicks=${clicks ? clicks : ""}&engagements=${engagements ? engagements : ""}&cpcv=${cpcv ? cpcv : ""}&ctr=${ctr ? ctr : ""}&egRate=${egRate ? egRate : ""}`);
      fetchReports();
      setCampaign(campaignName)
   }

   const handleFormatChange=(formatName)=>{
      searchquery = removeEmptyParams(`creation_date=${daterange}&startDate=${startend.start}&endDate=${startend.end}&campaign=${campaign}&format=${formatName}&period=${period}&advertiser=${advertiser}&dimension=${dimension}&filterDate=${filterDate}&impressions=${impressions ? impressions : ""}&views=${views ? views : ""}&clicks=${clicks ? clicks : ""}&engagements=${engagements ? engagements : ""}&cpcv=${cpcv ? cpcv : ""}&ctr=${ctr ? ctr : ""}&egRate=${egRate ? egRate : ""}`);
      fetchReports();
      setFormat(formatName)
   }

   const handleAdvertiserChange=(advertiserName)=>{
      searchquery = removeEmptyParams(`creation_date=${daterange}&startDate=${startend.start}&endDate=${startend.end}&campaign=${campaign}&format=${format}&period=${period}&advertiser=${advertiserName}&dimension=${dimension}&filterDate=${filterDate}&impressions=${impressions ? impressions : ""}&views=${views ? views : ""}&clicks=${clicks ? clicks : ""}&engagements=${engagements ? engagements : ""}&cpcv=${cpcv ? cpcv : ""}&ctr=${ctr ? ctr : ""}&egRate=${egRate ? egRate : ""}`)
      fetchReports();
      setAdvertiser(advertiserName) 
   }

   const exportData = () => {
      let date = new Date();
                var html = document.querySelector("table").outerHTML;
                export_table_to_csv(html, "report-" + date.getDate() + "." + (date.getMonth() + 1) + "." +
                    date
                    .getFullYear() + ".csv");
           
   }
   const export_table_to_csv = (html, filename) => {

      var csv = [];
                var rows = document.querySelectorAll("table tr");
                for (var i = 0; i < rows.length; i++) {
                    var row = [],
                        cols = rows[i].querySelectorAll("td, th");
                    for (var j = 0; j < cols.length; j++)
                        row.push(cols[j].innerText);
                    csv.push(row.join(","));
                }
                download_csv(csv.join("\n"), filename);
   }

   const download_csv = (csv, filename) =>{
      var csvFile;
                var downloadLink;
                csvFile = new Blob([csv], {
                    type: "text/csv"
                });
                downloadLink = document.createElement("a");
                downloadLink.download = filename;
                downloadLink.href = window.URL.createObjectURL(csvFile);
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);
                downloadLink.click();
   }

  
   return (
      <div className='content_outer'>
         <div className='content'>

            <div className='card_outer'>
               <h2>Reports</h2>
               <div className='reports_inner'>
                  <Form onSubmit={getReports}>
                     <Row >
                        <Col  xl={2} lg={4} md={2}>
                           <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Period</Form.Label>
                              <Form.Select aria-label="Default select example" onChange={(e) => { handleSelectChange(e);}} >
                                 <option disabled={true} selected={true}>Select</option>
                                 <option value="Yesterday">Yesterday</option>
                                 <option value="month">So far this month</option>
                                 <option value="seven_days">Last seven days</option>
                                 <option value="last_month">Last month</option>
                                 <option value="custom">Custom date</option>
                              </Form.Select>
                           </Form.Group>
                        </Col>
                        <Col md={3} lg={4} xl={2}>
                           <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Date Range</Form.Label>
                              <DateRangePicker initialSettings={{
                                 autoUpdateInput: false

                              }}
                                 onApply={handleApply}
                                 onCancel={handleCancel}
                                 disabled={true}
                              >
                                 <Form.Control type="text" placeholder="Creation Date" className="form-control" disabled={dateDisable} />
                              </DateRangePicker>
                           </Form.Group>
                        </Col>
                        <Col md={4} lg={4} xl={2}>
                           <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Campaign</Form.Label>
                              <Form.Select aria-label="Default select example" onChange={e => { handleCampainChange(e.target.value)}}>
                                 <option disabled={true} selected={true}>Select</option>
                                 {reports?.campaign?.map((data, index) => (
                                    <option value={data.campaign} key={index}> {data.campaign}</option>
                                 ))}
                              </Form.Select>
                           </Form.Group>
                        </Col>
                        <Col xl={2} lg={4} md={3}>
                           <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Format</Form.Label>
                              <Form.Select aria-label="Default select example" onChange={e => { handleFormatChange(e.target.value)}}>
                                 <option disabled={true} selected={true}>Select</option>
                                 {reports?.formats?.map((data, index) => (
                                    <option value={data.format} key={index}>{data.format}</option>
                                 ))}
                              </Form.Select>
                           </Form.Group>
                        </Col>
                        <Col xl={2} lg={3} md={3}>
                           <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Label>Advertiser</Form.Label>
                              <Form.Select aria-label="Default select example" onChange={e => { handleAdvertiserChange(e.target.value)}}>
                                 <option disabled={true} selected={true}>Select</option>
                                 {reports?.advertiser?.map((data, index) => (
                                    <option value={data.advertiser} key={index}>{data.advertiser}</option>
                                 ))}
                              </Form.Select>
                           </Form.Group>
                        </Col>
                        <Col sm={12} md={3} lg={3} xl={2}>
                           <div className='resetBtns'>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <Form.Label style={{ opacity: '0' }} >Reset</Form.Label> <br />
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
                                 <Form.Select id='select' aria-label="Default select example" onChange={e => { datechange(e); usedimension(e.target.value) }}>
                                    <option disabled={true} selected={true}>Select</option>
                                    <option value="advertiser">Advertiser</option>
                                    <option value="campaign">campaign</option>
                                    <option value="format">Formats</option>
                                    <option value="date" >Date</option>
                                 </Form.Select>
                              </Form.Group>
                             
                              <h2 className='mb-3'>Date</h2>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <Form.Select disabled={showResults} aria-label="Default select example" onChange={e => { usedatefilter(e.target.value) }}>
                                    <option disabled={true} selected={true} value="">Select</option>
                                    <option value="byDay">By Date</option>
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
                                          checked={impressions}
                                          onChange={e => { setImpressions(e.target.checked); }}
                                       />
                                    </li>
                                    <li>
                                       <Form.Check
                                          reverse
                                          label="Views"
                                          name="views"
                                          type="checkbox"
                                          onChange={e => { setViews(e.target.checked) }}
                                       />
                                    </li>
                                    <li>
                                       <Form.Check
                                          reverse
                                          label="Clicks"
                                          name="clicks"
                                          type="checkbox"
                                          onChange={e => { setClicks(e.target.checked) }}
                                       />
                                    </li>
                                    <li>
                                       <Form.Check
                                          reverse
                                          label="Engagements"
                                          name="engagements"
                                          type="checkbox"
                                          onChange={e => { setEngagements(e.target.checked) }}
                                       />
                                    </li>
                                    <li>
                                       <Form.Check
                                          reverse
                                          label="CPCV"
                                          name="cpcv"
                                          type="checkbox"
                                          onChange={e => { setcpcv(e.target.checked) }}
                                       />
                                    </li>
                                    <li>
                                       <Form.Check
                                          reverse
                                          label="CTR"
                                          name="ctr"
                                          type="checkbox"
                                          onChange={e => { setctr(e.target.checked) }}
                                       />
                                    </li>
                                    <li>
                                       <Form.Check
                                          reverse
                                          label="Engage rate"
                                          name="egRate"
                                          type="checkbox"
                                          onChange={e => { setegRate(e.target.checked) }}
                                       />
                                    </li>
                                 </ul>
                              </div>
                              <div>
                              </div>
                           </Col>
                        </Row>
                        {/* <Button variant="success" type="submit" className=" d-block w-75 m-auto">Generate</Button> */}
                     </div>

                  </Form>




               </div>
            </div>
         </div>


         
         {(impressions == true || views == true || clicks == true || engagements == true || cpcv == true || ctr == true || egRate == true) &&
            <div className='content'>

               <div className='card'>
              <div className="p-2 text-end">
              <Button onClick={exportData} className="ms-auto w-20 mb-2 expo_button">Export</Button>
              </div>

                 

                     <Table striped bordered hover>
                        <thead>
                           <tr>
                              {dimension != "" &&
                                 <th>{dimension}</th>
                              }
                              {filterDate != "" &&
                                 <th>Date</th>
                              }
                              {impressions == true &&
                                 <th>Impressions</th>
                              }
                              {views == true &&
                                 <th>Views</th>
                              }
                              {clicks == true &&
                                 <th>Clicks</th>
                              }
                              {engagements == true &&
                                 <th>Engagements</th>
                              }
                              {cpcv == true &&
                                 <th>CPCV</th>
                              }
                              {ctr == true &&
                                 <th>CTR</th>
                              }
                              {egRate == true &&
                                 <th>Engage Rate</th>
                              }

                           </tr>
                        </thead>
                        <tbody>
                           {(dimension != "" || filterDate != "") &&
                              <>
                                 {reports?.overview?.map((value, index) => {
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
                                                {(() => {
                                                   if (value.format == 'Branded Video (AA)' || value.format == 'Bumper Ads / URL YouTube (KSV)' || value.format == 'Pre Roll - In stream / URL YouTube (KSV)' || value.format == 'Pre Roll 30¨ (AA / Programatic)') {
                                                      return (
                                                         <td>{(value.impressions == null ? 0 : value.impressions) == 0 ? 0 : ((value.views / value.impressions) * 100).toFixed(2)}%</td>
                                                      )
                                                   } else {
                                                      return (
                                                         <td>N/A</td>
                                                      )
                                                   }

                                                   return null;
                                                })()}

                                             </>
                                          }
                                          {
                                             ctr == true &&

                                             <>
                                                {(() => {
                                                   if (value.format != 'Virtual OOH - Estático' && value.format != 'Virtual OOH - GIF') {
                                                      return (
                                                         <td>{(value.impressions == null ? 0 : value.impressions) == 0 ? 0 : ((value.clicks / value.impressions) * 100).toFixed(2)}%</td>
                                                      )
                                                   } else {
                                                      return (
                                                         <td>N/A</td>
                                                      )
                                                   }

                                                   return null;
                                                })()}


                                             </>
                                          }
                                          {
                                             egRate == true &&

                                             <>
                                                {(() => {
                                                   if (value.format == 'Interstitial Tradicional (AA)' || value.format == 'Interstitial / Carousel (AA)' || value.format == 'Interstitial / Filmstrip (AA)' || value.format == 'Interstitial / Minigame (AA)') {

                                                      return (
                                                         <td>{(value.impressions == null ? 0 : value.impressions) == 0 ? 0 : ((value.views / value.engagements) * 100).toFixed(2)}%</td>
                                                      )
                                                   } else {
                                                      return (
                                                         <td>N/A</td>
                                                      )
                                                   }

                                                   return null;
                                                })()}

                                             </>
                                          }
                                       </tr>

                                    )
                                 })}
                              </>

                           }
                           {(dimension == "" && filterDate == "") &&
                              <>
                              <tr>
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
                                    <td>{reports?.cpcv?.map(item => item.impressions).reduce((prev, curr) => prev + curr, 0) == 0 ? 0 : ((reports.cpcv.map(item => item.views).reduce((prev, curr) => prev + curr, 0) / reports.cpcv.map(item => item.impressions).reduce((prev, curr) => prev + curr, 0)) * 100).toFixed(2)}%</td>

                                 }
                                 {
                                    ctr == true &&
                                    <td>{reports?.ctr?.map(item => item.impressions).reduce((prev, curr) => prev + curr, 0) == 0 ? 0 : ((reports.ctr.map(item => item.clicks).reduce((prev, curr) => prev + curr, 0) / reports.ctr.map(item => item.impressions).reduce((prev, curr) => prev + curr, 0)) * 100).toFixed(2)}%</td>

                                 }
                                 {
                                    egRate == true &&
                                    <td>{reports?.egRate?.map(item => item.impressions).reduce((prev, curr) => prev + curr, 0) == 0 ? 0 : ((reports.egRate.map(item => item.engagements).reduce((prev, curr) => prev + curr, 0) / reports.egRate.map(item => item.impressions).reduce((prev, curr) => prev + curr, 0)) * 100).toFixed(2)}%</td>

                                 }
                              </tr>
                              </>
                           }

                        </tbody>
                     </Table>

               </div>
            </div>
         }

      </div>

   )
}
export default Reports