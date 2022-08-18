import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';



const Calculater = () => {
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
                                 Incidencia <img className="icon" src="assets/images/country.png" alt=""  /> 
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
                            Producto <img className="icon" src="assets/images/production.png" alt=""  />  
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
                           
                        </div>
                    </Col>
                    <Col lg={4}>
                    <div className="graph_grid white_bg">
                            <h4>Poblacion Proyectada</h4>
                            <p className="value">5,054,402</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        </div>
    )
}

export default Calculater