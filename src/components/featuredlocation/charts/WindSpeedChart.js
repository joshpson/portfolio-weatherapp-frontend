import React from "react";
import { connect } from "react-redux";
import WindSpeedToolTip from "./WindSpeedToolTip";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

const WindSpeedChart = ({ windSpeed, width, metric }) => {
  return (
    <ResponsiveContainer width={width} height="50%" className="chart-container">
      <AreaChart data={windSpeed.data} margin={{ left: 0, right: 10 }}>
        <Area
          type="monotone"
          dataKey="windSpeed"
          stroke="#9b59b6"
          fill="#9b59b6"
          dot={{ stroke: "white", strokeWidth: 2 }}
        />
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis dataKey="day" stroke="#ffff" />
        <YAxis
          dataKey="windSpeed"
          stroke="#ffff"
          type="number"
          tickFormatter={props => props + `${metric ? "m/s" : "mph"}`}
          ticks={windSpeed.ticks}
          domain={[
            dataMin => {
              return dataMin - 1 > 0 ? Math.round((dataMin - 1) / 10) * 10 : 0;
            },
            dataMax => dataMax + 1
          ]}
        />
        <Tooltip content={<WindSpeedToolTip />} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const mapStateToProps = state => {
  return {
    metric: state.currentUser.metric,
    width: state.chartSize
  };
};

export default connect(
  mapStateToProps,
  null
)(WindSpeedChart);
