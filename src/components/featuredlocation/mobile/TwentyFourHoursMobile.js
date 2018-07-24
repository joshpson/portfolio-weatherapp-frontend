import React from "react";
import { connect } from "react-redux";
import HourItemMobile from "./HourItemMobile";

import "../../../style/weather-icons.min.css";

const TwentyFourHoursMobile = ({ weather, metric }) => {
  return (
    <div className="row justify-content-center pt-3 main-background ">
      <div className="col-12 col-md-10 p-1">
        <div className="card border-0">
          <div className="card-body p-0 main-background ">
            <div
              data-toggle="collapse"
              href="#hourlyWeatherList"
              className="p-3"
            >
              <h5 className="card-title pl-4">Next 24 Hours</h5>
              <div className="card-text pl-4">{weather.hourly.summary}</div>
            </div>
            <div
              className="list-group list-group-flush p-0 m-0 collapse"
              id="hourlyWeatherList"
            >
              {weather.hourly.data.map((hour, index) => {
                if (index < 24) {
                  return (
                    <HourItemMobile
                      hour={hour}
                      index={index}
                      metric={metric}
                      key={hour.time}
                      timezone={weather.timezone}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
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
)(TwentyFourHoursMobile);
