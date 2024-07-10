import React from 'react';
import Navbar from './NavBar';
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="background-image">
        <img src="https://media.istockphoto.com/id/1662909784/photo/american-football-arena-with-yellow-goal-post-grass-field-and-blurred-fans-at-playground-view.webp?b=1&s=170667a&w=0&k=20&c=hqYfWF03GFzy58AhkTIOvQR7zjWT0ug7KsuVvd_qw1Y=" alt="Background" />
      </div>
      <div className="homepage-content">
        <h1>Welcome to Our Game Platform</h1>
        <p>Explore the latest games available in our store.</p>
        <Link to="/games" className="homepage-link">Go to Games</Link>
      </div>
    </div>
  );
}

export default HomePage;
