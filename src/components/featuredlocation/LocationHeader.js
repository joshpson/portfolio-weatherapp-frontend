import React from "react";
import { connect } from "react-redux";
import { iconHourSrc } from "../../actions/icons";

const LocationHeader = ({ location, weather, windowSize, mobile }) => {
  return (
    <div>
      <div className="row justify-content-center mb-lg-0 location-header-row">
        <div className="col-auto pr-1 order-2 pl-0 order-md-1 align-self-center">
          <img
            className="featured-icon"
            src={iconHourSrc(weather.currently.icon)}
          />
        </div>
        <div className="col-md-auto col-12 pl-md-1 order-1 order-md2 text-center align-self-center featured-location-name">
          <div>{location.name}</div>
        </div>
        <div className="col-auto pl-md-1 order-3 featured-location-degrees align-self-center">
          <span>
            {Math.round(weather.currently.temperature)}
            <i className="wi wi-degrees" />
          </span>
        </div>
        {!mobile ? (
          <div className="col-12 text-center featured-location-summary order-4 pb-3">
            Currently: {weather.currently.summary}
          </div>
        ) : null}
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
