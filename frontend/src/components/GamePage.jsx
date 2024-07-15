import React, { useState, useEffect } from 'react';
import './GamePage.css';
import logo from '../assets/search_3694304.png';
import { fetchDataActions } from './UseData';
import { fetchDataAdventures } from './UseData';
import { fetchDataRacings } from './UseData';
import { fetchDataShooters } from './UseData';

function GamePage() {
  const [category, setCategory] = useState('Games');
  const [actions, setActions] = useState([]);
  const [adventures, setAdventures] = useState([]);
  const [racings, setRacings] = useState([]);
  const [shooters, setShooters] = useState([]);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData()
    fetchDataActions()
      .then(data => {
        setActions(data);
      })
      .catch(error => {
        // Handle errors if needed
        console.error('Error fetching actions:', error);
      });

      fetchDataAdventures()
      .then(data => {
        setAdventures(data);
      })
      .catch(error => {
        // Handle errors if needed
        console.error('Error fetching adventures:', error);
      });

      fetchDataRacings()
      .then(data => {
        setRacings(data);
      })
      .catch(error => {
        // Handle errors if needed
        console.error('Error fetching racings:', error);
      });

      fetchDataShooters()
      .then(data => {
        setShooters(data);
      })
      .catch(error => {
        // Handle errors if needed
        console.error('Error fetching shooters:', error);
      });
  }, []); // Empty dependency array means this effect runs once after initial render


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

  function handleCategories(category) {
    switch (category) {
      case 'Actions':
        setData(actions);
        setCategory(category)
        setFilteredData(actions)
        break;
      case 'Adventures':
        setData(adventures);
        setCategory(category)
        setFilteredData(adventures)
        break;
      case 'Racings':
        setData(racings);
        setCategory(category)
        setFilteredData(racings)
        break;
      case 'Shooters':
        setData(shooters);
        setCategory(category)
        setFilteredData(shooters)
        break;
      default:
        return; // Exit early if category doesn't match any case
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
    <h1 className='header-content'>{category}</h1>
    <div className="content">
        <aside className="sidebar">
          <h2>Categories</h2>
          <ul>
            <li onClick={() => handleCategories('Actions')}>Action</li>
            <li onClick={() => handleCategories('Adventures')}>Adventure</li>
            <li onClick={() => handleCategories('Racings')}>Racing</li>
            <li onClick={() => handleCategories('Shooters')}>Shooter</li>
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

