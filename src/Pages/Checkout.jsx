import React from 'react';
import { Container, Col, Row, Form, FormGroup } from 'reactstrap'
import Helmemt from '../components/Helmemt/Helmemt';
import CommonSection from '../components/UI/CommonSection';
import '../styles/checkout.scss'
import {useSelector} from 'react-redux'
const Checkout = () => {

    const totalQty = useSelector(state=>state.cart.totalQuantity)
    const totalAmount = useSelector(state=>state.cart.totalAmount)

    return (
        <Helmemt title='Checkout'>
            <CommonSection title='Checkout' />
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <h6 className='mb-4 fw-bold'>Billing Information</h6>
                            <Form className='billing__form'>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='Enter your name' />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="email" placeholder='Enter your email' />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="number" placeholder='Phone number' />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='Street address' />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='City' />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='Postal code' />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='Country' />
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col lg='4'>
                            <div className="checkout__cart">
                                <h6>Total Qty: <span>{totalQty} items</span></h6>
                                <h6>Subtotal: <span>${totalAmount}</span></h6>
                                <h6>
                                    <span>

                                        Shipping: <br />
                                        free shipping
                                    </span>
                                    <span>$0</span></h6>

                                <h4>Total cost: <span>${totalAmount}</span></h4>
                                <button className="buy__btn store__btn auth__btn  w-100">Place and order</button>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </Helmemt>
    );
}

export default Checkout;
