import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import Navbar from './components/NavBar';
import Cart from './components/Cart';
import Login from './components/Login';
import OrderHistory from './components/OrderHistory';
import AboutPage from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/games" element={<GamePage />} />

                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/order-history" element={<OrderHistory />} />
                    <Route path="/about" element={<AboutPage />} /> 
                </Routes>
            </div>

        </BrowserRouter>
    );
}

export default App;



