import React from "react";
import "../style/weather-icons.min.css";

const HourDetails = ({ hour }) => {
  return (
    <div className="row justify-content-between text-center no-gutters p-0">
      <div className="col-2">
        <i className="wi wi-windy detail-icon" />
        <br />
        <div className="detail-text">{Math.round(hour.windSpeed)} mph</div>
      </div>
      <div className="col-2">
        <i className="wi wi-day-sunny detail-icon" />
        <br />
        <div className="detail-text">{hour.uvIndex} UV</div>
      </div>
      <div className="col-2">
        <i className="wi wi-humidity detail-icon" />
        <br />
        <div className="detail-text">{Math.round(hour.humidity * 100)}%</div>
      </div>
      <div className="col-2">
        <i className="wi wi-raindrop detail-icon" />
        <br />
        <div className="detail-text">
          {Math.round(hour.dewPoint)}
          <i className="wi wi-degrees" />
        </div>
      </div>
      <div className="col-2">
        <i className="wi wi-barometer detail-icon" />
        <br />
        <div className="detail-text">{Math.round(hour.pressure)} MB</div>
      </div>
    </div>
  );
};
export default HourDetails;

// time(pin): 1532228400
// summary(pin): "Rain"
// icon(pin): "rain"
// precipIntensity(pin): 0.1129
// precipProbability(pin): 0.8
// precipType(pin): "rain"
// temperature(pin): 67.91
// apparentTemperature(pin): 68.75
// dewPoint(pin): 65.71
// humidity(pin): 0.93
// pressure(pin): 1004.6
// windSpeed(pin): 7.34
// windGust(pin): 8.52
// windBearing(pin): 338
// cloudCover(pin): 0.99
// uvIndex(pin): 0
// visibility(pin): 4.4
// ozone(pin): 312.4
