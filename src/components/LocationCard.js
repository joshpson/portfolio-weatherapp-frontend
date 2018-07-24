import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { colorClass } from "../actions/colors";
import "moment-timezone";

import "../style/weather-icons.min.css";

const LocationCard = ({ weather, location, remove, metric }) => {
  return (
    <div
      className={
        "location-card rounded card w-100 " + colorClass(weather.currently.icon)
      }
    >
      <div className="card-body location-card-body">
        <Link to={`/locations/${location.id}`} className="card-link ">
          <div>
            <h1 className="card-title">
              <i
                className={
                  "card-icon wi wi-forecast-io-" + weather.currently.icon
                }
              />
              {location.name}
            </h1>
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
      <div className="time-update text-right border-0 p-0 bg-none">
        <small className="text-muted ">
          <Moment
            format="hh:mm z"
            unix
            tz={weather.timezone}
            className={colorClass(weather.currently.icon)}
          >
            {weather.currently.time}
          </Moment>
          <br />
          <span
            onClick={() => remove(location.id)}
            className={colorClass(weather.currently.icon)}
          >
            Remove
          </span>
        </small>
      </div>
    </div>
  );
};

export default LocationCard;
