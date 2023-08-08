import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div>
        <div className="float-left">
          <WeatherTemperature celsius={props.data.temperature} />
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
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={64} />
            </div>
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
