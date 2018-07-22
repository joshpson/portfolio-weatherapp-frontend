import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";

import "../style/weather-icons.min.css";

const Next7Days = ({ weather }) => {
  return (
    <div className="card border-0 bg-dark">
      <div className="card-body p-0">
        <div data-toggle="collapse" href="#dailyWeatherList" className="p-3">
          <h5 class="card-title">Next 7 Days</h5>
          <div className="card-text">{weather.daily.summary}</div>
        </div>
        <ul
          className="list-group list-group-flush p-0 m-0 collapse show"
          id="dailyWeatherList"
        >
          {weather.daily.data.map((day, index) => {
            if (index > 0) {
              return (
                <li className="list-group-item pl-0 bg-dark">
                  <div className="row">
                    <div class="d-flex col-3 justify-content-center">
                      <div className="d-flex justify-content-center align-items-center">
                        <i
                          className={
                            "daily-summary-icon wi wi-forecast-io-" + day.icon
                          }
                        />
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="row justify-content-between">
                        <div className="col-6 p-0">
                          <Moment
                            unix
                            format="dddd"
                            className="font-weight-bold"
                          >
                            {day.sunriseTime}
                          </Moment>
                        </div>
                        <div className="col-6 font-weight-bold text-right">
                          <div>
                            {Math.round(day.temperatureLow)}
                            <i className="wi wi-degrees" />{" "}
                            {Math.round(day.temperatureHigh)}
                            <i className="wi wi-degrees" />
                          </div>
                        </div>
                      </div>
                      <div className="row p-0">
                        <span className="daily-summary-text">
                          {day.summary}
                        </span>
                      </div>
                    </div>
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
)(Next7Days);
