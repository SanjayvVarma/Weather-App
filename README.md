
# Sanjay Weather App

## Overview
The Sanjay Weather App is a weather application built using React. It allows users to check the current weather data for selected cities, add new weather data for these cities, and delete entries. Additionally, the app includes a search function to quickly find weather details for specific cities. 

## Live Demo

You can access the live demo of the project here: [Weather App](https://weather-app-jet-two.vercel.app/)

## Features
- **Add City Weather**: Click the "Get Weather" button to fetch current weather data for a predefined list of cities.
- **Search City**: A search bar lets you find specific cities in the weather data.
- **Weather Details**: Displays details like temperature, humidity, pressure, and data age.
- **Highlighting**: When searching, the matching city row is highlighted for easier identification.
- **Delete Entry**: Users can delete individual city data from the table.

## Images

### App Overview
![App Overview](/src/assets/homePage.png)

### Weather Details Table
![Weather Details](/src/assets/DetailsPage.png)

### Search Highlight
![Search Highlight](/src/assets/searchHighLight.png)

### Delete City in Details
![City List](/src/assets/DetailsPage.png)

## Local Installation
To run the Sanjay Weather App locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SanjayvVarma/Weather-App.git
   cd Weather-App
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the app**:
   ```bash
   npm run dev
   ```
   The app should now be running at `http://localhost:5173`.


## Project Structure
The project is organized into three main components:
1. **CityList**: Displays a list of cities and allows users to fetch weather data.
2. **WeatherApp**: Main component that manages the state and interactions among components.
3. **WeatherDetails**: Displays weather details in a table, allows city-specific deletion, and highlights search results.

## Functionalities Implemented
- **API Integration**: Fetches weather data using a public weather API.
- **Data Management**: Stores city weather data and checks if data already exists before adding.
- **Search Functionality**: Searches for a city in the data and highlights the row if found.
- **Data Age Calculation**: Displays the age of weather data in hours.


### Extra Packages
No additional packages were used for this project, keeping it lightweight with only React dependencies.

## Learning Outcomes
While working on this project, I learned:
- How to manage state effectively in React, especially when dealing with dynamic data.
- Handling asynchronous functions for API requests and understanding data flow in the app.
- Utilizing conditional rendering and styling based on dynamic conditions (e.g., row highlighting for search).
- Basic error handling to ensure smooth app functionality in case of missing data or failed API calls.

## Future Improvements
- **Dynamic City Selection**: Allow users to add custom cities to the list, rather than limiting them to predefined options.
- **Data Caching**: Cache weather data to reduce API requests for frequently searched cities.
- **Error Handling**: Improve error handling for API fetch failures.
- **User Feedback**: Display loading indicators while data is being fetched.
