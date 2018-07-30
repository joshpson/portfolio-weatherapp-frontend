import React from "react";
import Moment from "react-moment";
import { colorClass } from "../../../actions/colors";
import "moment-timezone";

const HourItemDesktop = ({ hour, timezone }) => {
  return (
    <div
      className={
        "card rounded p-3 m-1 justify-content-left light-shadow " +
        colorClass(hour.icon)
      }
    >
      <div className="row ">
        <div className="col-auto">
          <i className={"pr-2 detail-icon wi wi-forecast-io-" + hour.icon} />
          <span className="hour-card-temp-details">
            {Math.round(hour.temperature)}
            <i className="wi wi-degrees" />
          </span>
        </div>
      </div>
      <Moment unix format="h A z" className="font-weight-bold" tz={timezone}>
        {hour.time}
      </Moment>
      <div>{hour.summary}</div>
    </div>
  );
};

export default HourItemDesktop;
