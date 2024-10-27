// import React, { useState, useEffect } from 'react';
// import CityListTable from './CityListTable';
// import WeatherDetailsTable from './WeatherDetailsTable';

// const WeatherApp = () => {
//     const [weatherData, setWeatherData] = useState([]);
//     const [searchCity, setSearchCity] = useState("");
//     const cities = ["London", "New York", "Los Angeles", "Las Vegas"];
//     const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

//     const getWeather = async () => {
//         for (const city of cities) {
//             await fetchCityWeather(city);
//         }
//     };

//     const fetchCityWeather = async (city) => {
//         try {
//             const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
//             const data = await response.json();

//             if (data.cod === 200) {
//                 const currentDate = new Date();
//                 const dataDateTime = new Date(data.dt * 1000);
//                 const dataAge = ((currentDate - dataDateTime) / (1000 * 60 * 60)).toFixed(2);

//                 setWeatherData((prevData) => [
//                     ...prevData,
//                     {
//                         id: `${city}-${data.dt}`,
//                         city,
//                         temperature: data.main.temp,
//                         humidity: data.main.humidity,
//                         description: data.weather[0].description,
//                         dateAndTime: dataDateTime.toLocaleString(),
//                         dataAge,
//                         highlight: false,
//                     },
//                 ]);
//             } else {
//                 console.error("City not found:", data.message);
//             }
//         } catch (error) {
//             console.error("Error fetching weather data:", error);
//         }
//     };

//     const handleSearch = () => {
//         if (searchCity) {
//             const foundIndex = weatherData.findIndex((data) => data.city.toLowerCase() === searchCity.toLowerCase());
//             if (foundIndex !== '') {
//                 setWeatherData((prevData) =>
//                     prevData.map((data, index) =>
//                         index === foundIndex ? { ...data, highlight: true } : data
//                     )
//                 );

//                 setTimeout(() => {
//                     setWeatherData((prevData) =>
//                         prevData.map((data, index) =>
//                             index === foundIndex ? { ...data, highlight: false } : data
//                         )
//                     );
//                 }, 3000);
//             } else {
//                 console.log("City not found in the details table");
//             }
//             setSearchCity("");
//         }
//     };

//     const handleDeleteRow = (id) => {
//         setWeatherData(weatherData.filter((data) => data.id !== id));
//     };

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <div style={{ marginBottom: '20px' }}>
//                 <input
//                     type="text"
//                     placeholder="Search city"
//                     value={searchCity}
//                     onChange={(e) => setSearchCity(e.target.value)}
//                     style={{ padding: '5px', marginRight: '10px' }}
//                 />
//                 <button
//                     onClick={handleSearch}
//                     style={{ backgroundColor: '#4472C4', color: '#ffffff', padding: '5px 10px' }}
//                 >
//                     Search
//                 </button>
//             </div>
//             <div style={{ display: 'flex' }}>
//                 <CityListTable cities={cities} getWeather={getWeather} />
//                 <WeatherDetailsTable weatherData={weatherData} onDeleteRow={handleDeleteRow} />
//             </div>
//         </div>
//     );
// };

// export default WeatherApp;


import React, { useState } from 'react';
import CityList from './CityList';
import WeatherDetails from './WeatherDetails';

const WeatherApp = () => {
    const [cities] = useState(["London", "Los Angeles", "New York", "Las Vegas"]); // City list
    const [weatherData, setWeatherData] = useState([]);         // Weather data for each city
    const [currentCityIndex, setCurrentCityIndex] = useState(-1); // Track current city for fetching
    const [searchTerm, setSearchTerm] = useState('');            // Search term
    const [highlightedCity, setHighlightedCity] = useState('');   // Highlighted city

    // Fetch weather for one city at a time and highlight current city
    const handleGetWeather = async () => {
        if (currentCityIndex < cities.length - 1) {
            const nextCityIndex = currentCityIndex + 1; // Move to the next city
            const city = cities[nextCityIndex];
            setCurrentCityIndex(nextCityIndex); // Highlight the current city

            const response = await fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city}`);
            const data = await response.json();
            console.log('API DATA', data);
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

    // Delete a city's weather data row
    const handleDelete = (city) => {
        setWeatherData(prev => prev.filter(item => item.city !== city));
    };

    // Search for a city and highlight its row if found
    const handleSearch = () => {
        const foundCity = weatherData.find(item => item.city.toLowerCase() === searchTerm.toLowerCase());
        if (foundCity) {
            setHighlightedCity(foundCity.city); // Set the highlighted city
            setTimeout(() => setHighlightedCity(''), 3000); // Clear the highlight after 3 seconds
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
                <button style={{ backgroundColor: '#4472C4', color: '#ffffff' }} onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
};

export default WeatherApp;
