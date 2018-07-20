import React from "react";
import Moment from "react-moment";
import Skycons from "react-skycons";
import "../style/weather-icons.min.css";

const manipulateIcon = icon => {
  return icon
    .toUpperCase()
    .split("-")
    .join("_");
};

const LocationCard = ({ weather, location }) => {
  return (
    <div className="card w-75 location-card">
      <div className="card-body location-card-body">
        <div className="skycon-div">
          <Skycons
            color="black"
            icon={manipulateIcon(weather.currently.icon)}
          />
        </div>
        <div>
          <h2 className="card-title">
            <i
              className={
                "card-icon wi wi-forecast-io-" + weather.currently.icon
              }
            />
            {location.name}
          </h2>
          <div className="card-text">
            {weather.hourly.summary}
            <br />
            <h2>
              {Math.round(weather.currently.temperature)}
              <i className="wi wi-degrees" />
            </h2>
            Humidity: {weather.currently.humidity * 100}%
            <br />
            Feels: {Math.round(weather.currently.apparentTemperature)}
            <i className="wi wi-degrees" />
            <br />
          </div>
          <div className="time-update text-right">
            <small className="text-muted ">
              <Moment format="hh:mm" time={weather.currently.time} />
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
