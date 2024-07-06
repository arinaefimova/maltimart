

import React from 'react';
import './services.scss'
import { Container, Row, Col } from 'reactstrap'
import servicesData from '../assets/data/serviceData'
const Services = () => {
    return (
        <section className="services">
            <Container>
                <Row>
                    {
                        servicesData.map((item, index) => {
                            return (
                                <Col key={index} lg='3' md='4' >
                                    <div className="services__item" style={{background: `${item.bg}`}}>
                                        <span><i class={item.icon}></i></span>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.subtitle}</p>
                                        </div>
                                    </div>

                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>
        </section>
    );
}

export default Services;
