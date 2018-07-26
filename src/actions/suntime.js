const sunTime = (currently, today, tomorrow) => {
  if (currently.time < today.sunriseTime) {
    return { type: "Sunrise", time: today.sunriseTime };
  } else if (currently.time < today.sunsetTime) {
    return { type: "Sunset", time: today.sunsetTime };
  } else {
    return { type: "Sunrise", time: tomorrow.sunriseTime };
  }
};

export { sunTime };
