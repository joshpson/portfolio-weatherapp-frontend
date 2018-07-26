import React from "react";
import { connect } from "react-redux";
import {
  dailyHumidityData,
  windSpeedData,
  dailyTemperature,
  dailyPressureData
} from "../../actions/advanced";
import HumidityChart from "./charts/HumidityChart";
import WindSpeedChart from "./charts/WindSpeedChart";
import TemperatureChart from "./charts/TemperatureChart";
import DailyPressureChart from "./charts/DailyPressureChart";

class AdvancedViews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyTempData: null,
      dailyWindData: null,
      dailyHumidityData: null,
      dailyPressureData: null
    };
  }

  componentDidMount() {
    this.setState({
      dailyTempData: dailyTemperature(this.props.weather),
      dailyWindData: windSpeedData(this.props.weather),
      dailyHumidityData: dailyHumidityData(this.props.weather),
      dailyPressureData: dailyPressureData(this.props.weather)
    });
  }

  render() {
    return (
      <div className="p-0">
        <div className="row justifiy-content-center pr-0 pl-0">
          <div className="col-12 col-lg-6 m-2 m-lg-0 justifiy-content-center align-items-center p-0">
            {this.state.dailyPressureData ? (
              <div>
                <div className="text-center">
                  <h3 className="pb-0 mb-0">Pressure</h3>
                  <span className="pt-0 pb-2 text-weight-light text-center">
                    Reaching {this.state.dailyPressureData.high} mb
                  </span>
                </div>
                <div className="pl-1 mt-2">
                  <DailyPressureChart pressure={this.state.dailyPressureData} />
                </div>
              </div>
            ) : null}
          </div>
          <div className="col-12 col-lg-6 m-2 m-lg-0 justifiy-content-center align-items-center p-0">
            {this.state.dailyTempData ? (
              <div>
                <div className="text-center">
                  <h3 className="pb-0 mb-0">Temperature</h3>
                  <span className="pt-0 pb-2 text-weight-light text-center">
                    High: {Math.round(this.state.dailyTempData.high)}
                    <i className="wi wi-degrees" /> Low:{" "}
                    {Math.round(this.state.dailyTempData.low)}
                    <i className="wi wi-degrees" />
                  </span>
                </div>
                <div className="pl-1 mt-2">
                  <TemperatureChart temperature={this.state.dailyTempData} />
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="row justifiy-content-center mt-lg-5 pr-0 pl-0">
          <div className="col-12 col-lg-6  m-2 m-lg-0 justifiy-content-center align-items-cente p-0">
            {this.state.dailyHumidityData ? (
              <div>
                <div className="text-center">
                  <h3 className="pb-0 mb-0">Humidity</h3>
                  <span className="pt-0 pb-2 text-weight-light text-center">
                    High of {this.state.dailyHumidityData.high}%
                  </span>
                </div>
                <div className="pl-1 mt-2">
                  <HumidityChart humidity={this.state.dailyHumidityData} />
                </div>
              </div>
            ) : null}
          </div>
          <div className="col-12 col-lg-6 m-2 m-lg-0 justifiy-content-center align-items-center p-0">
            {this.state.dailyWindData ? (
              <div>
                <div className="text-center">
                  <h3 className="pb-0 mb-0">Wind Speeds</h3>
                  <span className="pt-0 pb-2 text-weight-light text-center">
                    Speeds up to {this.state.dailyWindData.high}{" "}
                    {this.props.metric ? "m/s" : "mph"}
                  </span>
                </div>
                <div className="pl-1 mt-2">
                  <WindSpeedChart windSpeed={this.state.dailyWindData} />
                </div>
              </div>
            ) : null}
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
)(AdvancedViews);
