import React from "react";

class TemperatureToolTip extends React.Component {
  render() {
    const { active } = this.props;
    if (active) {
      const { payload, label } = this.props;
      return (
        <div className="custom-tooltip">
          {`${label}: ${payload[0].payload.description}`}
        </div>
      );
    }

    return null;
  }
}

export default TemperatureToolTip;
