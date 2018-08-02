import React from "react";
import Moment from "react-moment";
import { phaseCalculator } from "../../../actions/moon";

import "../../../style/weather-icons.min.css";

const DayDetailsMobile = ({ data, metric, timezone }) => {
  return (
    <div>
      {" "}
      <div className="row justify-content-between text-center no-gutters">
        <div className="col-2">
          <i className="wi wi-umbrella summary-icon-mobile" />
          <br />
          <div className="detail-text-mobile">
            <span className="font-weight-bold">Precip</span>
            <br />
            {Math.round(data.precipProbability * 100)}%
          </div>
        </div>
        <div className="col-2">
          <i className="wi wi-humidity summary-icon-mobile" />
          <br />

          <div className="detail-text-mobile">
            <span className="font-weight-bold">Humidity</span>
            <br />
            {Math.round(data.humidity * 100)}%
          </div>
        </div>
        <div className="col-2">
          <i className="wi wi-sunrise summary-icon-mobile" />
          <br />
          <div className="detail-text-mobile">
            <span className="font-weight-bold">Sunrise</span>
            <br />
            <Moment format="h:mm A" key="momentTime" unix tz={timezone}>
              {data.sunriseTime}
            </Moment>
          </div>
        </div>

        <div className="col-2">
          <i className="wi wi-sunset summary-icon-mobile" />
          <br />

          <div className="detail-text-mobile">
            <span className="font-weight-bold">Sunset</span>
            <br />
            <Moment format="h:mm A" key="momentTime" unix tz={timezone}>
              {data.sunsetTime}
            </Moment>
          </div>
        </div>
      </div>
      <div className="row justify-content-between text-center mt-4 no-gutters">
        <div className="col-2">
          <i
            className={
              "wi " +
              phaseCalculator(data.moonPhase).className +
              " summary-icon"
            }
          />
          <br />
          <div className="detail-text-mobile">
            <span className="font-weight-bold">Lunar</span>
            <br />
            {phaseCalculator(data.moonPhase).description}
          </div>
        </div>
        <div className="col-2">
          <i className="wi wi-day-sunny summary-icon-mobile" />
          <br />

          <div className="detail-text-mobile">
            <span className="font-weight-bold">UV Index</span>
            <br />
            {data.uvIndex}
          </div>
        </div>
        <div className="col-2">
          <i className="wi wi-barometer summary-icon-mobile" />
          <br />
          <div className="detail-text-mobile">
            <span className="font-weight-bold">Pressure</span>
            <br />
            {[Math.round(data.pressure), " MB"]}
          </div>
        </div>

        <div className="col-2">
          <i className="wi wi-cloud summary-icon-mobile" />
          <br />

          <div className="detail-text-mobile">
            <span className="font-weight-bold">Cover</span>
            <br />
            {[Math.round(data.cloudCover * 100), "%"]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayDetailsMobile;
