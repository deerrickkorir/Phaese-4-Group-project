import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import Navbar from './components/NavBar';
import Cart from './components/Cart';
import Login from './components/Login';
import AboutPage from './components/About';
import SignUp from './components/SignUp'; // Import the SignUp component
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import AddGame from './components/AddGame';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/games" element={<GamePage />} />
                    <Route path="/contacts" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/signUp" element={<SignUp />} /> {/* Add the SignUp route */}
                    <Route path="/add game" element={<AddGame />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
