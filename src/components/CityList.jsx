import React from 'react';

const CityList = ({ cities, handleGetWeather, weatherData }) => {

  return (
    <div className='citylist'>
      <button className='citylist-btn' onClick={handleGetWeather}>Get Weather</button>
      <h3 className='city-name'>City</h3>
      <ul>
        {
          cities.map((city, index) => {
            const cityHasData = weatherData.some(item => item.city === city);
            return (
              <li key={index} className={`citylist-li ${cityHasData ? 'lightgreen' : 'white'}`}> {city} </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default CityList;
