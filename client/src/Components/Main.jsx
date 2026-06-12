import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './Header/Header';
import Home from './Home';

const Main = () => {
  return (
    <div>
      
      <BrowserRouter>
    
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default Main
