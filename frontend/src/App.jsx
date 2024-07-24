import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import Navbar from './components/NavBar';
import Cart from './components/Cart';
import Login from './components/Login';
import AboutPage from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import AddGame from './components/AddGame';
import { ThemeProvider } from './ThemeContext';
import { Toaster } from 'react-hot-toast';


function App() {
    return ( <ThemeProvider>
        <BrowserRouter>
            <div>
            <Toaster/> 
            <Toaster/> 
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/login" element={<HomePage />} />
                    <Route path="/games" element={<GamePage />} />
                    <Route path="/contacts" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/add game" element={<AddGame />} />
                    <Route path="/about" element={<AboutPage />} /> 
                </Routes>
            </div>

        </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;



