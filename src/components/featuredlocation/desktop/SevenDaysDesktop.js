import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import "../../../style/weather-icons.min.css";

const SevenDaysDesktop = ({ weather, metric }) => {
  return (
    <div className="row justify-content-between pt-1 pl-0 pr-0">
      {weather.daily.data.map((day, index) => {
        if (index > 0 && index < 7) {
          return (
            <div className="col-4 p-1 mb-3 justify-content-left" key={day.time}>
              <div className="row ">
                <div className="col-auto">
                  <i
                    className={
                      "pr-2 daily-summary-icon wi wi-forecast-io-" + day.icon
                    }
                  />
                  <span className="desk-hour-detail-temp">
                    {Math.round(day.temperatureHigh)}
                    <i className="wi wi-degrees" />{" "}
                    {Math.round(day.temperatureLow)}
                    <i className="wi wi-degrees" />
                  </span>
                </div>
              </div>
              <Moment unix format="dddd" className="font-weight-bold">
                {day.sunriseTime}
              </Moment>
              <div>{day.summary}</div>
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
)(SevenDaysDesktop);
