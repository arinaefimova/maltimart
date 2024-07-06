import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmemt from '../components/Helmemt/Helmemt'
import CommonSection from '../components/UI/CommonSection';
import { Rate } from 'antd';
import '../styles/product-details.scss'
import ProductsList from '../components/UI/ProductsList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
// import 
const ProductDetails = () => {
    const [tab, setTab] = useState('desc')
    const reviewUser = useRef('')
    const reviewMsg = useRef('')
    const { id } = useParams()
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [rating, setRating] = useState(1);
    const [addReview, setAddReview] = useState({})
    const dispatch = useDispatch()
    const product = products.find(item =>
        item.id === id

    )
    
    console.log(addReview)
    const handleNameChange = (value) => {
        setName(value)
    }
    const handleTextChange = (value) => {
        setText(value)
    }

    const handleRatingChange = (value) => {
        setRating(value);
    };


    const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product

    const relatedProducts = products.filter(item => item.category === category)

    const submitHandler = (e) => {
        e.preventDefault()
        const reviewUserName = reviewUser.current.value
        const reviewUserMsg = reviewMsg.current.value

        const reviewObj = {
            id,
            userName: reviewUserName,
            text: reviewUserMsg,
            rating

        }
        setAddReview(prevState => ({
            ...prevState,//Создается копия prevState.
            [id]: [...(prevState[id] || []), reviewObj]

        }));



        toast.success('Review Submitted')

    }
    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            image: imgUrl,
            productName,
            price,

        }))
        toast.success('Product added successfully')
    }

    useEffect(() => {

        window.scrollTo(0, 0)
    }, [product]);
    
    const currentReviews = addReview[id] || [];
    return (
        <Helmemt title={productName}>
            <CommonSection title={productName} />
            <section className='pt-0'>
                <Container>
                    <Row>
                        <Col lg='6' >
                            <img src={imgUrl} alt="" />
                        </Col>
                        <Col lg='6' >
                            <div className="product__details">
                                <h2>{productName}</h2>
                                <div className='product__rating d-flex align-items-center gap-5 mb-3'>
                                    <div>
                                        <Rate className='rate' allowHalf defaultValue={avgRating} />

                                    </div>
                                    <p><span>({avgRating})</span> ratings</p>
                                </div>

                                <div className='d-flex align-items-center gap-5'>
                                    <span className='product__price'>${price}</span>
                                    <span>Category :{category.toUpperCase()}</span>
                                </div>
                                <p className='mt-3'>{shortDesc}</p>
                                <button className="buy__btn" onClick={() => addToCart()}>Add to Cart</button>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
            <section>
                <Container>

                    <Row>
                        <Col lg='12'>

                            <div className="tab__wrapper d-flex align-items-center gap-5">
                                <h6 onClick={() => setTab('desc')} className={`${tab === 'desc' ? 'active__tab' : ''}`}>Description</h6>
                                <h6 onClick={() => setTab('rev')} className={`${tab === 'rev' ? 'active__tab' : ''}`}>Reviews ({reviews.length + currentReviews.length})</h6>
                            </div>

                            {
                                tab === 'desc' ? (
                                    <div className="tab__content mt-5">
                                        <p>{description}</p>

                                    </div>
                                ) :
                                    <div className='product__review mt-5'>

                                        <div className="review__wrapper">


                                            <div className="review__form mb-5">
                                                <h4>Leave your experience</h4>
                                                <form onSubmit={(e) => submitHandler(e)}>
                                                    <div className="form__group">
                                                        <input onChange={handleNameChange} required ref={reviewUser} type="text" placeholder='Enter name' />
                                                    </div>
                                                    <div className="form__group rate">
                                                        <Rate defaultValue={rating} onChange={handleRatingChange} />
                                                    </div>
                                                    <div className="form__group">
                                                        <textarea onChange={handleTextChange} required ref={reviewMsg} rows={4} type="text" placeholder='Review Message...' />
                                                    </div>
                                                    <button type='submit' className='buy__btn'>Submit</button>
                                                </form>
                                            </div>
                                            <ul>
                                                {
                                                    reviews?.map((item, index) => {
                                                        return (
                                                            <li key={index} className='mb-4'>
                                                                <h6>Jhon D</h6>
                                                                <span className='span'>{item.rating} (rating)</span>
                                                                <p>{item.text}</p>
                                                            </li>

                                                        )
                                                    })
                                                }
                                                
                                                {
                                                    currentReviews?.map((item, index) => {
                                                        return (
                                                            <li key={index} className='mb-4'>
                                                                <h6>{item.userName}</h6>
                                                                <span className='span'>{item.rating} (rating)</span>
                                                                <p>{item.text}</p>
                                                            </li>

                                                        )
                                                    })
                                                }

                                            </ul>


                                        </div>
                                    </div>

                            }

                        </Col>
                        <Col lg='12' className='mt-5'>
                            <h2 className="related__title">You might also like</h2>
                        </Col>
                        <ProductsList data={relatedProducts} />
                    </Row>
                </Container>
            </section>
        </Helmemt>
    );
}

export default ProductDetails;
