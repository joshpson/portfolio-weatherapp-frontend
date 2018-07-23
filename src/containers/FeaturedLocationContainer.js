import React from "react";
import { connect } from "react-redux";
import FeaturedDetailsPane from "../components/LocationView/FeaturedDetailsPane";
import Next7DaysMobile from "../components/LocationView/Next7DaysMobile";
import Next24HoursMobile from "../components/LocationView/Next24HoursMobile";
import Next7DaysDesktop from "../components/LocationView/Next7DaysDesktop";
import Next24HoursDesktop from "../components/LocationView/Next24HoursDesktop";
import LocationHeader from "../components/LocationView/LocationHeader";

import {
  setFeaturedLocation,
  clearFeaturedLocation
} from "../actions/location";
import "../style/weather-icons.min.css";

class FeaturedLocationContainer extends React.Component {
  componentDidMount() {
    this.props.setFeaturedLocation(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearFeaturedLocation();
  }

  render() {
    return (
      <div className="container bg-dark">
        {this.props.weather.currently ? (
          <div className="card mt-2 mb-2 bg-dark border-0 p-2">
            <LocationHeader />
            <FeaturedDetailsPane />
            {this.props.windowSize < 767 ? (
              <div>
                <Next24HoursMobile />
                <Next7DaysMobile />
              </div>
            ) : (
              <div>
                <Next24HoursDesktop />
                <Next7DaysDesktop />
              </div>
            )}
          </div>
        ) : (
          "Loading"
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.featuredLocation.weather,
    windowSize: state.windowSize
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFeaturedLocation: id => dispatch(setFeaturedLocation(id)),
    clearFeaturedLocation: () => dispatch(clearFeaturedLocation())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedLocationContainer);
