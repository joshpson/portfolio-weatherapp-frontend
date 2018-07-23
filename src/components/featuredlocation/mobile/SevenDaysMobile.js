import React from "react";
import { connect } from "react-redux";
import DayItemMobile from "./DayItemMobile";

const SevenDaysMobile = ({ weather }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 p-1">
        <div className="card border-0 bg-dark">
          <div className="card-body p-0">
            <div
              data-toggle="collapse"
              href="#dailyWeatherList"
              className="p-3"
            >
              <h5 className="card-title">Next 7 Days</h5>
              <div className="card-text">{weather.daily.summary}</div>
            </div>
            <ul
              className="list-group list-group-flush p-0 m-0 collapse show"
              id="dailyWeatherList"
            >
              {weather.daily.data.map((day, index) => {
                return <DayItemMobile day={day} index={index} key={day.time} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    weather: state.featuredLocation.weather
  };
};

export default connect(
  mapStateToProps,
  null
)(SevenDaysMobile);
