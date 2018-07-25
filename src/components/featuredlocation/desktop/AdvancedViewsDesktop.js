import React from "react";
import { connect } from "react-redux";
import { dailyHumidityData, windSpeedData } from "../../../actions/advanced";
import HumidityChart from "../charts/HumidityChart";
import WindSpeedChart from "../charts/WindSpeedChart";

class AdvancedViewsDesktop extends React.Component {
  render() {
    console.log(windSpeedData(this.props.weather));
    return (
      <div className="row justifiy-content-center">
        <div className="col-6 justifiy-content-center align-items-center p-3">
          <div className="text-center">
            <h3 className="pb-0 mb-0">Weekly Humidity</h3>
            <span className="pt-0 text-weight-light text-center">
              High of {dailyHumidityData(this.props.weather).high}%
            </span>
          </div>
          <div className="pl-1">
            <HumidityChart
              humidity={dailyHumidityData(this.props.weather)}
              width={this.props.chartWidth}
            />
          </div>
        </div>
        <div className="col-6 justifiy-content-center align-items-center p-3">
          <div className="text-center">
            <h3 className="pb-0 mb-0">Weekly Wind</h3>
            <span className="pt-0 text-weight-light text-center">
              Speeds up to {windSpeedData(this.props.weather).high}{" "}
              {this.props.metric ? "m/s" : "mph"}
            </span>
          </div>
          <div className="pl-1">
            <WindSpeedChart
              windSpeed={windSpeedData(this.props.weather)}
              width={this.props.chartWidth}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.featuredLocation.weather,
    metric: state.currentUser.metric,
    chartWidth: state.windowSize / 3
  };
};

export default connect(
  mapStateToProps,
  null
)(AdvancedViewsDesktop);
