import React, { useState, useEffect } from 'react';
import './GamePage.css';
import logo from '../assets/search_3694304.png';

function GamePage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    fetchData();
  }, []); // Run the effect only once

  const fetchData = () => {
    fetch('http://127.0.0.1:5555/actions')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setFilteredData(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };


  // Handle filter input change
  const handleFilterChange = event => {
    const value = event.target.value.toLowerCase();
    setFilterValue(value);

    // Filter data based on input value
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  return (<>
    <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-bar" value={filterValue}
          onChange={handleFilterChange}/>
      </div>
    </header>
    <div className='card-container'>
      {filteredData.map((item, index) => (
        <div className='card' key={index}>
          <img src={item.image} alt={`Card ${index + 1}`} />
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
    </div>
    </>
  );
}

export default GamePage;

