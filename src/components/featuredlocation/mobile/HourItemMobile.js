import React from "react";
import HourDetailsMobile from "./HourDetailsMobile";
import Moment from "react-moment";
import { colorClass } from "../../../actions/colors";

const HourItemMobile = ({ hour, index, metric, timezone }) => {
  return (
    <div
      className={"list-group-item  " + colorClass(hour.icon)}
      data-toggle="collapse"
      href={`#hour${index}Details`}
    >
      <div className="row">
        <div className="d-flex col-3 justify-content-center pl-0">
          <div className="d-flex justify-content-center align-items-center">
            <i
              className={"daily-summary-icon wi wi-forecast-io-" + hour.icon}
            />
          </div>
        </div>
        <div className="col-9">
          <div className="row justify-content-between">
            <div className="col-6 p-0">
              <Moment
                unix
                format="h:mm A (ddd)"
                className="font-weight-bold"
                tz={timezone}
              >
                {hour.time}
              </Moment>
            </div>
            <div className="col-6 font-weight-bold text-right ">
              <div>
                {Math.round(hour.temperature)}
                <i className="wi wi-degrees" />
              </div>
            </div>
          </div>
          <div className="row pt-0 pl-0 justify-content-between daily-summary-text">
            <div className="col-5 p-0">{hour.summary}</div>
            <div className="col-7 pb-0 text-right">
              {hour.precipType ? (
                <span className="text-capitalize">
                  {Math.round(hour.precipProbability * 100)}% {hour.precipType}
                  {" - "}
                </span>
              ) : null}
              Feels {Math.round(hour.apparentTemperature)}
              <i className="wi wi-degrees" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid collapse pt-3 pr-0 pl-0"
        id={`hour${index}Details`}
      >
        <HourDetailsMobile data={hour} metric={metric} />
      </div>
    </div>
  );
};

export default HourItemMobile;
