import React from "react";
import { connect } from "react-redux";
import Octicon, { ChevronDown, ChevronUp } from "@githubprimer/octicons-react";

import DayItemMobile from "./DayItemMobile";

class SevenDaysMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }

  handleDropdown = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 p-1">
          <div className="card border-0 main-background">
            <div className="card-body p-0">
              <div
                data-toggle="collapse"
                href="#dailyWeatherList"
                className="p-3"
                onClick={this.handleDropdown}
              >
                <h5 className="card-title pl-2">Next 7 Days</h5>
                <div className="row justify-content-left pl-2">
                  <div className="col-1 align-self-center pr-0">
                    <Octicon
                      size="small"
                      icon={this.state.active ? ChevronUp : ChevronDown}
                    />
                  </div>
                  <div className="col-11">
                    <div className="card-text">
                      {this.props.weather.daily.summary}
                    </div>
                  </div>
                </div>
              </div>
              <ul
                className="list-group list-group-flush p-0 m-0 collapse show"
                id="dailyWeatherList"
              >
                {this.props.weather.daily.data.map((day, index) => {
                  if (index > 0) {
                    return (
                      <DayItemMobile
                        day={day}
                        index={index}
                        key={day.time}
                        timezone={this.props.weather.timezone}
                        metric={this.props.metric}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
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
    metric: state.metric
  };
};

export default connect(
  mapStateToProps,
  null
)(SevenDaysMobile);
