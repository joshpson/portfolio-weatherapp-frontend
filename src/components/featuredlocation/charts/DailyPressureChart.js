import React from "react";
import { connect } from "react-redux";

import DailyPressureToolTip from "./DailyPressureToolTip";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

const DailyPressureChart = ({ pressure, width }) => {
  return (
    <ResponsiveContainer width={width} height="50%" className="chart-container">
      <AreaChart data={pressure.data} margin={{ left: 0, right: 10 }}>
        <Area
          type="monotone"
          dataKey="pressure"
          stroke="#16a085"
          fill="#16a085"
          dot={{ stroke: "white", strokeWidth: 2 }}
        />
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis dataKey="day" stroke="#ffff" />
        <YAxis
          dataKey="pressure"
          stroke="#ffff"
          type="number"
          ticks={pressure.ticks}
          tickFormatter={props => props}
          domain={[
            dataMin => {
              return dataMin - 2;
            },
            dataMax => {
              return dataMax + 2;
            }
          ]}
        />
        <Tooltip content={<DailyPressureToolTip />} />
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
)(DailyPressureChart);
