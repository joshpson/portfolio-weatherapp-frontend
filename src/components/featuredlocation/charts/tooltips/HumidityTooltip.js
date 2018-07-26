import React from "react";

const HumidityToolTip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">{`${label}: ${
        payload[0].value
      }% Humidity`}</div>
    );
  }
  return null;
};

export default HumidityToolTip;
