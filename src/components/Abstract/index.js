import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'
const Abstract = () => {
    return (
        <>
            <div className="content_outer abstract_wrapper">
                <div className="content">
                    <Row>
                        <Col lg={4}>
                            <div className="social_grid youtube">
                                <div className="bg_white">
                                    <div className="social_image">
                                        <img src="assets/images/youtube.png" alt="youtube" />
                                    </div>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="social_inner_grid">
                                                <h5>
                                                    Incidencia
                                                </h5>
                                                <h2>
                                                    75.80 %
                                                </h2>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="social_inner_grid">
                                                <h5>
                                                    Poblacion Proyectada
                                                </h5>
                                                <h2>
                                                    6,298,744
                                                </h2>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="social_grid youtube">
                                <div className="bg_white">
                                    <div className="social_image">
                                        <img src="assets/images/robolox.png" alt="youtube" />
                                    </div>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="social_inner_grid">
                                                <h5>
                                                    Incidencia
                                                </h5>
                                                <h2>
                                                    75.80 %
                                                </h2>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="social_inner_grid">
                                                <h5>
                                                    Poblacion Proyectada
                                                </h5>
                                                <h2>
                                                    6,298,744
                                                </h2>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="social_grid youtube">
                                <div className="bg_white">
                                    <div className="social_image">
                                        <img src="assets/images/kidscorp.png" alt="youtube" />
                                    </div>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="social_inner_grid">
                                                <h5>
                                                    Incidencia
                                                </h5>
                                                <h2>
                                                    75.80 %
                                                </h2>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="social_inner_grid">
                                                <h5>
                                                    Poblacion Proyectada
                                                </h5>
                                                <h2>
                                                    6,298,744
                                                </h2>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>   {/* social grid  */}
                    <Row>
                        <Col lg={4}>
                            <div className="graph_grid">
                                <h5>
                                    % Uso de Youtube por Edad
                                </h5>
                                <div className="graph">

                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="graph_grid">
                                <h5>
                                % Uso de Roblox por Edad
                                </h5>
                                <div className="graph">

                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="graph_grid">
                                <h5>
                                % Uso de Kidscorp Apps por Edad
                                </h5>
                                <div className="graph">

                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>  {/* Inner content */}
            </div>  {/* wrapper ends here */}
        </>
    )
}

export default Abstract;