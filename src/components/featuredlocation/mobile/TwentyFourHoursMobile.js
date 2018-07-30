import React from "react";
import { connect } from "react-redux";
import Octicon, { ChevronUp, ChevronDown } from "@githubprimer/octicons-react";

import HourItemMobile from "./HourItemMobile";

import "../../../style/weather-icons.min.css";

class TwentyFourHoursMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  handleDropdown = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <div className="row justify-content-center pt-3 main-background ">
        <div className="col-12 col-md-10 p-1">
          <div className="card border-0">
            <div className="card-body p-0 main-background ">
              <div
                data-toggle="collapse"
                href="#hourlyWeatherList"
                className="p-3"
                onClick={this.handleDropdown}
              >
                <h5 className="card-title pl-2">Next 24 Hours</h5>
                <div className="row justify-content-left pl-2">
                  <div className="col-1 align-self-center pr-0">
                    <Octicon
                      size="small"
                      icon={this.state.active ? ChevronUp : ChevronDown}
                    />
                  </div>
                  <div className="col-11">
                    <div className="card-text">
                      {this.props.weather.hourly.summary}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="list-group list-group-flush p-0 m-0 collapse"
                id="hourlyWeatherList"
              >
                {this.props.weather.hourly.data.map((hour, index) => {
                  if (index < 24) {
                    return (
                      <HourItemMobile
                        hour={hour}
                        index={index}
                        metric={this.props.metric}
                        key={hour.time}
                        timezone={this.props.weather.timezone}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.featuredLocation.weather,
    metric: state.currentUser.metric
  };
};

export default connect(
  mapStateToProps,
  null
)(TwentyFourHoursMobile);
