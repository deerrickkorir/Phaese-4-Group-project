import React, { useState, useContext } from "react";
import toast from 'react-hot-toast';
import "./GamePage.css";
import logo from "../assets/search_3694304.png";
import { ThemeContext } from '../ThemeContext';

function GamePage() {
  const [category, setCategory] = useState("Games");
  const [backgroundImage, setBackgroundImage] = useState(
    "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
  );
  const { cartItems, setCartItems, actions, adventures, racings, shooters } = useContext(ThemeContext);
  const [data, setData] = useState(actions);
  const [filteredData, setFilteredData] = useState(actions);
  console.log(actions);

  function handleCategories(category) {
    switch (category) {
      case "Actions":
        setData(actions);
        setCategory(category);
        setFilteredData(actions);
        setBackgroundImage(
          "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
        );
        break;
      case "Adventures":
        setData(adventures);
        setCategory(category);
        setFilteredData(adventures);
        setBackgroundImage(
          "https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg"
        );
        break;
      case "Racings":
        setData(racings);
        setCategory(category);
        setFilteredData(racings);
        setBackgroundImage(
          "https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg"
        );
        break;
      case "Shooters":
        setData(shooters);
        setCategory(category);
        setFilteredData(shooters);
        setBackgroundImage(
          "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
        );
        break;
      default:
        return;
    }
  }

  const handleFilterChange = (event) => {
    const value = event.target.value.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // Update the quantity of the existing item
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      // Add the new item to the cart
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    toast.success('Game added to cart!')
  };

  return (
    <div
      className="game-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            onChange={handleFilterChange}
          />
        </div>
      </header>
      <h1 className="header-content">{category}</h1>
      <div className="content">
        <aside className="sidebar">
          <h2>Categories</h2>
          <ul>
            <li onClick={() => handleCategories("Actions")}>Action</li>
            <li onClick={() => handleCategories("Adventures")}>Adventure</li>
            <li onClick={() => handleCategories("Racings")}>Racing</li>
            <li onClick={() => handleCategories("Shooters")}>Shooter</li>
          </ul>
        </aside>
        <div className="card-container">
          {filteredData.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="card-content">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <a className='btn' onClick={() => addToCart(item)}>
                  Add to Cart
                </a>
              </div>
            </div>
          ))}
          {filteredData.length === 0 && (
            <p>No results found for your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GamePage;
