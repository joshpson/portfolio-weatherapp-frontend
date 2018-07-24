import React from "react";
import { connect } from "react-redux";
import DayItemMobile from "./DayItemMobile";

const SevenDaysMobile = ({ weather }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 p-1">
        <div className="card border-0 main-background">
          <div className="card-body p-0">
            <div
              data-toggle="collapse"
              href="#dailyWeatherList"
              className="p-3"
            >
              <h5 className="card-title pl-4">Next 7 Days</h5>
              <div className="card-text pl-4">{weather.daily.summary}</div>
            </div>
            <ul
              className="list-group list-group-flush p-0 m-0 collapse show"
              id="dailyWeatherList"
            >
              {weather.daily.data.map((day, index) => {
                if (index > 0) {
                  return (
                    <DayItemMobile
                      day={day}
                      index={index}
                      key={day.time}
                      timezone={weather.timezone}
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
