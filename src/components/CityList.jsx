import React from 'react';

const CityList = ({ cities, onGetWeather, weatherData }) => {
  return (
    <div>
      <h2>City List</h2>
      <button onClick={onGetWeather}>Get Weather</button>
      <ul>
        {
          cities.map((city, index) => {
            const cityHasData = weatherData.some(item => item.city === city);
            return (
              <li key={index}> {city} </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default CityList;
