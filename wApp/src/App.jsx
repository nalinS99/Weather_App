import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import custom CSS

import clearDayVideo from './assets/BG/clear-day.mp4';
import clearNightVideo from './assets/BG/clear-night.mp4';
import fewCloudDay from './assets/BG/few-clouds-day.mp4';
import fewCloudNight from './assets/BG/few-clouds-night.mp4';
import Scatteredclouds from './assets/BG/Scattered-Clouds.mp4';
import rain from './assets/BG/rain.mp4';
import Thunderstorm from './assets/BG/Thunder.mp4';
import Snow from './assets/BG/snow.mp4';

function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('');
  const [bgVideo, setBgVideo] = useState('');

  useEffect(() => {
    console.log("Background video updated:", bgVideo);
  }, [bgVideo]);

  const iconToBackgroundVideo = (icon) => {
    switch (icon) {
      case '01d':
        return clearDayVideo;
      case '01n':
        return clearNightVideo;
      case '02d':
        return fewCloudDay;
      case '02n':
        return fewCloudNight;
      case '03d':
      case '03n':
        return Scatteredclouds;
      case '04d':
      case '04n':
        return fewCloudDay;
      case '09d':
      case '09n':
        return rain;
      case '10d':
      case '10n':
        return rain;
      case '11d':
      case '11n':
        return Thunderstorm;
      case '13d':
      case '13n':
        return Snow;
      default:
        return clearDayVideo;
    }
  };

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f09e6c9e4562ce6f3b44db6d96090dc2`;
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          const icon = response.data.weather[0].icon;
          const backgroundVideo = iconToBackgroundVideo(icon);
          setBgVideo(backgroundVideo);
          console.log("Icon:", icon);
          console.log("Background Video URL:", backgroundVideo);
        })
        .catch((error) => {
          console.error('Error fetching the weather data:', error);
        });
      setLocation('');
    }
  };

  return (
    <div className="app-container">
      {bgVideo && (
        <video key={bgVideo} autoPlay loop muted className="background-video">
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="search-container">
        <input
          className="input-field"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter location"
          onKeyPress={searchLocation}
          type="text"
        />
        {data && (
          <div className="weather-card">
            <div className="weather-info">
              <h1>{data.name}</h1>
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                alt="weather icon"
                className="weather-icon"
              />
              <h3 className="temperature">{(data.main.temp - 273.15).toFixed(2)} °C</h3>
              <p>Weather: {data.weather[0].description}</p>
              <p>Humidity: {data.main.humidity}%</p>
              <p>Wind Speed: {data.wind.speed} m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
