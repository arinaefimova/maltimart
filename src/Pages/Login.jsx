import React, {useState} from 'react';
import Helmemt from '../components/Helmemt/Helmemt';
import {Container, Row, Col, FormGroup, Form} from 'reactstrap'
import { Link } from 'react-router-dom';
import '../styles/login.scss'
const Login = () => {

    const [email,setEmail] = useState('')
    const [password, setPassword]=useState('')

    return (
        <Helmemt title='Login'>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' className='m-auto text-center'>
                            <h3 className=' fw-bold mb-4'>Login</h3>
                            <Form className='auth__form'>
                                <FormGroup className='form__group'>
                                    <input type="email" placeholder='Enter your email' onChange={e=>setEmail(e.target.value)} value={email} />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="password" placeholder='Enter your password' value={password} onChange={e=>setPassword(e.target.value)}/>
                                </FormGroup>
                                <button type='submit' className="buy__btn auth__btn">Login</button>
                                <p>Don't have an account? <Link to='/signup'>Create an account</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmemt>
        
    );
}

export default Login;
