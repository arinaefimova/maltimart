import React, { useRef, useEffect } from 'react';
import './header.scss'
import { Container, Row } from 'reactstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/eco-logo.png'
import user_icon from '../../assets/images/user-icon.png'
import { useSelector } from 'react-redux';
const nav__links = [
    {
        path: "/home",
        display: 'Home'
    },
    {
        path: "/shop",
        display: 'Shop'
    },
    {
        path: "/cart",
        display: 'Cart'
    },
]

const Header = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const stickyHeaderFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('sticky__header');
        } else {
            headerRef.current.classList.remove('sticky__header');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', stickyHeaderFunc);
        return () => {
            window.removeEventListener('scroll', stickyHeaderFunc);
        };
    }, []);

    const menuToggle = () => {
        menuRef.current.classList.toggle('active__menu')
        
    }
    const navigate = useNavigate()
    const navigateToCart=()=>{
         navigate('/cart')
    }

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper">
                        <div className="logo">
                            <img src={logo} alt="" />
                            <div className='logo__row'>
                                <h1>Multimart</h1>
                                <p>Since 1995</p>
                            </div>
                        </div>
                        <div className="navigation" ref={menuRef} onClick={() => menuToggle()}>
                            <ul className="menu">
                            
                  
                                {
                                    nav__links.map((item, index) => {
                                        return (
                                            <li key={index} className="nav__item">
                                                <NavLink className={(navClass => navClass.isActive ? 'nav__active' : '')} to={item.path}>{item.display}</NavLink>
                                            </li>
                                        )
                                    })
                                }



                            </ul>
                        </div>
                        <div className="nav__icons ">
                            <span className='fav__icon'>
                                <i className="ri-heart-3-line heart"></i>
                                <span className="badge">1</span>
                            </span>
                            <span className="cart__icon" onClick={()=>navigateToCart()}>
                                <i className="ri-shopping-bag-line"></i>
                                <span className="badge">{totalQuantity}</span>
                            </span>
                            <span>
                                <Link to='/login'><img src={user_icon} alt="" /></Link>
                            </span>
                            <div className="mobile__menu">
                                <span onClick={()=>menuToggle()}>
                                    <i className="ri-menu-line"></i>
                                </span>
                            </div>
                        </div>

                    </div>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
