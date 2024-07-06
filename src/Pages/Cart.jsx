import React from 'react';
import '../styles/cart.scss'
import Helmemt from '../components/Helmemt/Helmemt';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';
const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)



    return (
        <Helmemt title='cart'>
            <CommonSection title='Shopping Cart' />
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {
                                cartItems.length === 0 ? <h2 className='fs-4 text-center'>No items added</h2> : (
                                    <table className='table bordered'>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th className='del'>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map((item, index) => {
                                                return (
                                                    <Tr item={item} key={index} />
                                                )
                                            })}

                                        </tbody>
                                    </table>
                                )
                            }

                        </Col>
                        <Col lg='3'>
                            <div>
                                <h6 className='d-flex align-items-center justify-content-between'>
                                    Subtotal
                                    <span className='fs-4 fw-bold'>${totalAmount}</span>
                                </h6>
                            </div>
                            <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
                            <div>
                                <button className='buy__btn w-100 '><Link to='/checkout'>Checkout</Link></button>
                                <button className='buy__btn w-100 mt-3'><Link to='/shop'>Continue shopping</Link></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmemt>
    );


}
const Tr = ({ item }) => {

    const dispatch = useDispatch()
    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
        toast.success('Product removed successfully')
    }

    return (
        <tr >
            <td><img src={item.image} alt="" /></td>
            <td>{item.productName}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td onClick={() => deleteProduct()}><i className="ri-delete-bin-6-line"></i></td>
        </tr>
    )
}

export default Cart;
