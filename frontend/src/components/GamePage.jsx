import React, { useState, useEffect } from 'react';
import './GamePage.css';
import logo from '../assets/search_3694304.png';

function GamePage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [url, setUrl] = useState('http://127.0.0.1:5555/actions'); // Default category

  useEffect(() => {
    fetchData();
  }, []); // Run the effect only once

  const fetchData = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setFilteredData(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  function handleCategories(category) {
    switch (category) {
      case 'actions':
        setUrl('http://127.0.0.1:5555/actions')
        fetchData()
        break;
      case 'adventures':
        setUrl('http://127.0.0.1:5555/adventures')
        fetchData()
        break;
      case 'racings':
        setUrl('http://127.0.0.1:5555/racings')
        fetchData()
        break;
      case 'shooters':
        setUrl('http://127.0.0.1:5555/shooters')
        fetchData()
        break;
      default:
        break;
    }
    
  }

  // Handle filter input change
  const handleFilterChange = event => {
    const value = event.target.value.toLowerCase();
    // Filter data based on input value
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  return ( <div>
    <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-bar"
          onChange={handleFilterChange}/>
      </div>
    </header>
    <div className="content">
        <aside className="sidebar">
          <h2>Categories</h2>
          <ul>
            <li onClick={() => handleCategories('actions')}>Action</li>
            <li onClick={() => handleCategories('adventures')}>Adventure</li>
            <li onClick={() => handleCategories('racings')}>Racing</li>
            <li onClick={() => handleCategories('shooters')}>Shooter</li>
          </ul>
        </aside>
    <div className='card-container'>
      {filteredData.map((item) => (
        <div className='card' key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className='card-content'>
            <h3>{item.name}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dolorum.
            </p>
            <a href='' className='btn'>
              {item.price}
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

