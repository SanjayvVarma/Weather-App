import React, { useState } from 'react';
import CityList from './CityList';
import WeatherDetails from './WeatherDetails';

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [currentCityIndex, setCurrentCityIndex] = useState(-1);
    const [searchTerm, setSearchTerm] = useState('');
    const [highlightedCity, setHighlightedCity] = useState('');

    const cities = ["London", "Los Angeles", "New York", "Las Vegas"];

    const handleGetWeather = async () => {
        if (currentCityIndex < cities.length - 1) {
            const nextCityIndex = currentCityIndex + 1;
            const city = cities[nextCityIndex];
            setCurrentCityIndex(nextCityIndex);

            const res = await fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city}`);
            const data = await res.json();

            const dataAge = Math.abs(new Date() - new Date(data.date_and_time)) / 3600000;

            const cityExists = weatherData.some((item) => (
                item.city === city
            ));

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
    setWeatherData((prev) => {
        const updatedWeatherData = prev.filter(item => item.city !== city);
        
        // Check if the deleted city was the currently selected city
        if (city === cities[currentCityIndex]) {
            // Reset the currentCityIndex to the previous valid city index
            const newIndex = currentCityIndex > 0 ? currentCityIndex - 1 : -1;
            setCurrentCityIndex(newIndex);
        }
        
        return updatedWeatherData;
    });
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
