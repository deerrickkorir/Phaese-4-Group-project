export const fetchDataActions = () => {
    return fetch('http://127.0.0.1:5555/actions')
      .then(res => res.json())
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error so it can be caught elsewhere if needed
      });
  };
  
export const fetchDataAdventures = () => {
    return fetch('http://127.0.0.1:5555/adventures')
      .then(res => res.json())
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error;
      });
  }; 
  
export const fetchDataRacings = () => {
    return fetch('http://127.0.0.1:5555/racings')
      .then(res => res.json())
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error;
      });
  };  

export const fetchDataShooters = () => {
    return fetch('http://127.0.0.1:5555/shooters')
      .then(res => res.json())
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error;
      });
  };