import React from 'react';
import logo from '../../assets/images/eco-logo.png'
import './footer.scss'
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='4' className='md-6'>
                        <div className="logo">
                            
                            <div className='logo__row'>
                                <h1 className='text-white'>Multimart</h1>
                            </div>
                        </div>
                        <p className="footer__text mt-4 mb-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Tempore reprehenderit similique itaque molestias dignissimos
                            porro iste ipsam nesciunt dolores exercitationem.
                        </p>
                    </Col>
                    <Col md='3' lg='3' className='mb-4' >
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Top Categories</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Mobile Phones</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Modern Sofa</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Arm Chair</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Smart Watches</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='2' className='mb-4' md='3'>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Userfull Links</h4>
                            <ListGroup className='mb-3'>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/shop'>Shop</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/cart'>Cart</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='/login'>Login</Link>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to='#'>Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='3' md='4'>
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Contacts</h4>
                            <ListGroup className='footer__contacts'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className="ri-map-pin-line"></i></span>
                                    <p>124 ZindaBazar, Sylhet, Bangladesh</p>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className="ri-phone-line"></i></span>
                                    <p>+79146734088</p>
                                </ListGroupItem>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i className="ri-mail-line"></i></span>
                                    <p>examle@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='12'>
                        <p className="footer__copyright">
                            Copyright {year}, developed by Arina. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
