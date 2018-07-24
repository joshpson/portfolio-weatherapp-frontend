import React from "react";
import { connect } from "react-redux";

const LocationHeader = ({ location, weather, windowSize, mobile }) => {
  return (
    <div>
      <div className="row justify-content-center pt-0">
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
          {!mobile ? (
            "Currently: "
          ) : (
            <span>
              <i className={"wi wi-forecast-io-" + weather.currently.icon} />{" "}
            </span>
          )}
          {weather.currently.summary}
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
