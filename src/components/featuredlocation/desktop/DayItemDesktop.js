import React from "react";
import Moment from "react-moment";

import { colorClass } from "../../../actions/colors";

const DayItemDesktop = ({ day, timezone }) => {
  return (
    <div
      className={
        "card rounded p-3 m-1 justify-content-left light-shadow " +
        colorClass(day.icon)
      }
    >
      <div className="row ">
        <div className="col-auto">
          <i className={"pr-2 detail-icon wi wi-forecast-io-" + day.icon} />
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
