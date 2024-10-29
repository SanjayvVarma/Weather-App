import React, { useState } from 'react';
import CityList from './CityList';
import WeatherDetails from './WeatherDetails';

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [highlightedCity, setHighlightedCity] = useState('');

    const cities = ["London", "Los Angeles", "New York", "Las Vegas"];

    const handleGetWeather = async () => {
        const nextCity = cities.find((city) =>
            !weatherData.some((item) => item.city === city)
        );

        if (nextCity) {
            const res = await fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${nextCity}`);
            const data = await res.json();

            const dataAge = Math.abs(new Date() - new Date(data.date_and_time)) / 3600000;

            setWeatherData(prev => [
                ...prev,
                {
                    city: nextCity,
                    temperature: data.temp_in_celsius,
                    humidity: data.humidity_in_percent,
                    description: data.description,
                    pressure: data.pressure_in_hPa,
                    dataAge: dataAge.toFixed(2),
                }
            ]);
        }
    };

    const handleDelete = (city) => {
        setWeatherData(prev => (
            prev.filter(item => item.city !== city)
        ));
    };

    const handleSearch = () => {
        const foundCity = weatherData.find((item) => (
            item.city.toLowerCase() === searchTerm.toLowerCase()
        ));

        if (foundCity) {
            setHighlightedCity(foundCity.city);
            setTimeout(() => setHighlightedCity(''), 3000);
        }
    };

    return (
        <div className="app-container">
            <div>
                <CityList cities={cities} handleGetWeather={handleGetWeather} weatherData={weatherData} />
            </div>
            <div className="vl"></div>
            <div className='search-container'>
                <div className="search">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search city..."
                    />
                    <button onClick={handleSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10 2a8 8 0 1 0 5.3 14.3l5.4 5.4 1.4-1.4-5.4-5.4A8 8 0 0 0 10 2Zm0 2a6 6 0 1 1-4.24 10.24A6 6 0 0 1 10 4Z"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <WeatherDetails data={weatherData} onDelete={handleDelete} highlightedCity={highlightedCity} />
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;
