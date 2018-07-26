import React from "react";
import { connect } from "react-redux";
import DayItemDesktop from "./DayItemDesktop";
import "../../../style/weather-icons.min.css";

const SevenDaysDesktop = ({ weather, metric }) => {
  return (
    <div>
      <div className="card-deck main-background pt-1 pl-0 pr-0">
        {weather.daily.data.map((day, index) => {
          if (index > 0 && index <= 3) {
            return (
              <DayItemDesktop
                day={day}
                key={index}
                timezone={weather.timezone}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="card-deck main-background pt-1 pl-0 pr-0">
        {weather.daily.data.map((day, index) => {
          if (index > 3 && index < 7) {
            return (
              <DayItemDesktop
                day={day}
                key={index}
                timezone={weather.timezone}
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
)(SevenDaysDesktop);
