import React from "react";
import Moment from "react-moment";
import Skycons from "react-skycons";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setFeaturedLocation } from "../actions/location";
import "../style/weather-icons.min.css";

const manipulateIcon = icon => {
  return icon
    .toUpperCase()
    .split("-")
    .join("_");
};

const LocationCard = ({ weather, location }) => {
  return (
    <div className="location-card card w-100">
      <Link to={`/locations/${location.id}`} className="card-link">
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
              Humidity: {Math.round(weather.currently.humidity * 100)}%
              <br />
              Feels: {Math.round(weather.currently.apparentTemperature)}
              <i className="wi wi-degrees" />
              <br />
            </div>
            <div className="time-update text-right">
              <small className="text-muted ">
                <Moment format="hh:mm" unix>
                  {weather.currently.time}
                </Moment>
              </small>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LocationCard;
