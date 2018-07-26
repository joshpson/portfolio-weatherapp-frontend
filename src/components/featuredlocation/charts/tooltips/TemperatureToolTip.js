import React from "react";

const TemperatureToolTip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">{`${label}: ${
        payload[0].payload.description
      }`}</div>
    );
  }
  return null;
};

export default TemperatureToolTip;
