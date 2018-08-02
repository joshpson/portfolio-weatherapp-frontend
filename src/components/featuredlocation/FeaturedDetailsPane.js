import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import Octicon, { Eye } from "@githubprimer/octicons-react";
import { cardinalDirection } from "../../actions/direction";
import { sunTime } from "../../actions/suntime";
import DetailsIcon from "./DetailsIcon";
import { phaseCalculator } from "../../actions/moon";

const FeaturedDetailsPane = ({
  currently,
  today,
  tomorrow,
  metric,
  mobile,
  timezone
}) => {
  return (
    <div className="row justify-content-between justify-content-md-center no-gutters text-center">
      {!mobile ? <div className="col-1" /> : null}
      <DetailsIcon
        iconClass="wi-umbrella"
        description="Precip"
        information={[Math.round(currently.precipProbability), "%"]}
      />
      <DetailsIcon
        iconClass="wi-windy"
        description="Wind"
        information={[
          Math.round(currently.windSpeed),
          metric ? " m/s" : " mph"
        ]}
      />
      <DetailsIcon
        iconClass={"wi-wind towards-" + currently.windBearing + "-deg"}
        description="Direction"
        information={cardinalDirection(currently.windBearing)}
      />
      <DetailsIcon
        iconClass="wi-thermometer"
        description="Feels"
        information={[
          Math.round(currently.apparentTemperature),
          <i className="wi wi-degrees" key="degrees" />
        ]}
      />
      <DetailsIcon
        iconClass="wi-barometer"
        description="Pressure"
        information={[Math.round(currently.pressure), " MB"]}
      />
      {!mobile ? <div className="col-1" /> : null}
      {!mobile ? <div className="col-1" /> : null}
      <DetailsIcon
        iconClass="wi-humidity"
        description="Humidity"
        information={[Math.round(currently.humidity * 100), "%"]}
      />
      <div className="col-3 col-md-2 p-2">
        <Octicon size="medium" icon={Eye} />
        <br />
        <div className="featured-detail-text pt-1">
          <span className="font-weight-bold">Visibility</span>
          <br />
          {Math.round(currently.visibility)} {metric ? "km" : "mi"}
        </div>
      </div>
      {!mobile ? (
        <DetailsIcon
          iconClass="wi-day-sunny"
          description="UV Index"
          information={currently.uvIndex}
        />
      ) : null}
      <DetailsIcon
        iconClass={sunTime(currently, today, tomorrow).class}
        description={sunTime(currently, today, tomorrow).type}
        information={[
          <Moment format="h:mm A" key="momentTime" unix tz={timezone}>
            {sunTime(currently, today, tomorrow).time}
          </Moment>
        ]}
      />
      {!mobile ? (
        <DetailsIcon
          iconClass={phaseCalculator(today.moonPhase).className}
          description="Lunar"
          information={phaseCalculator(today.moonPhase).description}
        />
      ) : null}
      {!mobile ? <div className="col-1" /> : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    timezone: state.featuredLocation.weather.timezone,
    currently: state.featuredLocation.weather.currently,
    today: state.featuredLocation.weather.daily.data[0],
    tomorrow: state.featuredLocation.weather.daily.data[1],
    metric: state.currentUser.metric,
    mobile: state.windowSize < 767
  };
};

export default connect(
  mapStateToProps,
  null
)(FeaturedDetailsPane);
