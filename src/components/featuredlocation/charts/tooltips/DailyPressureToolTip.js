import React from "react";

const DailyPressureToolTip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">{`${label}: ${payload[0].value} mb`}</div>
    );
  }
  return null;
};

export default DailyPressureToolTip;
