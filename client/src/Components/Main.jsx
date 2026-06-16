import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Header/Header';
import Home from './Home';
import Footer from './Footer/Footer';

const Main = () => {
  return (
    <div>
      
      <BrowserRouter>
    
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Footer />

      </BrowserRouter>

    </div>
  )
}

export default Main
