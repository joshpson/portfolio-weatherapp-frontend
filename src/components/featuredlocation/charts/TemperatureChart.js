import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceDot,
  CartesianGrid,
  Line,
  Legend,
  LineChart
} from "recharts";
import TemperatureToolTip from "./TemperatureToolTip";

const TemperatureChart = ({ temperature, width }) => {
  return (
    <ResponsiveContainer width={width} height="50%" className="chart-container">
      <AreaChart data={temperature.data} margin={{ left: -5, right: 10 }}>
        <XAxis dataKey="day" stroke="#ffff" />
        <YAxis
          stroke="#ffff"
          type="number"
          ticks={temperature.ticks}
          domain={[dataMin => dataMin - 5, "dataMax"]}
        />
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <Tooltip content={<TemperatureToolTip />} />
        <Area
          type="monotone"
          dataKey="FeelsHigh"
          stroke="#c0392b"
          fill="#c0392b"
          dot={{ stroke: "white", strokeWidth: 1 }}
        />
        <Area
          type="monotone"
          dataKey="TempHigh"
          stroke="#e74c3c"
          fill="#e74c3c"
          dot={{ stroke: "white", strokeWidth: 1 }}
        />
        <Area
          type="monotone"
          dataKey="TempLow"
          stroke="#2980b9"
          fill="#2980b9"
          dot={{ stroke: "white", strokeWidth: 1 }}
        />

        <Area
          type="monotone"
          dataKey="FeelsLow"
          stroke="#3498db"
          fill="#3498db"
          dot={{ stroke: "white", strokeWidth: 1 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TemperatureChart;
