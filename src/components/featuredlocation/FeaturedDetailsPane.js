import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import Octicon, { Eye } from "@githubprimer/octicons-react";
import { cardinalDirection } from "../../actions/direction";
import { phaseCalculator } from "../../actions/moon";

const FeaturedDetailsPane = ({ currently, daily, metric, mobile }) => {
  return (
    <div className="row justify-content-between justify-content-md-center text-center  pt-2">
      {mobile ? (
        <div className="col-12 pt-0 pb-3">
          <i className={"detail-icon wi wi-forecast-io-" + currently.icon} />
          <br />
          <div className="featured-detail-text pt-1">
            <span className="font-weight-bold">Currently</span>
            <br />
            {currently.summary}
          </div>
        </div>
      ) : null}
      {!mobile ? <div className="col-1" /> : null}
      {/*Icon*/}
      <div className="col-4 col-md-2 p-2">
        <i className="wi wi-umbrella detail-icon" />
        <br />
        <div className="featured-detail-text pt-1">
          <span className="font-weight-bold">Precip</span>
          <br />
          {Math.round(currently.precipProbability)}%
        </div>
      </div>
      {/*Icon*/}
      <div className="col-4 col-md-2 p-2">
        <i className="wi wi-windy detail-icon" />
        <br />
        <div className="featured-detail-text pt-1">
          <span className="font-weight-bold">Wind</span>
          <br />
          {Math.round(currently.windSpeed)} {metric ? "m/s" : "mph"}
        </div>
      </div>
      {/*Icon*/}
      {!mobile ? (
        <div className="col-4 col-md-2 p-2">
          <i
            className={
              "detail-icon wi wi-wind towards-" + currently.windBearing + "-deg"
            }
          />
          <br />
          <div className="featured-detail-text pt-1">
            <span className="font-weight-bold">Direction</span>
            <br />
            {cardinalDirection(currently.windBearing)}
          </div>
        </div>
      ) : null}
      {/*Icon*/}
      <div className="col-4 col-md-2 p-2">
        <i className="wi wi-barometer detail-icon" />
        <br />
        <div className="featured-detail-text pt-1">
          <span className="font-weight-bold">Pressure</span>
          <br />
          {Math.round(currently.pressure)} MB
        </div>
      </div>
      {/*Icon*/}
      <div className="col-4 col-md-2 p-2 ">
        <i className="wi wi-thermometer detail-icon" /> <br />
        <div className="featured-detail-text pt-1">
          <span className="font-weight-bold">Feels</span>
          <br />
          {Math.round(currently.apparentTemperature)}
          <i className="wi wi-degrees" />
        </div>
      </div>

      {/*Spacers*/}
      {!mobile ? <div className="col-1" /> : null}
      {!mobile ? <div className="col-1" /> : null}
      {/*Icon*/}
      <div className="col-4 col-md-2 p-2">
        <i className="wi wi-humidity detail-icon" />
        <br />
        <div className="featured-detail-text pt-1">
          <span className="font-weight-bold">Humidity</span>
          <br />
          {Math.round(currently.humidity * 100)}%
        </div>
      </div>
      {/*Icon*/}
      <div className="col-4 col-md-2 p-2">
        <Octicon size="medium" icon={Eye} />
        <br />
        <div className="featured-detail-text pt-1">
          <span className="font-weight-bold">Visibility</span>
          <br />
          {Math.round(currently.visibility)} {metric ? "mi" : "km"}
        </div>
      </div>
      {/*Icon*/}
      <div className="col-4 col-md-2 p-2">
        <i className="wi wi-day-sunny detail-icon" />
        <br />
        <div className="featured-detail-text pt-1">
          <span className="font-weight-bold">UV Index</span>
          <br />
          {currently.uvIndex}
        </div>
      </div>

      {/*Icon*/}
      {currently.time > daily.sunriseTime ? (
        <div className="col-4 col-md-2 p-2 ">
          <i className="wi wi-sunset detail-icon" />
          <br />
          <div className="featured-detail-text pt-1">
            <span className="font-weight-bold">Sunset</span>
            <br />
            <Moment format="hh:mm A" unix>
              {daily.sunsetTime}
            </Moment>
          </div>
        </div>
      ) : (
        <div className="col-4 col-md-2 p-2 ">
          <i className="wi wi-sunrise detail-icon" />
          <br />
          <div className="featured-detail-text pt-1">
            <span className="font-weight-bold">Sunrise</span>
            <br />
            <Moment format="hh:mm A" unix>
              {daily.sunriseTime}
            </Moment>
          </div>
        </div>
      )}

      {/*Icon*/}
      <div className="col-4 col-md-2 p-2 ">
        <i
          className={"wi " + phaseCalculator(daily.moonPhase) + " detail-icon"}
        />
        <br />
        <div className="featured-detail-text pt-1">
          <span className="font-weight-bold">Moon</span>
          <br />
          {phaseCalculator(daily.moonPhase).split("-")[2] +
            " " +
            phaseCalculator(daily.moonPhase).split("-")[3]}
        </div>
      </div>

      {!mobile ? <div className="col-1" /> : null}
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
