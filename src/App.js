import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import { Routes, Route, Navigate } from 'react-router-dom';

import Cart from './Pages/Cart';
import ProductDetails from './Pages/ProductDetails';
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import Checkout from './Pages/Checkout';
function App() {
    return <>
    <Header/>
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/home' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Footer/>
    </>
}

export default App;
