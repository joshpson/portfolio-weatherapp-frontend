import React from "react";
import { connect } from "react-redux";

const WindSpeedToolTip = ({ active, payload, label, metric }) => {
  if (active) {
    return (
      <div className="custom-tooltip">{`${label}: Speeds reaching ${
        payload[0].value
      } ${metric ? "m/s" : "mph"}`}</div>
    );
  }
  return null;
};

const mapStateToProps = state => {
  return {
    metric: state.currentUser.metric
  };
};

export default connect(
  mapStateToProps,
  null
)(WindSpeedToolTip);
