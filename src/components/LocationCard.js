import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import "../style/weather-icons.min.css";

const LocationCard = ({ weather, location, remove }) => {
  return (
    <div className="location-card card w-100 bg-secondary text-white">
      <div className="card-body location-card-body text-white">
        <Link to={`/locations/${location.id}`} className="card-link ">
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
              Humidity: {Math.round(weather.currently.humidity * 100)}%
              <br />
              Feels: {Math.round(weather.currently.apparentTemperature)}
              <i className="wi wi-degrees" />
              <br />
            </div>
          </div>
        </Link>
      </div>
      <div className="time-update text-right card-footer border-0 p-0 bg-secondary">
        <small className="text-muted ">
          <Moment format="hh:mm" unix className="text-white">
            {weather.currently.time}
          </Moment>
          <br />
          <span onClick={() => remove(location.id)} className="text-white">
            Remove
          </span>
        </small>
      </div>
    </div>
  );
};

export default LocationCard;
