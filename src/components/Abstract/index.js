import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { MultiSelect } from "react-multi-select-component";
import './style.css';
const Abstract = () => {
    const countires = [
        { label: "Argentina ", value: "Argentina" },
        { label: "Brasil ", value: "Brasil" },
        { label: "Chile ", value: "Chile" },
        { label: "Colombia ", value: "Colombia" },
        { label: "México ", value: "México" },
        { label: "Perú ", value: "Perú" }
    ];
const genders =[
    { label: "Mujer ", value: "Mujer" },
    { label: "Varon ", value: "Varon" }
]
    const [selected, setSelected] = useState([]);
    const [gender, setGender] = useState([]);
    return (
        <>
            <div className="content_outer abstract_wrapper">
                <div className="content">
                    <div className="calculaterHeader">
                        <h6>Resumen</h6>
                        <div className="d-flex ms-auto">
                            <div className="d-flex align-items-center">
                                <img src="assets/images/country.png" alt="" />
                                <div>
                                  
                                    <MultiSelect
                                        options={countires}
                                        value={selected}
                                        onChange={setSelected}
                                        disableSearch={true}
                                        labelledBy="Select"
                                    />

                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                            <img src="assets/images/gender.png" alt="" />
                                <div>
                                  
                                    <MultiSelect
                                        options={genders}
                                        value={gender}
                                        onChange={setGender}
                                        disableSearch={true}
                                        labelledBy="Select"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                    <Row>
                        <Col lg={4}>
                            <div className="social_grid ">
                                <div className="bg_white youtube">
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
                            <div className="social_grid ">
                                <div className="bg_white robolox">
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
                            <div className="social_grid ">
                                <div className="bg_white kidscorp">
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

                                <div className="graph">
                                    <HighchartsReact highcharts={Highcharts} options={{
                                        chart: {
                                            type: 'column'
                                        },
                                        title: {
                                            align: 'center',
                                            text: '% Uso de Youtube por Edad'
                                        },

                                        accessibility: {
                                            announceNewData: {
                                                enabled: true
                                            }
                                        },
                                        xAxis: {
                                            type: 'category'
                                        },
                                        yAxis: {
                                            title: {
                                                text: false
                                            }

                                        },
                                        legend: {
                                            enabled: false
                                        },
                                        plotOptions: {
                                            series: {
                                                borderWidth: 0,
                                                dataLabels: {
                                                    enabled: true,
                                                    format: '{point.y:.1f}%'
                                                }
                                            }
                                        },

                                        tooltip: {
                                            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                                            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                                        },
                                        series: [
                                            {
                                                name: "Browsers",
                                                colorByPoint: true,
                                                data: [
                                                    {
                                                        name: "4a6",
                                                        y: 63.06,
                                                        drilldown: "4a6"
                                                    },
                                                    {
                                                        name: "7a9",
                                                        y: 19.84,
                                                        drilldown: "7a9"
                                                    },
                                                    {
                                                        name: "10a12",
                                                        y: 4.18,
                                                        drilldown: "10a12"
                                                    },
                                                    {
                                                        name: "13a18",
                                                        y: 4.12,
                                                        drilldown: "13a18"
                                                    },


                                                ]
                                            }
                                        ],


                                    }} />
                                </div>
                            </div>
                            <div className="graph_grid">

                                <div className="graph">
                                    <HighchartsReact highcharts={Highcharts} options={{
                                        title: {
                                            text: 'Poblacion Proyectada de Youtube por Edad'
                                        },



                                        yAxis: {
                                            title: {
                                                text: false
                                            }
                                        },

                                        xAxis: {
                                            categories: ['4a6', '7a9', '10a12', '13a18',]
                                        },

                                        legend: {
                                            layout: 'vertical',
                                            align: 'right',
                                            verticalAlign: 'middle'
                                        },

                                        plotOptions: {
                                            line: {
                                                dataLabels: {
                                                    enabled: true
                                                },
                                                enableMouseTracking: false
                                            }
                                        },

                                        series: [{
                                            name: '',
                                            data: [16.0, 18.2, 23.1, 27.9]
                                        }],

                                        responsive: {
                                            rules: [{
                                                condition: {
                                                    maxWidth: 500
                                                },
                                                chartOptions: {
                                                    legend: {
                                                        layout: 'horizontal',
                                                        align: 'center',
                                                        verticalAlign: 'bottom'
                                                    }
                                                }
                                            }]
                                        }

                                    }} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="graph_grid">

                                <div className="graph">
                                    <HighchartsReact highcharts={Highcharts} options={{
                                        chart: {
                                            type: 'column'
                                        },
                                        title: {
                                            align: 'center',
                                            text: '% Uso de Roblox por Edad'
                                        },

                                        accessibility: {
                                            announceNewData: {
                                                enabled: true
                                            }
                                        },
                                        xAxis: {
                                            type: 'category'
                                        },
                                        yAxis: {
                                            title: {
                                                text: false
                                            }

                                        },
                                        legend: {
                                            enabled: false
                                        },
                                        plotOptions: {
                                            series: {
                                                borderWidth: 0,
                                                dataLabels: {
                                                    enabled: true,
                                                    format: '{point.y:.1f}%'
                                                }
                                            }
                                        },

                                        tooltip: {
                                            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                                            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                                        },
                                        series: [
                                            {
                                                name: "Browsers",
                                                colorByPoint: true,
                                                data: [
                                                    {
                                                        name: "4a6",
                                                        y: 63.06,
                                                        drilldown: "4a6"
                                                    },
                                                    {
                                                        name: "7a9",
                                                        y: 19.84,
                                                        drilldown: "7a9"
                                                    },
                                                    {
                                                        name: "10a12",
                                                        y: 4.18,
                                                        drilldown: "10a12"
                                                    },
                                                    {
                                                        name: "13a18",
                                                        y: 4.12,
                                                        drilldown: "13a18"
                                                    },


                                                ]
                                            }
                                        ],


                                    }} />
                                </div>
                            </div>
                            <div className="graph_grid">

                                <div className="graph">
                                    <HighchartsReact highcharts={Highcharts} options={{
                                        title: {
                                            text: 'Poblacion Proyectada de Roblox por Edad'
                                        },



                                        yAxis: {
                                            title: {
                                                text: false
                                            }
                                        },

                                        xAxis: {
                                            categories: ['4a6', '7a9', '10a12', '13a18',]
                                        },

                                        legend: {
                                            layout: 'vertical',
                                            align: 'right',
                                            verticalAlign: 'middle'
                                        },

                                        plotOptions: {
                                            line: {
                                                dataLabels: {
                                                    enabled: true
                                                },
                                                enableMouseTracking: false
                                            }
                                        },

                                        series: [{
                                            name: '',
                                            data: [16.0, 18.2, 23.1, 27.9]
                                        }],

                                        responsive: {
                                            rules: [{
                                                condition: {
                                                    maxWidth: 500
                                                },
                                                chartOptions: {
                                                    legend: {
                                                        layout: 'horizontal',
                                                        align: 'center',
                                                        verticalAlign: 'bottom'
                                                    }
                                                }
                                            }]
                                        }

                                    }} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="graph_grid">

                                <div className="graph">
                                    <HighchartsReact highcharts={Highcharts} options={{
                                        chart: {
                                            type: 'column'
                                        },
                                        title: {
                                            align: 'center',
                                            text: '% Uso de Kidscorp Apps por Edad'
                                        },

                                        accessibility: {
                                            announceNewData: {
                                                enabled: true
                                            }
                                        },
                                        xAxis: {
                                            type: 'category'
                                        },
                                        yAxis: {
                                            title: {
                                                text: false
                                            }

                                        },
                                        legend: {
                                            enabled: false
                                        },
                                        plotOptions: {
                                            series: {
                                                borderWidth: 0,
                                                dataLabels: {
                                                    enabled: true,
                                                    format: '{point.y:.1f}%'
                                                }
                                            }
                                        },

                                        tooltip: {
                                            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                                            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                                        },
                                        series: [
                                            {
                                                name: "Browsers",
                                                colorByPoint: true,
                                                data: [
                                                    {
                                                        name: "4a6",
                                                        y: 63.06,
                                                        drilldown: "4a6"
                                                    },
                                                    {
                                                        name: "7a9",
                                                        y: 19.84,
                                                        drilldown: "7a9"
                                                    },
                                                    {
                                                        name: "10a12",
                                                        y: 4.18,
                                                        drilldown: "10a12"
                                                    },
                                                    {
                                                        name: "13a18",
                                                        y: 4.12,
                                                        drilldown: "13a18"
                                                    },


                                                ]
                                            }
                                        ],


                                    }} />
                                </div>
                            </div>
                            <div className="graph_grid">

                                <div className="graph">
                                    <HighchartsReact highcharts={Highcharts} options={{
                                        title: {
                                            text: 'Poblacion Proyectada de Kidscorp Apps por Edad'
                                        },



                                        yAxis: {
                                            title: {
                                                text: false
                                            }
                                        },

                                        xAxis: {
                                            categories: ['4a6', '7a9', '10a12', '13a18',]
                                        },

                                        legend: {
                                            layout: 'vertical',
                                            align: 'right',
                                            verticalAlign: 'middle'
                                        },

                                        plotOptions: {
                                            line: {
                                                dataLabels: {
                                                    enabled: true
                                                },
                                                enableMouseTracking: false
                                            }
                                        },

                                        series: [{
                                            name: '',
                                            data: [16.0, 18.2, 23.1, 27.9]
                                        }],

                                        responsive: {
                                            rules: [{
                                                condition: {
                                                    maxWidth: 500
                                                },
                                                chartOptions: {
                                                    legend: {
                                                        layout: 'horizontal',
                                                        align: 'center',
                                                        verticalAlign: 'bottom'
                                                    }
                                                }
                                            }]
                                        }

                                    }} />
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