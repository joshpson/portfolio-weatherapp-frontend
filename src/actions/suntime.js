const sunTime = (currently, today, tomorrow) => {
  if (currently.time < today.sunriseTime) {
    return { type: "Sunrise", time: today.sunriseTime, class: "wi-sunrise" };
  } else if (currently.time < today.sunsetTime) {
    return { type: "Sunset", time: today.sunsetTime, class: "wi-sunset" };
  } else {
    return { type: "Sunrise", time: tomorrow.sunriseTime, class: "wi-sunrise" };
  }
};

export { sunTime };
