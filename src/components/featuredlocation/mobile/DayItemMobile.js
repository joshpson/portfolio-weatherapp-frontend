import React from "react";
import Moment from "react-moment";
import { colorDayClass } from "../../../actions/colors";
import { iconDaySrc } from "../../../actions/icons";

import "../../../style/weather-icons.min.css";

const DayItemMobile = ({ day, index, timezone }) => {
  return (
    <li className={"pl-2 list-group-item " + colorDayClass(day.icon)}>
      <div className="row justify-content-left align-items-center">
        <div className="col-3 align-self-center">
          <div>
            <img className="summary-icon-mobile" src={iconDaySrc(day.icon)} />
          </div>
        </div>
        <div className="col-9">
          <div className="row justify-content-between">
            <div className="col-6 p-0">
              <Moment
                unix
                format="dddd"
                className="font-weight-bold"
                tz={timezone}
              >
                {day.sunriseTime}
              </Moment>
            </div>
            <div className="col-6 font-weight-bold text-right">
              <div>
                {Math.round(day.temperatureLow)}
                <i className="wi wi-degrees" />{" "}
                {Math.round(day.temperatureHigh)}
                <i className="wi wi-degrees" />
              </div>
            </div>
          </div>
          <div className="row p-0">
            <span className="detail-text-mobile">{day.summary}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default DayItemMobile;
