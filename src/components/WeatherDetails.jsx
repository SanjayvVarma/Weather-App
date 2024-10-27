import React from 'react';

const WeatherDetails = ({ data, onDelete, highlightedCity }) => {
    return (
        <div>
            <h2>Weather Details</h2>
            {
                data.length === 0 ? (
                    <p>No Data</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>City</th>
                                <th>Temperature (°C)</th>
                                <th>Pressure (hPa)</th>
                                <th>Description</th>
                                <th>Humidity (%)</th>
                                <th>Data Age (hours)</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => (
                                    <tr
                                        key={index}
                                        style={{
                                            border: '1px solid #000000',
                                            backgroundColor: highlightedCity === item.city ? 'yellow' : 'white'
                                        }}
                                    >
                                        <td>{item.city}</td>
                                        <td>{item.temperature}</td>
                                        <td>{item.pressure}</td>
                                        <td>{item.description}</td>
                                        <td>{item.humidity}</td>
                                        <td>{item.dataAge}</td>
                                        <td>
                                            <button onClick={() => onDelete(item.city)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )
            }
        </div>
    );
}

export default WeatherDetails;

