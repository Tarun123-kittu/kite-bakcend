import React from 'react'
import { Formik, Form, Field } from 'formik';
import { Row, Col } from 'react-bootstrap';
import DateRangePicker from "react-bootstrap-daterangepicker";
const NewLineItem = () => {
    return (
        <div className="content_outer">
            <div className="content">
                <Formik>
                    <Form>
                        <h2>Line item Setting</h2>
                        <div className='cmn_border'>
                            <Row>
                                <Col lg={6}>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2' htmlFor="lignitemname">Line Item Name</label>
                                        <select name="" id="" className='form-control' >
                                            <option value="apps">Apps</option>
                                            <option value="apps">Web / Apps web</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2' htmlFor="inventorytype">Inventory Type</label>
                                        <select name="" id="" className='form-control' >
                                            <option value="apps">Apps</option>
                                            <option value="apps">Web / Apps web</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2' htmlFor="format">Format</label>
                                        <select name="" id="" className='form-control' >
                                            <option value="apps">Apps</option>
                                            <option value="apps">Web / Apps web</option>
                                        </select>
                                    </div>
                                </Col>
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
                                            initialSettings={{ startDate: '01/01/2022', endDate: '01/15/2020' }}
                                        >
                                            <input type="text" className="form-control" />
                                        </DateRangePicker>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2' htmlFor="enddate">Budget</label>
                                        <input type="text" className='form-control' placeholder='Budget' />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2' htmlFor="ofertype">Offer Type</label>
                                        <select name="" id="" className='form-control' >
                                            <option value="cpm">CPM</option>
                                            <option value="cpv">CPV</option>
                                            <option value="cpcv">CPCV</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2' htmlFor="sellrate">Sell Rate</label>
                                        <input type="text" className='form-control' placeholder='Sell Rate' />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2' htmlFor="netrate">Net Rate</label>
                                        <input type="text" className='form-control' placeholder='Net Rate' />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2' htmlFor="goal">Goal </label>
                                        <input type="text" className='form-control' placeholder='Goal' />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2' htmlFor="netmargin">Net Margin </label>
                                        <input type="text" className='form-control' placeholder='Net Margin' />
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <h2 className='mt-4'>Line item Setting</h2>
                        <div className='cmn_border'>
                            <Row>
                                <Col lg={6}>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2' htmlFor="country">Country</label>
                                        <select name="" id="" className='form-control' >
                                            <option value="argentina">Argentina</option>
                                            <option value="bolivia">Bolivia</option>
                                            <option value="brasil">Brasil</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2' htmlFor="country">Gender</label>
                                        <div className='d-flex'>
                                            <div class="form-check me-3">
                                                <input class="form-check-input" type="radio" />
                                                <label class="form-check-label" for="boys">
                                                    Boys
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" />
                                                <label class="form-check-label" for="girls">
                                                    Girls
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='form-group mb-3'>
                                        <label for="customRange2" class="form-label"> Age</label>
                                        <input type="range" class="form-range" min="0" max="5" id="customRange2" />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2' htmlFor="devices">Devices</label>
                                        <select name="" id="" className='form-control' >
                                            <option value="Tablet">Tablet</option>
                                            <option value="Desktop">Desktop</option>
                                            <option value="cctv">CCTV</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2' htmlFor="frequency">Frequency</label>
                                        <input type="text" className='form-control' placeholder='Frequency' />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2' htmlFor="Passion Points">Passion Points</label>
                                        <select name="" id="" className='form-control' >
                                            <option value="Food">Food</option>
                                            <option value="superhero">Super Hero</option>
                                            <option value="pribnces">Princess</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2' htmlFor="Whitelist">White List</label>
                                        <input type="file" name="" id="" className='form-control' />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='form-group mb-3'>
                                        <label className='mb-2' htmlFor="blacklist">Black List</label>
                                        <input type="file" name="" id="" className='form-control' />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='d-flex mt-4'>
                        <button type='submit ' className='cmn_btn me-3 ms-auto'>
                               Creative
                            </button>
                            <button type='submit ' className='cmn_btn'>
                                Save
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default NewLineItem