import React from 'react';
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage-container">
      
      <div className="background-image">
        <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background" />
      </div>
      <div className="homepage-content">
        <h1>Welcome to E-GAME</h1>
        <p>Explore the latest games available in our store.</p>
        <Link to="/games" className="homepage-link">Checkout our Games</Link>
      </div>
    </div>
  );
}

export default HomePage;
