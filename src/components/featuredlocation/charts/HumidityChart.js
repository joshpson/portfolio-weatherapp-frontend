import React from "react";
import HumidityTooltip from "./HumidityTooltip";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceDot
} from "recharts";

const HumidityChart = ({ humidity, width }) => {
  return (
    <ResponsiveContainer width={width} height="50%" className="chart-container">
      <AreaChart data={humidity.data}>
        <Area
          type="monotone"
          dataKey="humidity"
          stroke="#c0392b"
          fill="#c0392b"
          dot={{ stroke: "white", strokeWidth: 2 }}
        />
        <XAxis dataKey="day" stroke="#ffff" />
        <YAxis
          width={50}
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
            "dataMax"
          ]}
        />
        <Tooltip content={<HumidityTooltip />} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default HumidityChart;
