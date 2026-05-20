import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Login from './components/Login';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App () {
    useEffect (() => {
        AOS.init ({
            duration: 1000,
            once: false,
        })
    } , [] );

return (

<HashRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
    </HashRouter>

)

}

export default App;