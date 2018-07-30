import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { colorClass } from "../actions/colors";
import { iconHourSrc } from "../actions/icons";

import "moment-timezone";

import "../style/weather-icons.min.css";

const LocationCard = ({ weather, location, remove, metric }) => {
  return (
    <div
      className={
        "location-card light-shadow rounded card  " +
        colorClass(weather.currently.icon)
      }
    >
      <div className="card-body location-card-body pt-1">
        <Link to={`/locations/${location.id}`} className="card-link ">
          <div>
            <div className="row justify-content-left align-items-center">
              <div className="col-3 pr-2 pl-0 p-md-0">
                <img
                  className="card-icon"
                  src={iconHourSrc(weather.currently.icon)}
                />
              </div>
              <div className="col-9 p-2 p-md-0">
                <h1 className="card-title m-0">{location.name}</h1>
              </div>
            </div>

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
      <div className="time-update text-white text-right border-0 p-0 bg-none">
        <small className="text-muted text-white ">
          <Moment
            format="hh:mm z"
            unix
            tz={weather.timezone}
            className="text-white "
          >
            {weather.currently.time}
          </Moment>
          <br />
          <span onClick={() => remove(location.id)} className="text-white ">
            Remove
          </span>
        </small>
      </div>
    </div>
  );
};

export default LocationCard;
