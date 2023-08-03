import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div>
        <div className="float-left">
          <span className="degrees">{Math.round(props.data.temperature)}</span>

          <span className="units">
            <a href="/">°C</a> | <a href="/">°F</a>
          </span>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <ul>
              <li>{props.data.description}</li>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
            </ul>
          </div>

          <div className="col-4">
            <img
              src={props.data.imgUrl}
              id="icon"
              alt="sunny"
              className="float-right"
            />
          </div>

          <div className="col-4">
            <ul>
              <li className="temperature">
                <span>Humidity:</span> <span>{props.data.humidity}%</span>
              </li>
              <li className="temperature">
                <span>Wind:</span> <span>{props.data.wind}km/h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
