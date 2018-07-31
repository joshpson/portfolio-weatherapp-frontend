const chartSize = (oldChartSize = null, action) => {
  switch (action.type) {
    case "UPDATING_CHART_SIZE":
      return action.chartSize;
    default:
      return oldChartSize;
  }
};

export default chartSize;
