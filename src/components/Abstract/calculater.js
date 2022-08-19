import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { reportSelector , clearState ,index } from '../../app/features/Report/reportSlice';
import {useSelector , useDispatch} from 'react-redux';

const percentage = 66;

const Calculater = () => {
    const dispatch = useDispatch();
    const {countries,products,ageRanges ,isFetching ,isError ,isSuccess , error } = useSelector(
        reportSelector
    );

    useEffect(() => {
        dispatch(index({}))

    }, [])

    return (
        <div><div className="content_outer abstract_wrapper">
            <div className="content">
                <div className="calculaterHeader">
                    <h6>Resumen</h6>

                </div>
                <Row>
                    <Col lg={6}>
                        <div className="graph_grid white_bg">
                            <h5>
                                Incidencia <img className="icon" src="assets/images/country.png" alt="" />
                            </h5>
                            <Form.Group className="mb-3 mt-3">
                                <Form.Select >
                                    <option> Argentina </option>
                                    <option> Brasil </option>
                                    <option> Chile </option>
                                    <option> Colombia</option>
                                    <option> México </option>
                                    <option> Perú </option>

                                </Form.Select>
                            </Form.Group>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="graph_grid white_bg">
                            <h5>
                                Producto <img className="icon" src="assets/images/production.png" alt="" />
                            </h5>
                            <Form.Group className="mb-3 mt-3">
                                <Form.Select >
                                    <option> Apps Kidscorp </option>
                                    <option> Robolox </option>
                                    <option> You tube </option>

                                </Form.Select>
                            </Form.Group>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <div className="graph_grid white_bg">
                            <h4>Poblacion Conectada</h4>
                            <p className="value">5,054,402</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="graph_grid white_bg">
                            <h4>Incidencia %</h4>
                            <div className="circle_bar">
                                <CircularProgressbar
                                    value={percentage}
                                    strokeWidth={4}
                                    text={`${percentage}%`}
                                    circleRatio={0.50}
                                    styles={buildStyles({
                                        rotation: 1 / 4 + 1 / 2,
                                        strokeLinecap: "butt",
                                        trailColor: "#eee",
                                        text: {
                                            // Text color
                                            fill: '#f88',
                                            // Text size
                                            fontSize: '16px',
                                        },
                                    })}

                                />;
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="graph_grid white_bg">
                            <h4>Poblacion Proyectada</h4>
                            <p className="value">5,054,402</p>
                        </div>
                    </Col>

                    <Col lg={12}>
                        <div className="graph_grid white_bg">
                            <h4>Poblacion Proyectada</h4>
                            <HighchartsReact highcharts={Highcharts} options={{

                                chart: {
                                    plotBackgroundColor: null,
                                    plotBorderWidth: 0,
                                    plotShadow: false
                                },
                                title: {
                                    text: 'Browser<br>shares<br>January<br>2022',
                                    align: 'center',
                                    verticalAlign: 'middle',
                                    y: 60
                                },
                                tooltip: {
                                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                                },
                                accessibility: {
                                    point: {
                                        valueSuffix: '%'
                                    }
                                },
                                plotOptions: {
                                    pie: {
                                        dataLabels: {
                                            enabled: true,
                                            distance: -50,
                                            style: {
                                                fontWeight: 'bold',
                                                color: 'white'
                                            }
                                        },

                                    }
                                },
                                series: [{
                                    type: 'pie',
                                    name: 'Browser share',
                                    innerSize: '50%',
                                    data: [
                                        ['Chrome', 73.86],
                                        ['Edge', 11.97],
                                        ['Firefox', 5.52],
                                        ['Safari', 2.98],
                                        ['Internet Explorer', 1.90],
                                        {
                                            name: 'Other',
                                            y: 3.77,
                                            dataLabels: {
                                                enabled: false
                                            }
                                        }
                                    ]
                                }]

                            }} />
                        </div>

                    </Col>
                </Row>
            </div>
        </div>
        </div>
    )
}

export default Calculater