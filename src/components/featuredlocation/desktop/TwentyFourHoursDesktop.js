import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";

// import Moment from "react-moment";
import "../../../style/weather-icons.min.css";

const TwentyFourHoursDesktop = ({ weather, metric }) => {
  return (
    <div className="row justify-content-center pt-1 pl-0 pr-0">
      {weather.hourly.data.map((hour, index) => {
        if (index < 24) {
          return (
            <div
              className="col-2 p-1 mb-3 justify-content-left"
              key={hour.time}
            >
              <div className="row">
                <div className="col-auto">
                  <i
                    className={
                      "pr-2 daily-summary-icon wi wi-forecast-io-" + hour.icon
                    }
                  />
                  <span className="desk-hour-detail-temp">
                    {Math.round(hour.temperature)}
                    <i className="wi wi-degrees" />
                  </span>
                </div>
              </div>
              <Moment unix format="hA (ddd)">
                {hour.time}
              </Moment>
            </div>
          );
        } else {
          return null;
        }
      })}
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
