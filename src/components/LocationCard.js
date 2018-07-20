import React from "react";
import Moment from "react-moment";
import Skycons from "react-skycons";
import "../style/weather-icons.min.css";

class LocationCard extends React.Component {
  constructor(props) {
    super(props);
  }

  manipulateIcon = () => {
    return this.props.weather.currently.icon
      .toUpperCase()
      .split("-")
      .join("_");
  };

  render() {
    return (
      <div className="card w-75">
        <div className="card-body location-card-body">
          <div className="skycon-div">
            <Skycons color="black" icon={this.manipulateIcon()} />
          </div>
          <div>
            <h2 className="card-title">
              <i
                className={
                  "card-icon wi wi-forecast-io-" +
                  this.props.weather.currently.icon
                }
              />
              {this.props.location.name}
            </h2>
            <p className="card-text">
              {this.props.weather.hourly.summary}
              <br />
              <h3>
                {Math.round(this.props.weather.currently.temperature)}
                <i className="wi wi-degrees" />
              </h3>
              Humidity: {this.props.weather.currently.humidity * 100}%
              <br />
              Feels:{" "}
              {Math.round(this.props.weather.currently.apparentTemperature)}
              <i className="wi wi-degrees" />
            </p>
          </div>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            Last updated at{" "}
            <Moment format="hh:mm" time={this.props.weather.currently.time} />
          </small>
        </div>
      </div>
    );
  }
}

export default LocationCard;
