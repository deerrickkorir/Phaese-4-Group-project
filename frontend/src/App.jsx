import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import MoviesPage from './components/MoviesPage';
import Cart from './components/Cart';
import Login from './components/Login';
import OrderHistory from './components/OrderHistory';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/games" element={<GamePage />} />
                    <Route path="/movies" element={< MoviesPage/>} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/order-history" element={<OrderHistory />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;



