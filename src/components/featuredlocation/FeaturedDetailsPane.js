import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";

const FeaturedDetailsPane = ({ currently, daily, metric, mobile }) => {
  return (
    <div className="row justify-content-between justify-content-md-center text-center  pt-2">
      {mobile ? (
        <div className="col-12 pt-0 pb-3">
          <i className={"detail-icon wi wi-forecast-io-" + currently.icon} />
          <br />
          <div className="detail-text pt-1">
            <span className="font-weight-bold">Currently</span>
            <br />
            {currently.summary}
          </div>
        </div>
      ) : null}
      <div className="col-1" />
      {/*Icon*/}
      <div className="col-4 col-md-2 p-2">
        <i className="wi wi-windy detail-icon" />
        <br />
        <div className="detail-text pt-1">
          <span className="font-weight-bold">Wind</span>
          <br />
          {Math.round(currently.windSpeed)} {metric ? "m/s" : "mph"}
        </div>
      </div>
      {/*Icon*/}
      <div className="col-4 col-md-2 p-2">
        <i
          className={
            "detail-icon wi wi-wind towards-" + currently.windBearing + "-deg"
          }
        />
        <br />
        <div className="detail-text pt-1">
          <span className="font-weight-bold">Wind Direction</span>
          <br />
          {currently.windBearing}
        </div>
      </div>
      {/*Icon*/}
      <div className="col-4 col-md-2 p-2">
        <i className="wi wi-barometer detail-icon" />
        <br />
        <div className="detail-text pt-1">
          <span className="font-weight-bold">Pressure</span>
          <br />
          {Math.round(currently.pressure)} MB
        </div>
      </div>
      {/*Icon*/}
      <div className="col-4 col-md-2 p-2 ">
        <i className="wi wi-thermometer detail-icon" /> <br />
        <div className="detail-text pt-1">
          <span className="font-weight-bold">Feels</span>
          <br />
          {Math.round(currently.apparentTemperature)}
          <i className="wi wi-degrees" />
        </div>
      </div>
      {/*Icon*/}
      <div className="col-4 col-md-2 p-2">
        <i className="wi wi-humidity detail-icon" />
        <br />
        <div className="detail-text pt-1">
          <span className="font-weight-bold">Humidity</span>
          <br />
          {Math.round(currently.humidity * 100)}%
        </div>
      </div>

      {/*Spacers*/}
      <div className="col-1" />
      <div className="col-1" />
      {/*Icon*/}
      <div className="col-4 col-md-2 p-2">
        <i className="wi wi-humidity detail-icon" />
        <br />
        <div className="detail-text pt-1">
          <span className="font-weight-bold">Visibility</span>
          <br />
          {currently.visibility}
        </div>
      </div>
      {/*Icon*/}
      <div className="col-4 col-md-2 p-2">
        <i className="wi wi-day-sunny detail-icon" />
        <br />
        <div className="detail-text pt-1">
          <span className="font-weight-bold">UV Index</span>
          <br />
          {currently.uvIndex}
        </div>
      </div>
      {/*Icon*/}
      <div className="col-4 col-md-2 p-2">
        <i className="wi wi-humidity detail-icon" />
        <br />
        <div className="detail-text pt-1">
          <span className="font-weight-bold">Ozone</span>
          <br />
          {Math.round(currently.ozone)}
        </div>
      </div>

      {/*Icon*/}
      <div className="col-4 col-md-2 p-2 ">
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

      {/*Icon*/}
      <div className="col-4 col-md-2 p-2 ">
        <i className="wi wi-moon-alt-waning-crescent-6 detail-icon" />
        <br />
        <div className="detail-text pt-1">
          <span className="font-weight-bold">Moon Phase</span>
          <br />
          {daily.moonPhase}
        </div>
      </div>

      <div className="col-1" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currently: state.featuredLocation.weather.currently,
    daily: state.featuredLocation.weather.daily.data[0],
    metric: state.currentUser.metric,
    mobile: state.windowSize < 767
  };
};

export default connect(
  mapStateToProps,
  null
)(FeaturedDetailsPane);
