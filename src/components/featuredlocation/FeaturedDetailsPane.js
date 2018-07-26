import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import Octicon, { Eye } from "@githubprimer/octicons-react";
import { cardinalDirection } from "../../actions/direction";
import { sunTime } from "../../actions/suntime";

import { phaseCalculator } from "../../actions/moon";

const FeaturedDetailsPane = ({
  currently,
  today,
  tomorrow,
  metric,
  mobile,
  timezone
}) => {
  return (
    <div className="row justify-content-between justify-content-md-center text-center pt-md-2">
      {!mobile ? <div className="col-1" /> : null}
      {/*Icon*/}
      <div className="col-3 col-md-2 p-2">
        <i className="wi wi-umbrella detail-icon" />
        <br />
        <div className="featured-detail-text pt-1">
          <span className="font-weight-bold">Precip</span>
          <br />
          {Math.round(currently.precipProbability)}%
        </div>
      </div>
      {/*Icon*/}
      <div className="col-3 col-md-2 p-2">
        <i className="wi wi-windy detail-icon" />
        <br />
        <div className="featured-detail-text pt-1">
          <span className="font-weight-bold">Wind</span>
          <br />
          {Math.round(currently.windSpeed)} {metric ? "m/s" : "mph"}
        </div>
      </div>
      {/*Icon*/}

      <div className="col-3 col-md-2 p-2">
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

      {/*Icon*/}
      <div className="col-3 col-md-2 p-2 ">
        <i className="wi wi-thermometer detail-icon" /> <br />
        <div className="featured-detail-text pt-1">
          <span className="font-weight-bold">Feels</span>
          <br />
          {Math.round(currently.apparentTemperature)}
          <i className="wi wi-degrees" />
        </div>
      </div>
      {/*Icon*/}
      <div className="col-3 col-md-2 p-2">
        <i className="wi wi-barometer detail-icon" />
        <br />
        <div className="featured-detail-text pt-1">
          <span className="font-weight-bold">Pressure</span>
          <br />
          {Math.round(currently.pressure)} MB
        </div>
      </div>

      {/*Spacers*/}
      {!mobile ? <div className="col-1" /> : null}
      {!mobile ? <div className="col-1" /> : null}

      {/*Icon*/}
      <div className="col-3 col-md-2 p-2">
        <i className="wi wi-humidity detail-icon" />
        <br />
        <div className="featured-detail-text pt-1">
          <span className="font-weight-bold">Humidity</span>
          <br />
          {Math.round(currently.humidity * 100)}%
        </div>
      </div>
      {/*Icon*/}
      <div className="col-3 col-md-2 p-2">
        <Octicon size="medium" icon={Eye} />
        <br />
        <div className="featured-detail-text pt-1">
          <span className="font-weight-bold">Visibility</span>
          <br />
          {Math.round(currently.visibility)} {metric ? "km" : "mi"}
        </div>
      </div>
      {/*Icon*/}
      {!mobile ? (
        <div className="col-3 col-md-2 p-2">
          <i className="wi wi-day-sunny detail-icon" />
          <br />
          <div className="featured-detail-text pt-1">
            <span className="font-weight-bold">UV Index</span>
            <br />
            {currently.uvIndex}
          </div>
        </div>
      ) : null}

      {/*Icon*/}

      <div className="col-3 col-md-2 p-2 ">
        <i className="wi wi-sunrise detail-icon" />
        <br />
        <div className="featured-detail-text pt-1">
          <span className="font-weight-bold">
            {sunTime(currently, today, tomorrow).type}
          </span>
          <br />
          <Moment format="h:mm A" unix tz={timezone}>
            {sunTime(currently, today, tomorrow).time}
          </Moment>
        </div>
      </div>

      {/*Icon*/}
      {!mobile ? (
        <div className="col-3 col-md-2 p-2 ">
          <i
            className={
              "wi " + phaseCalculator(today.moonPhase) + " detail-icon"
            }
          />
          <br />
          <div className="featured-detail-text pt-1">
            <span className="font-weight-bold">Moon</span>
            <br />
            {phaseCalculator(today.moonPhase).split("-")[2] +
              " " +
              phaseCalculator(today.moonPhase).split("-")[3]}
          </div>
        </div>
      ) : null}

      {!mobile ? <div className="col-1" /> : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    timezone: state.featuredLocation.weather.timezone,
    currently: state.featuredLocation.weather.currently,
    today: state.featuredLocation.weather.daily.data[0],
    tomorrow: state.featuredLocation.weather.daily.data[1],
    metric: state.currentUser.metric,
    mobile: state.windowSize < 767
  };
};

export default connect(
  mapStateToProps,
  null
)(FeaturedDetailsPane);
