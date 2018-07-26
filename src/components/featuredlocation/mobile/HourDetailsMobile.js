import React from "react";
import "../../../style/weather-icons.min.css";

const HourDetailsMobile = ({ data, metric }) => {
  return (
    <div className="row justify-content-between text-center no-gutters p-0">
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
        <i className="wi wi-windy summary-icon-mobile" />
        <br />
        <div className="detail-text-mobile">
          <span className="font-weight-bold">Wind</span>
          <br />
          {Math.round(data.windSpeed)} {metric ? "m/s" : "mph"}
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
        <i className="wi wi-barometer summary-icon-mobile" />
        <br />

        <div className="detail-text-mobile">
          <span className="font-weight-bold">Pressure</span>
          <br />
          {Math.round(data.pressure)} MB
        </div>
      </div>
    </div>
  );
};

export default HourDetailsMobile;
