import React from "react";
import "../style/weather-icons.min.css";

const DetailsPane = ({ data }) => {
  return (
    <div className="row justify-content-between text-center no-gutters p-0">
      <div className="col-2">
        <i className="wi wi-windy detail-icon" />
        <br />
        <div className="detail-text">{Math.round(data.windSpeed)} mph</div>
      </div>
      <div className="col-2">
        <i className="wi wi-day-sunny detail-icon" />
        <br />
        <div className="detail-text">{data.uvIndex} UV</div>
      </div>
      <div className="col-2">
        <i className="wi wi-humidity detail-icon" />
        <br />
        <div className="detail-text">{Math.round(data.humidity * 100)}%</div>
      </div>
      <div className="col-2">
        <i className="wi wi-raindrop detail-icon" />
        <br />
        <div className="detail-text">
          {Math.round(data.dewPoint)}
          <i className="wi wi-degrees" />
        </div>
      </div>
      <div className="col-2">
        <i className="wi wi-barometer detail-icon" />
        <br />
        <div className="detail-text">{Math.round(data.pressure)} MB</div>
      </div>
    </div>
  );
};
export default DetailsPane;

