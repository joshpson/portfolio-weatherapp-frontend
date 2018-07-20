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
      <div className="card w-75 location-card">
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
              <h2>
                {Math.round(this.props.weather.currently.temperature)}
                <i className="wi wi-degrees" />
              </h2>
              Humidity: {this.props.weather.currently.humidity * 100}%
              <br />
              Feels:{" "}
              {Math.round(this.props.weather.currently.apparentTemperature)}
              <i className="wi wi-degrees" />
              <br />
            </p>
            <div className="time-update text-right">
              <small className="text-muted ">
                <Moment
                  format="hh:mm"
                  time={this.props.weather.currently.time}
                />
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationCard;
