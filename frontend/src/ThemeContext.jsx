// ThemeContext.js
import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  useEffect(() => {
      fetch('http://127.0.0.1:5555/actions')
      .then(res => res.json())
      .then((data) => {
        setActions(data);
      })
      .catch((error) => {
        console.error("Error fetching actions:", error);
      });

      fetch('http://127.0.0.1:5555/adventures')
      .then(res => res.json())
      .then((data) => {
        setAdventures(data);
      })
      .catch((error) => {
        console.error("Error fetching adventures:", error);
      });

      fetch('http://127.0.0.1:5555/racings')
      .then(res => res.json())
      .then((data) => {
        setRacings(data);
      })
      .catch((error) => {
        console.error("Error fetching racings:", error);
      });

      fetch('http://127.0.0.1:5555/shooters')
      .then(res => res.json())
      .then((data) => {
        setShooters(data);
      })
      .catch((error) => {
        console.error("Error fetching shooters:", error);
      });
  }, []);

  const [cartItems, setCartItems] = useState([])
  const [actions, setActions] = useState([]);
  const [adventures, setAdventures] = useState([]);
  const [racings, setRacings] = useState([]);
  const [shooters, setShooters] = useState([]);

  return (
    <ThemeContext.Provider value={{ cartItems, setCartItems , actions, adventures, racings, shooters}}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };