import React, { useState } from 'react';
import CityList from './CityList';
import WeatherDetails from './WeatherDetails';

const WeatherApp = () => {
    const cities = ["London", "Los Angeles", "New York", "Las Vegas"];
    const [weatherData, setWeatherData] = useState([]);
    const [currentCityIndex, setCurrentCityIndex] = useState(-1);
    const [searchTerm, setSearchTerm] = useState('');            
    const [highlightedCity, setHighlightedCity] = useState('');

    const handleGetWeather = async () => {
        if (currentCityIndex < cities.length - 1) {
            const nextCityIndex = currentCityIndex + 1; 
            const city = cities[nextCityIndex];
            setCurrentCityIndex(nextCityIndex);

            const response = await fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city}`);
            const data = await response.json();
            const currentTime = new Date();
            const dataAge = Math.abs(currentTime - new Date(data.date_and_time)) / 3600000;

            const cityExists = weatherData.some(item => item.city === city);

            if (!cityExists) {
                setWeatherData(prev => [
                    ...prev,
                    {
                        city,
                        temperature: data.temp_in_celsius,
                        humidity: data.humidity_in_percent,
                        description: data.description,
                        pressure: data.pressure_in_hPa,
                        dataAge: dataAge.toFixed(2),
                    }
                ]);
            }
        }
    };

    const handleDelete = (city) => {
        setWeatherData(prev => prev.filter(item => item.city !== city));
    };

    const handleSearch = () => {
        const foundCity = weatherData.find(item => item.city.toLowerCase() === searchTerm.toLowerCase());
        if (foundCity) {
            setHighlightedCity(foundCity.city);
            setTimeout(() => setHighlightedCity(''), 3000);
        }
    };

    return (
        <div className="app-container">
            <CityList cities={cities} onGetWeather={handleGetWeather} weatherData={weatherData} />
            <WeatherDetails data={weatherData} onDelete={handleDelete} highlightedCity={highlightedCity} />
            <div className="search">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search city..."
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
};

export default WeatherApp;
