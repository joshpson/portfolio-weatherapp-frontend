import React from "react";
import { connect } from "react-redux";

const LocationHeader = ({ location, weather, windowSize }) => {
  return (
    <div>
      <div className="row justify-content-center featured-location-header pb-3 pb-md-0">
        {windowSize > 767 ? (
          <div className="col-auto ">
            <i
              className={
                "header-icon wi wi-forecast-io-" + weather.currently.icon
              }
            />
          </div>
        ) : null}

        <div className="col-auto ">{location.name} </div>
        <div className="col-auto">
          <span>
            {Math.round(weather.currently.temperature)}
            <i className="wi wi-degrees" />
          </span>
        </div>
      </div>
      {windowSize > 767 ? (
        <div className="row justify-content-center">
          Currently: {weather.currently.summary}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    weather: state.featuredLocation.weather,
    location: state.featuredLocation.location,
    windowSize: state.windowSize
  };
};

export default connect(
  mapStateToProps,
  null
)(LocationHeader);
