import React from "react";
import { connect } from "react-redux";
import { dailyHumidityData } from "../../../actions/advanced";
import HumidityTooltip from "./HumidityTooltip";
import { AreaChart, Area, Tooltip, XAxis, YAxis, ReferenceDot } from "recharts";

class AdvancedViewsDesktop extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <AreaChart
          width={600}
          height={300}
          data={dailyHumidityData(this.props.weather).data}
        >
          <Area
            type="monotone"
            dataKey="humidity"
            stroke="#495960"
            fill="#7f8c8d"
            dot={{ color: "#495960", size: 5 }}
          />

          <XAxis dataKey="day" stroke="#ffff" />

          <YAxis
            dataKey="humidity"
            stroke="#ffff"
            type="number"
            ticks={dailyHumidityData(this.props.weather).ticks}
            domain={[
              dataMin => {
                return dataMin - 10 > 0
                  ? Math.round((dataMin - 10) / 10) * 10
                  : 0;
              },
              dataMax => {
                return dataMax + 10 < 100
                  ? Math.round((dataMax + 10) / 10) * 10
                  : 100;
              }
            ]}
          />
          <Tooltip content={<HumidityTooltip />} />
        </AreaChart>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weather: state.featuredLocation.weather
  };
};

export default connect(
  mapStateToProps,
  null
)(AdvancedViewsDesktop);
