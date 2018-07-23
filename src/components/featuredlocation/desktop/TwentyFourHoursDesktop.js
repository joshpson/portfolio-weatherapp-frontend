import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";

// import Moment from "react-moment";
import "../../../style/weather-icons.min.css";

const TwentyFourHoursDesktop = ({ weather, metric }) => {
  return (
    <div className="row justify-content-between pt-1 pl-0 pr-0 text-center">
      {weather.hourly.data.map((hour, index) => {
        if (index < 24) {
          return (
            <div
              className="col-3 p-1 mb-3 justify-content-center"
              key={hour.time}
            >
              <i
                className={"daily-summary-icon wi wi-forecast-io-" + hour.icon}
              />
              <br />
              <Moment unix format="hh:mm (ddd)">
                {hour.time}
              </Moment>
              <br />
              <div>
                {Math.round(hour.temperature)}
                <i className="wi wi-degrees" />
              </div>
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
