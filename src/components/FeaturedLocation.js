import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";

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
      <div className="container">
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
              <div className="col-sm">
                <div className="card border-0">
                  <div className="card-body p-0 ">
                    <div data-toggle="collapse" href="#dailyWeatherList">
                      <h5 class="card-title">Next 7 Days</h5>
                      <div className="card-text">
                        {this.props.weather.daily.summary}
                      </div>
                    </div>
                    <ul
                      className="list-group list-group-flush p-0 m-0 collapse show"
                      id="dailyWeatherList"
                    >
                      {this.props.weather.daily.data.map((day, index) => {
                        if (index > 0) {
                          return (
                            <li className="list-group-item pl-0 pr-0">
                              <div className="row">
                                <div class="col-2">
                                  <i
                                    className={
                                      "card-icon wi wi-forecast-io-" + day.icon
                                    }
                                  />
                                </div>
                                <div class="col-10">
                                  <Moment unix format="dddd">
                                    {day.sunriseTime}
                                  </Moment>
                                  <br />
                                  {day.summary}
                                </div>
                              </div>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                </div>
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
