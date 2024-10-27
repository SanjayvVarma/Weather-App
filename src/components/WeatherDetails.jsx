// import React from 'react';

// const WeatherDetailsTable = ({ weatherData }) => (
//   <div>
//     <h2>Details</h2>
//     <table>
//       <thead>
//         <tr>
//           <th>City</th>
//           <th>Temperature</th>
//           <th>Humidity</th>
//           <th>Description</th>
//           <th>Date & Time</th>
//           <th>Data Age</th>
//         </tr>
//       </thead>
//       <tbody>
//         {weatherData.length ? (
//           weatherData.map((data) => (
//             <tr key={data.city}>
//               <td>{data.city}</td>
//               <td>{data.temperature}</td>
//               <td>{data.humidity}</td>
//               <td><input type="text" value={data.description} /></td>
//               <td>{data.dateAndTime}</td>
//               <td>{data.dataAge} hours</td>
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan="6" style={{ color: '#000000' }}>No Data</td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   </div>
// );

// export default WeatherDetailsTable;


// WeatherDetailsTable.js
// import React from 'react';

// const WeatherDetailsTable = ({ weatherData, onDeleteRow }) => (
//   <div>
//     <h2 style={{ backgroundColor: '#4472C4', color: '#ffffff' }}>Details</h2>
//     <table>
//       <thead>
//         <tr>
//           <th>City</th>
//           <th>Temperature</th>
//           <th>Humidity</th>
//           <th>Description</th>
//           <th>Date & Time</th>
//           <th>Data Age</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {weatherData.length ? (
//           weatherData.map((data) => (
//             <tr key={data.id} style={{ backgroundColor: data.highlight ? 'yellow' : 'white', border: '1px solid #000000' }}>
//               <td style={{ color: '#000000' }}>{data.city}</td>
//               <td style={{ color: '#000000' }}>{data.temperature}°C</td>
//               <td style={{ color: '#000000' }}>{data.humidity}%</td>
//               <td>
//                 <input type="text" defaultValue={data.description} style={{ color: '#000000' }} />
//               </td>
//               <td style={{ color: '#000000' }}>{data.dateAndTime}</td>
//               <td style={{ color: '#000000' }}>{data.dataAge} hours</td>
//               <td>
//                 <button onClick={() => onDeleteRow(data.id)} style={{ backgroundColor: '#4472C4', color: '#ffffff' }}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan="7" style={{ color: '#000000', textAlign: 'center' }}>No Data</td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   </div>
// );

// export default WeatherDetailsTable;


import React from 'react';

function WeatherDetails({ data, onDelete, highlightedCity }) {
    return (
        <div className="weather-details">
            <h2 style={{ backgroundColor: '#4472C4', color: '#ffffff' }}>Weather Details</h2>
            {data.length === 0 ? (
                <p style={{ color: '#000000' }}>No Data</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #000000' }}>City</th>
                            <th style={{ border: '1px solid #000000' }}>Temperature (°C)</th>
                            <th style={{ border: '1px solid #000000' }}>Pressure (hPa)</th>
                            <th style={{ border: '1px solid #000000' }}>Description</th>
                            <th style={{ border: '1px solid #000000' }}>Humidity (%)</th>
                            <th style={{ border: '1px solid #000000' }}>Data Age (hours)</th>
                            <th style={{ border: '1px solid #000000' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr 
                                key={index} 
                                style={{ 
                                    border: '1px solid #000000', 
                                    backgroundColor: highlightedCity === item.city ? 'yellow' : 'white' // Highlight matching city
                                }}
                            >
                                <td>{item.city}</td>
                                <td>{item.temperature}</td>
                                <td>{item.pressure}</td>
                                <td>{item.description}</td>
                                <td>{item.humidity}</td>
                                <td>{item.dataAge}</td>
                                <td>
                                    <button onClick={() => onDelete(item.city)} style={{ backgroundColor: '#FF0000', color: '#ffffff' }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default WeatherDetails;

