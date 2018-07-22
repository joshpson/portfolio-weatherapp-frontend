import React from "react";
import { connect } from "react-redux";
import DetailsPane from "./DetailsPane";

import Moment from "react-moment";

import "../style/weather-icons.min.css";

const Next24Hours = ({ weather }) => {
  return (
    <div className="card border-0 bg-dark">
      <div className="card-body p-0 ">
        <div data-toggle="collapse" href="#hourlyWeatherList" className="p-3">
          <h5 class="card-title">Next 24 Hours</h5>
          <div className="card-text">{weather.hourly.summary}</div>
        </div>
        <ul
          className="list-group list-group-flush p-0 m-0 collapse"
          id="hourlyWeatherList"
        >
          {weather.hourly.data.map((hour, index) => {
            if (index < 24) {
              return (
                <li
                  className="list-group-item bg-dark pl-0"
                  data-toggle="collapse"
                  href={`#hour${index}Details`}
                >
                  <div className="row">
                    <div class="d-flex col-3 justify-content-center pl-0">
                      <div className="d-flex justify-content-center align-items-center">
                        <i
                          className={
                            "daily-summary-icon wi wi-forecast-io-" + hour.icon
                          }
                        />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="row justify-content-between">
                        <div className="col-6 p-0">
                          <Moment
                            unix
                            format="hh:mm (ddd)"
                            className="font-weight-bold"
                          >
                            {hour.time}
                          </Moment>
                        </div>
                        <div className="col-6 font-weight-bold text-right ">
                          <div>
                            {Math.round(hour.temperature)}
                            <i className="wi wi-degrees" />
                          </div>
                        </div>
                      </div>
                      <div className="row pt-0 pl-0 justify-content-between daily-summary-text">
                        <div className="col-5 p-0">{hour.summary}</div>
                        <div className="col-7 pb-0 text-right">
                          {hour.precipType ? (
                            <span className="text-capitalize">
                              {Math.round(hour.precipProbability * 100)}%{" "}
                              {hour.precipType}
                              {" - "}
                            </span>
                          ) : null}
                          Feels {Math.round(hour.apparentTemperature)}
                          <i className="wi wi-degrees" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="container-fluid collapse pt-3 pr-0 pl-0"
                    id={`hour${index}Details`}
                  >
                    <DetailsPane data={hour} />
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    weather: state.featuredLocation.weather
  };
};

export default connect(
  mapStateToProps,
  null
)(Next24Hours);
