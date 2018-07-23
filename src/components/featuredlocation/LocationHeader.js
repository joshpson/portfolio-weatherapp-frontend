import React from "react";
import { connect } from "react-redux";

const LocationHeader = ({ location, weather }) => {
  return (
    <div className="row justify-content-center featured-location-header pb-3">
      <div className="col-auto ">{location.name} </div>
      <div className="col-auto">
        <span>
          {Math.round(weather.currently.temperature)}
          <i className="wi wi-degrees" />
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    weather: state.featuredLocation.weather,
    location: state.featuredLocation.location
  };
};

export default connect(
  mapStateToProps,
  null
)(LocationHeader);
