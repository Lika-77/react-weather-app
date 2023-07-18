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
              <div className="col-7">
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
            <span>
              <strong>{weatherData.temperature}</strong>
            </span>
            <span>°C</span>
            <div className="row">
              <div className="col-4">
                <ul>
                  <li>{weatherData.description}</li>
                  <li>{weatherData.date}</li>
                </ul>
              </div>

              <div className="col-4">
                <img src={weatherData.imgUrl} id="icon" alt="sunny" />
              </div>

              <div className="col-4">
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
          <a href="https://github.com/Lika-77/weatherApp.git">
            Open-source code
          </a>
          by Anzhelika Kovtun
        </div>
      </div>
    </div>
  );
}
