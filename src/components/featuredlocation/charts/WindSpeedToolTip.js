import React from "react";
import { connect } from "react-redux";

class WindSpeedToolTip extends React.Component {
  render() {
    const { active } = this.props;
    if (active) {
      const { payload, label } = this.props;
      return (
        <div className="custom-tooltip">
          {`${label}: Speeds reaching ${payload[0].value} ${
            this.props.metric ? "m/s" : "mph"
          }`}
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = state => {
  return {
    metric: state.currentUser.metric
  };
};

export default connect(
  mapStateToProps,
  null
)(WindSpeedToolTip);
