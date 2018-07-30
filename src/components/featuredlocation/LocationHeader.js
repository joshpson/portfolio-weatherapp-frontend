import React from "react";
import { connect } from "react-redux";
import { iconHourSrc } from "../../actions/icons";

const LocationHeader = ({ location, weather, windowSize, mobile }) => {
  return (
    <div>
      <div className="row justify-content-center pt-2">
        {!mobile ? (
          <div className="col-auto ">
            <img
              className="featured-icon"
              src={iconHourSrc(weather.currently.icon)}
            />
          </div>
        ) : null}
        <div className="col-auto text-center featured-location-header pt-md-2">
          {location.name}
        </div>
        <div className="col-auto featured-location-header pt-md-2">
          <span>
            {Math.round(weather.currently.temperature)}
            <i className="wi wi-degrees" />
          </span>
        </div>
        <div className="col-12 text-center featured-location-summary pb-3">
          {mobile ? (
            <span>
              <img
                className="featured-icon"
                src={iconHourSrc(weather.currently.icon)}
              />{" "}
            </span>
          ) : (
            <span>Currently: </span>
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
