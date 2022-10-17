import React from 'react'
import { Formik, Form, Field } from 'formik';
import { Row, Col } from 'react-bootstrap';
import DateRangePicker from "react-bootstrap-daterangepicker";
const NewCompaign = () => {
    return (
        <div className="content_outer">
            <div className="content">
                <Formik>
                    <Form>
                        <Row>
                            <Col lg={6}>
                                <div className='form-group mb-3'>
                                    <label className='mb-2' htmlFor="campaignName">Compaign Name</label>
                                    <input type="text" className='form-control' placeholder='Compaign Name' />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className='form-group mb-3'>
                                    <label className='mb-2' htmlFor="product">Product</label>
                                    <select name="product" id="" className='form-control'>
                                        <option value="1">one</option>
                                        <option value="1">two</option>
                                    </select>
                                </div>
                            </Col>
                          <Col lg={12}>
                          <h2 className='mt-3 mb-3 p-0'>
                                Campaign Setting
                            </h2>
                            </Col>
                           <Col>
                           <div className='cmn_border'>
                                <Row>
                                    <Col lg={6}>
                                        <div className='form-group mb-3'>
                                            <label className='mb-2' htmlFor="startdate">Start Date</label>
                                            <DateRangePicker
                                                initialSettings={{ startDate: '01/01/2022', endDate: '01/15/2020' }}
                                            >
                                                <input type="text" className="form-control" />
                                            </DateRangePicker>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='form-group mb-3'>
                                            <label className='mb-2' htmlFor="enddate">End Date</label>
                                            <DateRangePicker
                                                initialSettings={{ startDate: '01/01/2020', endDate: '01/15/2020' }}
                                            >
                                                <input type="text" className="form-control" />
                                            </DateRangePicker>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                <div className='form-group mb-3'>
                                    <label className='mb-2' htmlFor="budget">Budget [Show Media Plan Currency]</label>
                                  <input type="text" className='form-control' placeholder='Budget [Show Media Plan Currency]' />
                                </div>
                            </Col>
                                    <Col lg={6}>
                                <div className='form-group mb-3'>
                                    <label className='mb-2' htmlFor="budgetUsd">Budget USD</label>
                                  <input type="text" className='form-control' placeholder='Budget USD' />
                                </div>
                            </Col>
                            
                                </Row>
                            </div>
                           </Col>
                           <Col lg={12} className="text-end mt-3">
                            <button type='submit ' className='cmn_btn ms-auto'>
                                Submit
                            </button>
                            </Col>
                        </Row>


                    </Form>
                </Formik>


            </div>
        </div>
    )
}

export default NewCompaign