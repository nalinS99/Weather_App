
# Weather App with Dynamic Backgrounds

Welcome to the **Weather App with Dynamic Backgrounds**! This project is built using React and integrates with the OpenWeatherMap API to fetch real-time weather data. The app features dynamically changing background videos that adjust based on the current weather conditions, providing an immersive user experience.

## Features

- **Real-time Weather Data**: Fetches live data from the OpenWeatherMap API.
- **Dynamic Backgrounds**: The background videos change based on the weather conditions (e.g., sunny, cloudy, rainy, snowy).
- **Weather Information**: Displays temperature, weather description, humidity, and wind speed.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/nalinS99/Weather_App.git
   cd Weather_App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Get your OpenWeatherMap API key:
   - Sign up at [OpenWeatherMap](https://openweathermap.org/) to get an API key.
   - Create a `.env` file in the root directory and add your API key:
     ```bash
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```

4. Run the app:
   ```bash
   npm start
   ```

The app should now be running on `http://localhost:3000`.

## Technologies Used

- **React**: Frontend JavaScript library
- **OpenWeatherMap API**: For fetching real-time weather data
- **TailwindCSS & Vide**: For styling and dynamic backgrounds
- **Axios**: For making API requests

## Future Enhancements

- Add more weather conditions for finer background adjustments
- Add a feature to switch between Celsius and Fahrenheit
- Display weather forecast for the next few days

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to submit a pull request.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- Background videos sourced from [Youtube](https://www.youtube.com/) 
