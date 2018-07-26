import React from "react";
import { connect } from "react-redux";

import HumidityTooltip from "./HumidityTooltip";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

const HumidityChart = ({ humidity, width }) => {
  return (
    <ResponsiveContainer width={width} height="50%" className="chart-container">
      <AreaChart data={humidity.data} margin={{ left: -5, right: 10 }}>
        <Area
          type="monotone"
          dataKey="humidity"
          stroke="#e67e22"
          fill="#e67e22"
          dot={{ stroke: "white", strokeWidth: 2 }}
        />
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis dataKey="day" stroke="#ffff" />
        <YAxis
          dataKey="humidity"
          stroke="#ffff"
          type="number"
          ticks={humidity.ticks}
          tickFormatter={props => props + "%"}
          domain={[
            dataMin => {
              return dataMin - 10 > 0
                ? Math.round((dataMin - 10) / 10) * 10
                : 0;
            },
            dataMax => {
              return dataMax + 5;
            }
          ]}
        />
        <Tooltip content={<HumidityTooltip />} />
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
)(HumidityChart);
