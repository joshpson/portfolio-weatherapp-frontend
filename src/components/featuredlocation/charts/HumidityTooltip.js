import React from "react";

class HumidityToolTip extends React.Component {
  render() {
    const { active } = this.props;
    if (active) {
      const { payload, label } = this.props;
      return (
        <div className="custom-tooltip">
          {`${label}: ${payload[0].value}% Humidity`}
        </div>
      );
    }

    return null;
  }
}

export default HumidityToolTip;
