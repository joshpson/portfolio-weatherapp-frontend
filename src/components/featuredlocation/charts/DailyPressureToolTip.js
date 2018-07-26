import React from "react";

class DailyPressureToolTip extends React.Component {
  render() {
    const { active } = this.props;
    if (active) {
      const { payload, label } = this.props;
      return (
        <div className="custom-tooltip">{`${label}: ${
          payload[0].value
        } mb`}</div>
      );
    }

    return null;
  }
}

export default DailyPressureToolTip;
