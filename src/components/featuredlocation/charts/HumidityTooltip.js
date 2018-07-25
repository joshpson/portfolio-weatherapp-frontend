import React from "react";

class CustomTooltip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { active } = this.props;
    if (active) {
      const { payload, label } = this.props;
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}% Humidity`}</p>
        </div>
      );
    }

    return null;
  }
}

export default CustomTooltip;
