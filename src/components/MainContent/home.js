import React, { useState, useRef, useEffect } from 'react'
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import DateRangePicker from "react-bootstrap-daterangepicker";
import "./style.css"
import { useSelector, useDispatch } from 'react-redux';
import { dashboardSelector, clearState, fetchdashboard } from '../../app/features/Dashboard/DashboardSlice';
const Home = () => {
   const [disabledatepicker, setdiabledpicker] = useState(true)
   const [daterange, setrange] = useState("")
   const [startend, setStartend] = useState({ start: "", end: "" })
   const [campaignfilter, setCampaignFilter] = useState("")
   const [formatfilter, setFormatFilter] = useState("")
   const [periodfilter, setperiodfilter] = useState("")
   const [linegraph, setlinegraph] = useState({})
   const pickerref = useRef(null);
   const dispatch = useDispatch();
   const { overview, cpcv, egRate, ctr, views, impressions, device, format, graph, formats, campaign, isFetching, isSuccess, isError, error } = useSelector(
      dashboardSelector
   );
   console.log(format)
   useEffect(() => {
      dispatch(fetchdashboard({ filter: "", token: localStorage.getItem('token') }))
   }, [])
   const handleApply = (event, picker) => {
      picker.element.val(
         picker.startDate.format('MM/DD/YYYY') +
         ' - ' +
         picker.endDate.format('MM/DD/YYYY')
      );
      setStartend({ start: picker.startDate.format('YYYY-MM-DD'), end: picker.endDate.format('YYYY-MM-DD') })
      setrange(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'))
   };
   const handleCancel = (event, picker) => {
      picker.element.val('');
   };

   const findpercetage = (array, element) => {
      let sum = array.map(item => item.impressions).reduce((prev, curr) => prev + curr, 0);
      let percentage = sum == 0 ? 0 : ((array.map(item => item[element]).reduce((prev, curr) => prev + curr, 0) / sum) * 100).toFixed(2);
      return percentage
   }

   const handleselectchange = (event) => {
      let value = event.target.value;
      value == 'custom' ? setdiabledpicker(false) : setdiabledpicker(true)
      setperiodfilter(value)

   }
   const searchfilter = () => {
      let period = "";
      if (periodfilter != 'custom') {
         period = periodfilter
      }
      let serchquery = `creation_date=${daterange}&startDate=${startend.start}&endDate=${startend.end}&campaign=${campaignfilter}&format=${formatfilter}&period=${period}`
      dispatch(fetchdashboard({ filter: serchquery, token: localStorage.getItem('token') }))
   }

   const resetfilter=()=>{
      window.location.reload();
   }
   useEffect(() => {
      graphdraw()
   }, [graph])

   const graphdraw = () => {
      console.log("GRAPH")
      var count = graph.length;
      var views = [];
      var impressions = [];
      var date = [];
      var i;
      for (i = 0; i < count; i++) {
         views.push(graph[i].views);
         impressions.push(graph[i].impressions);
         date.push(graph[i].date);
      }
      let chartdata = {
         chart: {
            type: 'spline'
         },
         title: {
            text: 'views and impressions'
         },
         xAxis: {
            categories: date
         },
         yAxis: {
            title: {
               text: 'Numbers'
            }
         },
         plotOptions: {
            series: {
               label: {
                  connectorAllowed: false
               },
               /* pointStart: 2010 */
            }
         },
         series: [{
            name: 'Views',
            data: views

         }, {
            name: 'Impressions',
            data: impressions
         }]
      }
      console.log(chartdata)
      setlinegraph(chartdata);
   }


   return (
      <div className='content_outer'>

         <div className='content'>
            <Form>
               <Row>
                  <Col lg={2}>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Period</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={handleselectchange}>
                           <option disabled={true} selected={true}>Select</option>
                           <option value="Yesterday">Yesterday</option>
                           <option value="seven_days">Last seven days</option>
                           <option value="last_month">Last month</option>
                           <option value="custom">Custom date</option>
                        </Form.Select>
                     </Form.Group>
                  </Col>
                  <Col md={3} lg={2}>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Date Range</Form.Label>
                        <DateRangePicker initialSettings={{
                           autoUpdateInput: false
                        }}
                           onApply={handleApply}
                           onCancel={handleCancel}
                           disabled={disabledatepicker}
                           ref={pickerref}
                        >
                           <Form.Control type="text" placeholder="Creation Date" className="form-control" disabled={disabledatepicker} />
                        </DateRangePicker>
                     </Form.Group>
                  </Col>
                  <Col md={4} lg={3}>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Campaign</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={(e) => { setCampaignFilter(e.target.value) }}>
                           <option value="">Select</option>
                           {campaign.map((camp, index) => {
                              return (
                                 <option value={camp?.campaign} key={index}>{camp?.campaign}</option>
                              )
                           })}
                        </Form.Select>
                     </Form.Group>
                  </Col>
                  <Col lg={2} md={3} >
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Format</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={(e) => { setFormatFilter(e.target.value) }}>
                           <option value="">Select</option>
                           {formats.map((format, index) => {
                              return (
                                 <option value={format?.format} key={index}>{format?.format}</option>
                              )
                           })}
                        </Form.Select>
                     </Form.Group>
                  </Col>
                  <Col sm={12} md={12} lg={3}>
                     <div className="d-flex align-items center submit_btn">
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                           <Form.Label style={{ opacity: "0" }}>Search</Form.Label><br />
                           <Button variant="outline-primary" onClick={searchfilter} >
                              Search
                           </Button>
                        </Form.Group>
                        <Form.Group className="mb-3 ms-2" controlId="formBasicEmail">
                           <Form.Label style={{ opacity: '0' }}>Reset</Form.Label> <br />
                           <Button variant="outline-danger" onClick={resetfilter} >
                              Reset
                           </Button>
                        </Form.Group>
                     </div>
                  </Col>
               </Row>
               <Row>
                  <Col lg={3} md={6}>
                     <div className="card_outer">
                        <h4>{impressions.map(item => item.impressions).reduce((prev, curr) => prev + curr, 0).toLocaleString('en-US')}</h4>
                        <p>Impressions</p>
                     </div>
                  </Col>
                  <Col lg={3} md={6}>
                     <div className="card_outer">
                        <h4>{views.map(item => item.views).reduce((prev, curr) => prev + curr, 0).toLocaleString('en-US')}</h4>
                        <p>Views</p>
                     </div>
                  </Col>
                  <Col lg={3} md={6}>
                     <div className="card_outer">
                        <h4>{overview.map(item => item.clicks).reduce((prev, curr) => prev + curr, 0).toLocaleString('en-US')}</h4>
                        <p>Clicks</p>
                     </div>
                  </Col>
                  <Col lg={3} md={6}>
                     <div className="card_outer">
                        <h4>{overview.map(item => item.engagements).reduce((prev, curr) => prev + curr, 0).toLocaleString('en-US')}</h4>
                        <p>Engagements</p>
                     </div>
                  </Col>
               </Row>
               <Row>
                  <Col lg={3} md={12}>
                     <Row>
                        <Col lg={12} md={6}>
                           <div className="card_outer">
                              <h4>{findpercetage(cpcv, 'views')}%</h4>
                              <p>CPCV</p>
                           </div>
                        </Col>
                        <Col lg={12} md={6}>
                           <div className="card_outer">
                              <h4>{findpercetage(ctr, 'clicks')}%</h4>
                              <p>CTR</p>
                           </div>
                        </Col>
                        <Col lg={12} md={12}>
                           <div className="card_outer">
                              <h4>{findpercetage(egRate, 'engagements')}%</h4>
                              <p>Engagement Rate</p>
                           </div>
                        </Col>
                     </Row>
                  </Col>
                  <Col lg={9} md={12}>
                     <div className="card_outer statistics">
                        <h2>Statistics</h2>
                        <HighchartsReact
                           highcharts={Highcharts}
                           options={linegraph}
                        />
                     </div>
                  </Col>
               </Row>

               <Row>
                  <Col lg={8} md={12}>
                     <div className="card_outer statistics p-0">
                        <h2 className='p-4'>Formats</h2>
                        <div className='format'>
                           <Table responsive >
                              <thead>
                                 <tr>
                                    <th>FORMAT</th>
                                    <th>IMPRESSIONS</th>
                                    <th>VIEWS</th>
                                    <th>CLICKS</th>
                                    <th>ENGAGEMENTS</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {format.map((form, index) => {
                                    return (
                                       <tr key={index}>
                                          <td>{form.format ? form.format : 'N/A'}</td>
                                          <td>{form.impressions ? form.impressions : '0'}</td>
                                          <td>{form.views ? form.views : '0'}</td>
                                          <td>{form.clicks ? form.clicks : '0'}</td>
                                          <td>{form.engagements ? form.engagements : '0'}</td>
                                       </tr>
                                    )
                                 })}


                              </tbody>
                           </Table>
                        </div>

                     </div>
                  </Col>
                  <Col lg={4} md={12}>
                     <div className="card_outer">
                        <HighchartsReact highcharts={Highcharts} options={
                           {
                              chart: {
                                 plotBackgroundColor: null,
                                 plotBorderWidth: null,
                                 plotShadow: false,
                                 type: 'pie'
                              },
                              title: {
                                 text: 'Device Usage World wide'
                              },
                              tooltip: {
                                 pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                              },
                              accessibility: {
                                 point: {
                                    valueSuffix: '%'
                                 }
                              },
                              credits: {
                                 enabled: false
                              },
                              plotOptions: {
                                 pie: {
                                    allowPointSelect: true,
                                    cursor: 'pointer',
                                    dataLabels: {
                                       enabled: true,
                                       format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                    }
                                 }
                              },
                              series: [{
                                 name: 'Device',
                                 colorByPoint: true,
                                 data: device
                              }]
                           }} />
                     </div>
                  </Col>
               </Row>

            </Form>
         </div>
      </div>
   )
}
export default Home