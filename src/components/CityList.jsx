// import React from 'react';

// const CityListTable = ({ cities, getWeather }) => (
//   <div>
//     <h2>City List</h2>
//     <table>
//       {cities.map((city) => (
//         <tr key={city}>
//           <td>{city}</td>
//         </tr>
//       ))}
//     </table>
//     <button onClick={getWeather} style={{ backgroundColor: '#4472C4', color: '#ffffff' }}>
//       Get Weather
//     </button>
//   </div>
// );

// export default CityListTable;


// CityListTable.js
// import React from 'react';

// const CityListTable = ({ cities, getWeather }) => (
//   <div style={{ marginRight: '20px' }}>
//     <h2 style={{ backgroundColor: '#4472C4', color: '#ffffff' }}>City List</h2>
//     <table>
//       <tbody>
//         {cities.map((city) => (
//           <tr key={city}>
//             <td style={{ border: '1px solid #000000', color: '#000000' }}>{city}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     <button onClick={getWeather} style={{ backgroundColor: '#4472C4', color: '#ffffff', marginTop: '10px' }}>
//       Get Weather
//     </button>
//   </div>
// );

// export default CityListTable;

import React from 'react';

function CityList({ cities, onGetWeather, weatherData }) {
  return (
    <div className="city-list">
      <h2 style={{ backgroundColor: '#4472C4', color: '#ffffff' }}>City List</h2>
      <button style={{ backgroundColor: '#4472C4', color: '#ffffff' }} onClick={onGetWeather}>Get Weather</button>
      <ul>
        {cities.map((city, index) => {
          // Check if this city has weather data
          const cityHasData = weatherData.some(item => item.city === city);

          return (
            <li 
              key={index} 
              style={{
                border: '1px solid #000000',
                backgroundColor: cityHasData ? 'lightgreen' : 'white' // Highlight if the city has weather data
              }}
            >
              {city}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CityList;
