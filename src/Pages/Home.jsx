import React, { useState, useEffect } from 'react';
import products from '../assets/data/products'
import Helmemt from '../components/Helmemt/Helmemt';
import { Container, Row, Col } from 'reactstrap'
import hero_img from '../assets/images/hero-img.png'
import '../styles/home.scss'
import Services from '../services/Services';
import counterImg from '../assets/images/counter-timer-img.png'
import { Link } from 'react-router-dom';
import ProductsList from '../components/UI/ProductsList';
import Clock from '../components/UI/Clock';
const Home = () => {

    const [trendingProducts, setTrendingProducts] = useState([])
    const [bestSalesProducts, setBestSalesProducts] = useState([])
    const [mobileProducts, setMobileProducts] = useState([])
    const [wirelessProducts, setWirelessProducts] = useState([])
    const [popularProducts, setPopularProducts] = useState([])
    useEffect(() => {

        const filteredTrendingProducts = products.filter(
            item => item.category === "chair"
        )
        const filteredbestSalesProducts = products.filter(
            item => item.category === "sofa"
        )

        const filteredMobileProducts = products.filter(
            item => item.category === "mobile"
        )
        const filteredWirelessProducts = products.filter(
            item => item.category === "wireless"
        )
        const filteredPopularProducts = products.filter(
            item => item.category === "watch"
        )
        setTrendingProducts(filteredTrendingProducts)
        setBestSalesProducts(filteredbestSalesProducts)
        setMobileProducts(filteredMobileProducts)
        setWirelessProducts(filteredWirelessProducts)
        setPopularProducts(filteredPopularProducts)

    }, []);
    const year = new Date().getFullYear()
    return (
        <>
            <Helmemt title={' Home'}>
                <section className="hero__section">
                    <Container>
                        <Row>
                            <Col lg='6' md='6'>
                                <div className="hero__content">
                                    <p className="hero__subtitle">Trending products in {year}</p>
                                    <h2>Make Your Interior More Minimalistic & Modern</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, sint. Excepturi recusandae accusantium placeat odio eius voluptatum sint, consequuntur hic?</p>
                                    <button className="buy__btn"><Link to='/shop'>SHOP NOW</Link></button>
                                </div>
                            </Col>
                            <Col lg='6' md='6'>
                                <div className='hero__image'>
                                    <img src={hero_img} alt="" />
                                </div>
                            </Col>



                        </Row>
                    </Container>
                </section>
                <Services />
                <section className="trending__products">
                    <Container>
                        <Row>
                            <Col lg='12' className='text-center'>
                                <h2 className="section__title">Trending Products</h2>
                            </Col>
                            <ProductsList data={trendingProducts} />
                        </Row>
                    </Container>
                </section>
                <section className="best__sales">
                    <Container>
                        <Row>
                            <Col lg='12' className='text-center'>
                                <h2 className="section__title">Best Sales</h2>
                            </Col>
                            <ProductsList data={bestSalesProducts} />
                        </Row>
                    </Container>
                </section>
                <section className="timer__count">
                    <Container>
                        <Row>
                            <Col lg='6' md='12' className='count__down-col' >
                                <div className="clock__top-content">
                                    <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                                    <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                                </div>
                                <Clock />
                                <button className="buy__btn store__btn"><Link to='/shop'> Visit Store</Link></button>
                            </Col>
                            <Col lg='6' md='12' className='text-end counter__img'>
                                <img src={counterImg} alt="" />
                            </Col>

                        </Row>
                    </Container>
                </section>
                <section className="new__arrivals">
                    <Container>
                        <Row>
                            <Col lg='12' className='text-center mb-2'>
                                <h2 className="section__title">New Arrivals</h2>
                            </Col>
                            <ProductsList data={mobileProducts} />
                            <ProductsList data={wirelessProducts} />
                        </Row>
                    </Container>
                </section>
                <section className="popular__category">
                    <Container>
                        <Row>
                            <Col lg='12' className='text-center'>
                                <h2 className="section__title mb-5">Populat in Category</h2>
                            </Col>
                            <ProductsList data={popularProducts} />
                           
                        </Row>
                    </Container>
                </section>
            </Helmemt>
        </>
    );
}

export default Home;
