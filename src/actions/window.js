const updateWindowSize = width => dispatch => {
  let chartSize = null;
  if (width / 2.5 > 440) {
    chartSize = 440;
  } else if (width < 600) {
    chartSize = width * 0.85;
  } else if (width <= 960) {
    chartSize = width * 0.7;
  } else {
    chartSize = width / 2.5;
  }
  dispatch({ type: "UPDATING_WINDOW_SIZE", width });
  dispatch({ type: "UPDATING_CHART_SIZE", chartSize });
};

export { updateWindowSize };
