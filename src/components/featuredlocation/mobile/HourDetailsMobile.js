import React from "react";
import "../../../style/weather-icons.min.css";

const HourDetailsMobile = ({ data, metric }) => {
  return (
    <div className="row justify-content-between text-center no-gutters p-0">
      <div className="col-2">
        <i className="wi wi-umbrella detail-icon" />
        <br />
        <div className="detail-text">
          <span className="font-weight-bold">Precip</span>
          <br />
          {Math.round(data.precipProbability)}%
        </div>
      </div>
      <div className="col-2">
        <i className="wi wi-windy detail-icon" />
        <br />
        <div className="detail-text">
          <span className="font-weight-bold">Wind</span>
          <br />
          {Math.round(data.windSpeed)} {metric ? "m/s" : "mph"}
        </div>
      </div>

      <div className="col-2">
        <i className="wi wi-humidity detail-icon" />
        <br />

        <div className="detail-text">
          <span className="font-weight-bold">Humidity</span>
          <br />
          {Math.round(data.humidity * 100)}%
        </div>
      </div>

      <div className="col-2">
        <i className="wi wi-barometer detail-icon" />
        <br />

        <div className="detail-text">
          <span className="font-weight-bold">Pressure</span>
          <br />
          {Math.round(data.pressure)} MB
        </div>
      </div>
    </div>
  );
};

export default HourDetailsMobile;
