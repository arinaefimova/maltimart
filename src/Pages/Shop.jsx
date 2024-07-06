import React, { useState } from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmemt from '../components/Helmemt/Helmemt';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.scss'
import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductsList';
const Shop = () => {

    const [productsData, setProductsData] = useState(products)
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    const handleFilter = (e) => {
        const filterValue = e.target.value;
        setFilter(filterValue);
        updateProducts(filterValue, sortOrder, search);
    };

    const handleSort = (e) => {
        const sortValue = e.target.value;
        setSortOrder(sortValue);
        updateProducts(filter, sortValue, search);
    };

    const handleSearch = e => {

        const searchValue = e.target.value
        setSearch(searchValue)
        updateProducts(filter, sortOrder, searchValue)
    }

    const updateProducts = (filterValue, sortOrder, searchValue) => { 
        let filteredProducts = filterValue
            ? products.filter(item => item.category === filterValue)
            : products;

        if (sortOrder === 'ascending') {
            filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'descending') {
            filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
        }
        if (searchValue) {
            filteredProducts = filteredProducts.filter(item =>
                item.productName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
            )
        }

        setProductsData(filteredProducts);
    };


    return (

        <Helmemt title='Shop'>
            <CommonSection title='Products' />
            <section>
                <Container>
                    <Row>
                        <Col lg='3' md='6'>
                            <div className="filter__widget">
                                <select onChange={(e) => handleFilter(e)} className="form-select" id="category-select" >
                                    <option value='' >Filter By Category</option>
                                    <option value="sofa">Sofa</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="chair">Chair</option>
                                    <option value="watch">Watch</option>
                                    <option value="wireless">Wireless</option>
                                </select>


                            </div>
                        </Col>
                        <Col lg='3' md='6' className='text-end'>
                            <div className="filter__widget">
                                <select onClick={(e) => handleSort(e)} className="form-select">
                                    <option >Sort By</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending</option>

                                </select>
                            </div>
                        </Col>
                        <Col lg='6' md='12'>
                            <div className="search__box">
                                <input onChange={(e) => handleSearch(e)} type="text" placeholder='Search....' />
                                <span><i className="ri-search-line"></i></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='pt-0'>
                <Container>
                    <Row>
                        {
                            productsData.length === 0 ? <h1 className='text-center fs-4'>No products are found</h1>
                                : <ProductsList data={productsData} />
                        }
                    </Row>
                </Container>
            </section>
        </Helmemt >

    );
}

export default Shop;
