import React from 'react';

const WeatherDetails = ({ data, onDelete, highlightedCity }) => {


    return (
        <div className='details-container'>
            <table>
                <thead>
                    <tr className='tablerow'>
                        <th>City</th>
                        <th>Description</th>
                        <th>Temperature (°C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                        <th>Data Age (hours)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length === 0 ? (
                            <tr>
                                <td colSpan="7" className='nodata'>
                                    No Data
                                </td>
                            </tr>
                        ) : (
                            data.map((item, index) => (
                                <tr key={index} className={`item-row ${highlightedCity === item.city ? 'yellow' : 'white'}`}>
                                    <td>{item.city}</td>
                                    <td>{item.description}</td>
                                    <td>{item.temperature}</td>
                                    <td>{item.pressure}</td>
                                    <td>{item.humidity}</td>
                                    <td>{item.dataAge}</td>
                                    <td>
                                        <button className='deletebtn' onClick={() => onDelete(item.city)}>Delete</button>
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

