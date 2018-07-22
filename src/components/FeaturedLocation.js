import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import FeaturedDetailsPane from "./FeaturedDetailsPane";

import Next7Days from "./Next7Days";
import Next24Hours from "./Next24Hours";

import "../style/weather-icons.min.css";

import {
  setFeaturedLocation,
  clearFeaturedLocation
} from "../actions/location";

class FeaturedLocation extends React.Component {
  constructor(props) {
    super(props);
  }

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
          <div>
            <div className="card mt-2 mb-2 bg-dark border-0 p-2">
              <div className="row justify-content-center featured-location-header">
                <div className="col-auto ">{this.props.location.name} </div>
                <div className="col-auto">
                  <span>
                    {Math.round(this.props.weather.currently.temperature)}
                    <i className="wi wi-degrees" />
                  </span>
                </div>
              </div>
              <FeaturedDetailsPane
                currently={this.props.weather.currently}
                daily={this.props.weather.daily.data[0]}
              />
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 p-1">
                  <Next24Hours />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 p-1">
                  <Next7Days />
                </div>
              </div>
            </div>
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
    location: state.featuredLocation.location,
    weather: state.featuredLocation.weather
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
)(FeaturedLocation);
