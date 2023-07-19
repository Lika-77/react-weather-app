import React from "react";
import "./Weather.css";

export default function App() {
  let weatherData = {
    city: "Kyiv",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="card">
          <div className="card-body"></div>
          <form id="search-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search for city..."
                  autofocus="on"
                  autocomplete="off"
                  className="form-control"
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-light w-100"
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Current location"
                  className="btn btn-primary w-6"
                />
              </div>
            </div>
          </form>
          <br />
          <h1>{weatherData.city}</h1>
          <div>
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
            </div>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>{weatherData.description}</li>
                  <li>{weatherData.date}</li>
                </ul>
              </div>

              <div className="col-6">
                <img
                  src={weatherData.imgUrl}
                  id="icon"
                  alt="sunny"
                  className="float-left"
                />
              </div>

              <div className="col-6">
                <ul>
                  <li className="temperature">
                    <span>Humidity:</span> <span>{weatherData.humidity}%</span>
                  </li>
                  <li className="temperature">
                    <span>Wind:</span> <span>{weatherData.wind}km/h</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a href="https://github.com/Lika-77/react-weather-app">
            Open-source code
          </a>
          by Anzhelika Kovtun
        </div>
      </div>
    </div>
  );
}
