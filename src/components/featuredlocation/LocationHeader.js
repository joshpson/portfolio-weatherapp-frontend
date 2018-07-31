import React from "react";
import { connect } from "react-redux";
import { iconHourSrc } from "../../actions/icons";

const LocationHeader = ({ location, weather, windowSize, mobile }) => {
  return (
    <div>
      <div className="row justify-content-md-center justify-content-left location-header-row">
        <div className="col-3 col-md-auto align-self-left">
          <img
            className="featured-icon"
            src={iconHourSrc(weather.currently.icon)}
          />
        </div>
        <div className="col-9 col-md-auto text-left align-self-center featured-details">
          {!mobile ? (
            <div>
              <span className="featured-location-name">
                {Math.round(weather.currently.temperature)}
                <i className="wi wi-degrees" /> - {location.name}
              </span>
              <br />
              <span className="featured-location-summary">
                Currently: {weather.currently.summary}
              </span>
            </div>
          ) : (
            <div>
              <span className="featured-location-summary">
                <strong>
                  Currently {Math.round(weather.currently.temperature)}
                  <i className="wi wi-degrees" />
                </strong>
                <br />
                {weather.currently.summary}
              </span>
            </div>
          )}
        </div>
        <div className="col-1" />
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
