import React from "react";
import Moment from "react-moment";

const FeaturedDetailsPane = ({ currently, daily }) => {
  return (
    <div>
      <div className="row justify-content-between justify-content-md-center text-center no-gutters pt-2">
        <div className="col-3">
          <i className={"detail-icon wi wi-forecast-io-" + currently.icon} />
          <br />
          <div className="detail-text pt-1">
            <span className="font-weight-bold">Currently</span>
            <br />
            {currently.summary}
          </div>
        </div>
        <div className="col-3">
          <i className="wi wi-windy detail-icon" />
          <br />
          <div className="detail-text pt-1">
            <span className="font-weight-bold">Wind</span>
            <br />
            {Math.round(currently.windSpeed)} mph
          </div>
        </div>

        <div className="col-3">
          <i className="wi wi-barometer detail-icon" />
          <br />
          <div className="detail-text pt-1">
            <span className="font-weight-bold">Pressure</span>
            <br />
            {Math.round(currently.pressure)} MB
          </div>
        </div>
        <div className="col-3 ">
          <i className="wi wi-thermometer detail-icon" /> <br />
          <div className="detail-text pt-1">
            <span className="font-weight-bold">Feels</span>
            <br />
            {Math.round(currently.apparentTemperature)}
            <i className="wi wi-degrees" />
          </div>
        </div>
      </div>
      <div className="row justify-content-between justify-content-md-center text-center no-gutters pt-4">
        <div className="col-3 ">
          <i className="wi wi-sunset detail-icon" />
          <br />
          <div className="detail-text pt-1">
            <span className="font-weight-bold">Sunset</span>
            <br />
            <Moment format="hh:mm" unix>
              {daily.sunsetTime}
            </Moment>
          </div>
        </div>
        <div className="col-3">
          <i className="wi wi-day-sunny detail-icon" />
          <br />
          <div className="detail-text pt-1">
            <span className="font-weight-bold">UV Index</span>
            <br />
            {currently.uvIndex}
          </div>
        </div>
        <div className="col-3">
          <i className="wi wi-humidity detail-icon" />
          <br />
          <div className="detail-text pt-1">
            <span className="font-weight-bold">Humidity</span>
            <br />
            {Math.round(currently.humidity * 100)}%
          </div>
        </div>
        <div className="col-3 ">
          <i className="wi wi-moon-alt-waning-crescent-6 detail-icon" />
          <br />
          <div className="detail-text pt-1">
            <span className="font-weight-bold">Moon Phase</span>
            <br />
            {daily.moonPhase}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDetailsPane;
