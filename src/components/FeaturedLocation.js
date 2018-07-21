import React from "react";
import { connect } from "react-redux";
import "../style/weather-icons.min.css";

import { setFeaturedLocation } from "../actions/location";

class FeaturedLocation extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setFeaturedLocation(this.props.match.params.id);
  }

  render() {
    return (
      <div className="container">
        {this.props.weather.currently ? (
          <div>
            <div class="row justify-content-md-center featured-temp">
              <div class="col col-auto order-2 order-sm-1 text-right">
                <i
                  className={
                    "card-icon wi wi-forecast-io-" +
                    this.props.weather.currently.icon
                  }
                />
              </div>
              <div class="col-sm-auto order-1 order-sm-2">
                {this.props.location.name}
              </div>
              <div class="col col-auto order-3 order-sm-3">
                {Math.round(this.props.weather.currently.temperature)}
                <i className="wi wi-degrees" />
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <span>{this.props.weather.hourly.summary}</span>
              </div>
              <div className="col-sm">One of three columns</div>
              <div className="col-sm">One of three columns</div>
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
