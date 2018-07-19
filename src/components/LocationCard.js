import React from "react";
import Moment from "react-moment";
import Skycons from "react-skycons";

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
            <h4 className="card-title">{this.props.location.name}</h4>
            <p className="card-text">
              <em>{this.props.weather.hourly.summary}</em>
              <br />
              Temperature: {this.props.weather.currently.temperature}
              <br />
              Humidity: {this.props.weather.currently.humidity}
              <br />
              Feels like: {this.props.weather.currently.apparentTemperature}
            </p>
          </div>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            Last updated at <Moment time={this.props.weather.currently.time} />
          </small>
        </div>
      </div>
    );
  }
}

export default LocationCard;
