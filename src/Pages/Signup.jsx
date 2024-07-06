import React, { useState } from 'react';
import Helmemt from '../components/Helmemt/Helmemt';
import { Container, Row, Col, FormGroup, Form } from 'reactstrap'
import { Link } from 'react-router-dom';
import '../styles/login.scss'
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage' 
import { setDoc, doc } from 'firebase/firestore';
import { auth } from '../firebase.config';
import { storage } from '../firebase.config';
import { db } from '../firebase.config';
import {toast} from 'react-toastify'
const Signup = () => {

    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    // const signup = async(e)=>{
    //     e.preventDefault()
    //     setLoading(true)
    //     try {
    //         const userCredential = await createUserWithEmailAndPassword(auth, email, password)


    //         const user = userCredential.user
    //         const storageRef = ref(storage, `images/${Date.now() + userName}`)
    //         const uploadTask = uploadBytesResumable(storageRef, file)
          
    //         uploadTask.on((error)=>{
    //             error.message
    //         },()=>{
    //             getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{

    //                // update user profile 
    //                await updateProfile(user,{
    //                     displayName:userName,
    //                     photoURL:downloadURL,   
    //                 })
    //                 // store user data in firestore database

    //                 await setDoc(doc(db,'users', user.uid),{
    //                     uid:user.uid,
    //                     displayName:userName,
    //                     email,
    //                     photoURL: downloadURL
    //                 })


    //             })
    //         })
            
    //     } catch (error) {
    //         toast.error('Something went wrong')
    //     }
    // }

    return (
        <Helmemt title='Signup'>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' className='m-auto text-center'>
                            <h3 className=' fw-bold mb-4'>Signup</h3>
                            <Form className='auth__form'>

                                <FormGroup className='form__group'>
                                    <input type="text" placeholder='Username' onChange={e => setUserName(e.target.value)} value={userName} />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="email" placeholder='Enter your email' onChange={e => setEmail(e.target.value)} value={email} />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="password" placeholder='Enter your password' value={password} onChange={e => setPassword(e.target.value)} />
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type="file" onChange={e => setFile(e.target.files[0])} />
                                </FormGroup>

                                <button type='submit' className="buy__btn auth__btn">Create an Account</button>
                                <p>Alredy have an account? <Link to='/login'>Login</Link></p>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmemt>

    );
}

export default Signup;
