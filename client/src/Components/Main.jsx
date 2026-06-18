import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Header/Header';
import Home from './Home';
import Footer from './Footer/Footer';
import Login  from './Login';
import Signup from './Signup';

const Main = () => {
  return (
    <div>
      
      <BrowserRouter>
    
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />

      </BrowserRouter>

    </div>
  )
}

export default Main
