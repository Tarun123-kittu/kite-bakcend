import React, { useState, useRef, useEffect } from 'react'
import './campaign.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { campaignManagerSelector, campaignfilter, pipelinefilter, statusfilter, advertizerfilter, getowners, applyfilter,clearState } from '../../app/features/CampaignManager/CampaignManagerSlice';
const CampaignPage = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false)
    const [filtervalue, setFilterValue] = useState({
        advertiser: "",
        campaign: "",
        pipeline: "",
        ownerType: "",
        ownerValue: "",
        status: ""
    })
    const searchFilter = (e) => {
        console.log(filtervalue)
        if (filtervalue.ownerType != "" && filtervalue.ownerValue != "") {
            switch (filtervalue.ownerType) {
                case "1":
                    filtervalue.sales_owner = filtervalue.ownerValue;
                    break;
                case "3":
                    filtervalue.adops_owner = filtervalue.ownerValue;
                    break;
                case "4":
                    filtervalue.cs_owner = filtervalue.ownerValue;
                    break;
            }
        }
        Object.keys(filtervalue).forEach(key => {
            if (filtervalue[key] === "") {
                delete filtervalue[key];
            }
        });
        const u = new URLSearchParams(filtervalue).toString();
        console.log(u)
        dispatch(applyfilter({ token: localStorage.getItem('token'), filter: u }))
    }

    const { campaign_filters, pipeline_filter, status_filter, advertizer_filters, owner_groups, filtered_result, isFetching, isSuccess, isError, error } = useSelector(campaignManagerSelector)
    console.log("Campaign", campaign_filters)
    console.log("pipeline", pipeline_filter)
    console.log("status", status_filter)
    console.log("advertizer", advertizer_filters)
    console.log("owners", owner_groups)
    console.log("filtered_result", filtered_result)
    useEffect(() => {
        dispatch(campaignfilter({ token: localStorage.getItem('token') }))
        dispatch(pipelinefilter({ token: localStorage.getItem('token') }))
        dispatch(statusfilter({ token: localStorage.getItem('token') }))
        dispatch(advertizerfilter({ token: localStorage.getItem('token') }))
    }, [])

    const get_owners = (e) => {
        setFilterValue({ ...filtervalue, ownerType: e.target.value, ownerValue: "" })
        if (e.target.value != "") {
            dispatch(getowners({ token: localStorage.getItem('token'), ownergroup: e.target.value }))
        }

    }


    const gotonext=(dealId)=>{
        console.log(dealId)
        navigation('/mediaplan',{state:{dealid:dealId}});
    }
    const advert = [
        {
            id: 1,
            Media_Plan: "Hs Campaign Name",
            market: "Hs Pipeline",
            status: "emable"
        },
        {
            id: 4,
            Media_Plan: "Hs Campaign Name",
            market: "Hs Pipeline",
            status: "emable"
        },
        {
            id: 3,
            Media_Plan: "Hs Campaign Name",
            market: "Hs Pipeline",
            status: "emable"
        },
        {
            id: 2,
            Media_Plan: "Hs Campaign Name",
            market: "Hs Pipeline",
            status: "emable"
        }
    ]
    const campaign = [
        {
            Campiagn_id: 1,
            CampaignName: "ultivic",
            Product: "my demo",
            MPcurrency: 200,
            BudgetUSD: 500,
            Start_date: 12,
            End_date: 15,
            Status: 'enabel'
        }

    ]
    return (
        <div className="content_outer">
            <div className="content">
                <div className="App">
                    <div className='campiagn_outer'>
                        <div className="campiagn_filter">
                            <div className='add_filter'>
                                <div className='filter_menu'>
                                <Col lg={1}>
                                            <h3 className='m-0 mb-3'>Filter</h3>
                                        </Col>
                                    <Row>
                                      
                                        <Col md={4} lg={2} >
                                        <div className="owner">
                                            <Form.Group  controlId="formBasicEmail">
                                                <Form.Label>Advertiser</Form.Label>
                                                <Form.Select aria-label="Default select example" onChange={(e) => { setFilterValue({ ...filtervalue, advertiser: e.target.value.trim() }) }}>
                                                    <option value="">Select</option>
                                                    {advertizer_filters.map((advertiser, index) => {
                                                        return (
                                                            <option value={advertiser?.name} key={index}>{advertiser?.name}</option>
                                                        )
                                                    })}
                                                </Form.Select>
                                            </Form.Group>
                                            </div>
                                        </Col>
                                        <Col md={4} lg={2} >
                                        <div className="owner">
                                            <Form.Group  controlId="formBasicEmail">
                                                <Form.Label>Id Media Plan</Form.Label>
                                                <Form.Select aria-label="Default select example" onChange={(e) => { setFilterValue({ ...filtervalue, campaign: e.target.value.trim() }) }}>
                                                    <option value="">Select</option>
                                                    {campaign_filters.map((camp, index) => {
                                                        return (
                                                            <option value={camp?.campaign} key={index}>{camp?.campaign}</option>
                                                        )
                                                    })}
                                                </Form.Select>
                                            </Form.Group>
                                            </div>
                                        </Col>
                                        <Col lg={2} >
                                        <div className="owner">
                                            <Form.Group  controlId="formBasicEmail">
                                                <Form.Label>Marketing</Form.Label>
                                                <Form.Select aria-label="Default select example" onChange={(e) => { setFilterValue({ ...filtervalue, pipeline: e.target.value }) }}>
                                                    <option value="">Select</option>
                                                    {pipeline_filter.map((pipeline, index) => {
                                                        return <option value={pipeline?.pipelineID} key={index}>{pipeline?.label}</option>
                                                    })}
                                                </Form.Select>
                                            </Form.Group>
                                            </div>
                                        </Col>
                                       <Col lg={3} >
                                      <div className='owner'>
                                                <Form.Label>Owner</Form.Label>
                                      <Row>
                                        <Col lg={6}>
                                            <Form.Group  controlId="formBasicEmail">
                                          
                                                <Form.Select aria-label="Default select example" onChange={get_owners} >
                                                    <option value="">Select</option>
                                                    <option value='1'>Sales</option>
                                                    <option value='3'>Adops</option>
                                                    <option value='4'>Account</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group  controlId="formBasicEmail">
                                               
                                                <Form.Select aria-label="Default select example" onChange={(e) => { setFilterValue({ ...filtervalue, ownerValue: e.target.value }) }}>
                                                    <option value="">Select option</option>
                                                    {owner_groups.map((owner, index) => {
                                                        return <option value={owner?.email} key={index}>{owner?.first_name} {owner?.last_name}</option>
                                                    })}
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        </Row>
                                      </div>
                                       </Col>
                                        <Col lg={2}  >
                                            <div className="owner">
                                            <Form.Group  controlId="formBasicEmail">
                                                <Form.Label>Status</Form.Label>
                                                <Form.Select aria-label="Default select example" onChange={(e) => { setFilterValue({ ...filtervalue, status: e.target.value }) }}>
                                                    <option value="">Select account</option>
                                                    {status_filter.map((status, index) => {
                                                        return <option key={index} value={status?.idStatus} >{status.label}</option>
                                                    })}
                                                </Form.Select>
                                            </Form.Group></div>
                                        </Col>
                                        <Col lg={1}>
                                            <label htmlFor="" className='opacity-0 mt-4'>go</label>
                                            <button className='cmn_btn ms-0' onClick={searchFilter}>Go</button></Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* filter ends */}
                    <div className='advert_tabel'>
                        <Table responsive="sm" bordered >
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Media Plan</th>
                                    <th>Market</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered_result.map((curelem, index) => {
                                    return (
                                        <tr key={index} onClick={()=>{ gotonext(curelem?.id)}}>
                                            <td>{curelem?.dealId}</td>
                                            <td>{curelem?.campaign}</td>
                                            <td>{curelem?.pipeline}</td>
                                            <td>{curelem?.statusNavigation?.label}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CampaignPage;