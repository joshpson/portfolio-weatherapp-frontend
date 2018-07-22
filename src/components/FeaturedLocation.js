import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import Next7Days from "./Next7Days";
import Next24Hours from "./Next24Hours";

import "../style/weather-icons.min.css";

import { setFeaturedLocation } from "../actions/location";

class FeaturedLocation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setFeaturedLocation(this.props.match.params.id);
  }

  toggleDaily = e => {
    e.preventDefault();
    this.setState({
      sevenDays: !this.state.sevenDays
    });
  };

  render() {
    return (
      <div className="container bg-secondary">
        {this.props.weather.currently ? (
          <div>
            <div className="row justify-content-md-center featured-location-header">
              <div className="col col-auto order-3 order-md-1 text-right">
                <i
                  className={
                    "card-icon wi wi-forecast-io-" +
                    this.props.weather.currently.icon
                  }
                />
              </div>
              <div className="col-12 col-md-auto order-1 order-md-2">
                {this.props.location.name}
              </div>
              <div className="col col-auto order-2 order-md-3">
                {Math.round(this.props.weather.currently.temperature)}
                <i className="wi wi-degrees" />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 p-1">
                <Next24Hours />
              </div>
              <div className="col-12 col-md-6 p-1">
                <Next7Days />
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
    setFeaturedLocation: id => dispatch(setFeaturedLocation(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedLocation);
