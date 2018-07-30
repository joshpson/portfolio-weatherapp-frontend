import React from "react";
import Moment from "react-moment";
import { iconDaySrc } from "../../../actions/icons";
import { colorDayClass } from "../../../actions/colors";

const DayItemDesktop = ({ day, timezone }) => {
  return (
    <div
      className={
        "card rounded pr-3 pl-3 pb-3 pt-1 m-1 justify-content-left light-shadow " +
        colorDayClass(day.icon)
      }
    >
      <div className="row justify-content-left align-items-center">
        <div className="col-auto p-0">
          <img className="detail-icon" src={iconDaySrc(day.icon)} />
        </div>
        <div className="col-auto p-0">
          <span className="day-card-temp">
            {Math.round(day.temperatureHigh)}
            <i className="wi wi-degrees" /> {Math.round(day.temperatureLow)}
            <i className="wi wi-degrees" />
          </span>
        </div>
      </div>
      <Moment unix format="dddd" className="font-weight-bold" tz={timezone}>
        {day.time}
      </Moment>
      <div>{day.summary}</div>
    </div>
  );
};

export default DayItemDesktop;
