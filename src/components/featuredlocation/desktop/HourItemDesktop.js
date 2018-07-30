import React from "react";
import Moment from "react-moment";
import { colorHourClass } from "../../../actions/colors";
import { iconHourSrc } from "../../../actions/icons";

import "moment-timezone";

const HourItemDesktop = ({ hour, timezone }) => {
  return (
    <div
      className={
        "card rounded pr-3 pl-3 pb-3 pt-1 m-1 justify-content-left light-shadow " +
        colorHourClass(hour.icon)
      }
    >
      <div className="row  justify-content-left align-items-center">
        <div className="col-auto p-0">
          <img className="detail-icon" src={iconHourSrc(hour.icon)} />
        </div>
        <div className="col-auto p-0">
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
