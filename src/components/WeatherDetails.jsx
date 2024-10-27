import React from 'react';

const WeatherDetails = ({ data, onDelete, highlightedCity }) => {


    return (
        <div className='details-container'>
            <table>
                <thead>
                    <tr className='tablerow'>
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
                        data.length === 0 ? (
                           <div>
                             <p className='nodata'>No Data</p>
                           </div>
                        ) : (
                            data.map((item, index) => (
                                <tr 
                                    key={index}
                                    className={`${highlightedCity === item.city ? 'yellow' : 'white'}`}
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
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default WeatherDetails;

