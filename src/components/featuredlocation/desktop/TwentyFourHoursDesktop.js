import React from "react";
import { connect } from "react-redux";
import HourItemDesktop from "./HourItemDesktop";
import "../../../style/weather-icons.min.css";

const TwentyFourHoursDesktop = ({ weather, metric }) => {
  return (
    <div>
      <div className="card-deck pt-1 pl-0 pr-0">
        {weather.hourly.data.map((hour, index) => {
          if (index <= 5) {
            return (
              <HourItemDesktop
                hour={hour}
                timezone={weather.timezone}
                key={index}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="card-deck pt-1 pl-0 pr-0">
        {weather.hourly.data.map((hour, index) => {
          if (index > 5 && index <= 11) {
            return (
              <HourItemDesktop
                hour={hour}
                timezone={weather.timezone}
                key={index}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="card-deck pt-1 pl-0 pr-0">
        {weather.hourly.data.map((hour, index) => {
          if (index > 11 && index <= 17) {
            return (
              <HourItemDesktop
                hour={hour}
                timezone={weather.timezone}
                key={index}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="card-deck pt-1 pl-0 pr-0">
        {weather.hourly.data.map((hour, index) => {
          if (index > 17 && index <= 23) {
            return (
              <HourItemDesktop
                hour={hour}
                timezone={weather.timezone}
                key={index}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    weather: state.featuredLocation.weather,
    metric: state.currentUser.metric
  };
};

export default connect(
  mapStateToProps,
  null
)(TwentyFourHoursDesktop);
