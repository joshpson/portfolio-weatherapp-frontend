import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";

const LocationHeader = ({ location, weather, windowSize, mobile }) => {
  return (
    <div>
      <div className="row justify-content-center pt-2">
        {!mobile ? (
          <div className="col-auto featured-location-header ">
            <i
              className={
                "header-icon wi wi-forecast-io-" + weather.currently.icon
              }
            />
          </div>
        ) : null}
        <div className="col-auto text-center featured-location-header ">
          {location.name}
        </div>
        <div className="col-auto featured-location-header ">
          <span>
            {Math.round(weather.currently.temperature)}
            <i className="wi wi-degrees" />
          </span>
        </div>
        <div className="col-12 text-center featured-location-summary pb-3">
          <Moment format="h:mm A z" unix tz={weather.timezone}>
            {weather.currently.time}
          </Moment>
          <span>
            {" "}
            -{" "}
            {mobile ? (
              <span>
                <i className={"wi wi-forecast-io-" + weather.currently.icon} />{" "}
              </span>
            ) : null}
            {weather.currently.summary}
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    weather: state.featuredLocation.weather,
    location: state.featuredLocation.location,
    mobile: state.windowSize < 767
  };
};

export default connect(
  mapStateToProps,
  null
)(LocationHeader);
