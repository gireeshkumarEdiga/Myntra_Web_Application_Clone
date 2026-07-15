import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Header/Header';
import Home from './Home';
import Footer from './Footer/Footer';
import Login  from './Login';
import Signup from './Signup';
import Products from './Products';
import PaymentView from './PaymentView';
import ProductDetailsView from './ProductDetailsView';
import Cart from './Cart';
import AddressPage from './AddressPage';

const Main = () => {
  return (
    <div>
      
      <BrowserRouter>
    
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/products' element={<Products />} />
            <Route path='/paymentView' element={<PaymentView />} />
            <Route path='/productDetailsView' element={<ProductDetailsView />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/address' element={<AddressPage />} />
        </Routes>
        <Footer />

      </BrowserRouter>

    </div>
  )
}

export default Main
