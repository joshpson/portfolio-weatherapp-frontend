import moment from "moment";

function formatDay(day, timezone) {
  return moment
    .unix(day)
    .utc(timezone)
    .format("ddd");
}

function formatTime(day, timezone) {
  return moment
    .unix(day)
    .utc(timezone)
    .format("h:mm A");
}

const dailyHumidityData = weather => {
  let humidityArray = [];
  let humidityData = weather.daily.data.slice(0, 7).map(day => {
    let date = formatDay(day.time, weather.timezone);
    let humidity = Math.round(day.humidity * 100);
    humidityArray.push(humidity);
    return { day: date, humidity: humidity };
  });
  let high = Math.max(...humidityArray);
  let low = Math.min(...humidityArray);
  let roundedMin = Math.floor(low / 10) * 10;
  let roundedMax = Math.ceil(high / 10) * 10;
  let tickArray = [];
  for (let i = roundedMin; i <= roundedMax; i += 10) {
    tickArray.push(i);
  }
  return {
    high: high,
    low: low,
    ticks: tickArray,
    data: humidityData
  };
};

const dailyPressureData = weather => {
  let pressureArray = [];
  let pressureData = weather.daily.data.slice(0, 7).map(day => {
    let date = formatDay(day.time, weather.timezone);
    let pressure = Math.round(day.pressure);
    pressureArray.push(pressure);
    return { day: date, pressure: pressure };
  });
  let high = Math.max(...pressureArray);
  let low = Math.min(...pressureArray);
  let tickArray = [];
  for (let i = low - 2; i <= high; i += 1) {
    tickArray.push(i);
  }
  return {
    high: high,
    low: low,
    ticks: tickArray,
    data: pressureData
  };
};

const windSpeedData = weather => {
  let windSpeedArray = [];
  let windSpeedData = weather.daily.data.slice(0, 7).map(day => {
    let date = formatDay(day.time, weather.timezone);

    windSpeedArray.push(day.windSpeed);
    return { day: date, windSpeed: day.windSpeed };
  });
  let high = Math.max(...windSpeedArray);
  let low = Math.min(...windSpeedArray);
  let roundedMin = Math.floor(low);
  let roundedMax = Math.ceil(high);
  let tickArray = [];
  for (let i = roundedMin; i <= roundedMax; i += 1) {
    tickArray.push(i);
  }
  return {
    high: high,
    low: low,
    ticks: tickArray,
    data: windSpeedData
  };
};

const dailyTemperature = weather => {
  let tempsArray = [];
  let tempData = weather.daily.data.slice(0, 7).map(day => {
    tempsArray.push(day.temperatureHigh);
    tempsArray.push(day.temperatureLow);
    let tempObject = {};
    tempObject["day"] = formatDay(day.time, weather.timezone);
    tempObject["TempHigh"] = Math.round(day.temperatureHigh);
    tempObject["HighTime"] = formatTime(
      day.temperatureHighTime,
      weather.timezone
    );
    tempObject["TempLow"] = Math.round(day.temperatureLow);
    tempObject["LowTime"] = formatTime(
      day.temperatureLowTime,
      weather.timezone
    );
    tempObject["FeelsHigh"] = Math.round(day.apparentTemperatureHigh);
    tempObject["FeelsHighTime"] = formatTime(
      day.apparentTemperatureHighTime,
      weather.timezone
    );
    tempObject["FeelsLow"] = Math.round(day.apparentTemperatureLow);
    tempObject["FeelsLowTime"] = formatTime(
      day.apparentTemperatureLowTime,
      weather.timezone
    );
    tempObject["description"] = `High of ${tempObject["TempHigh"]} at ${
      tempObject["HighTime"]
    } and a low of ${tempObject["TempLow"]} at ${
      tempObject["LowTime"]
    }. (Feels: ${tempObject["FeelsHigh"]}, ${tempObject["FeelsLow"]})`;
    return tempObject;
  });
  let high = Math.max(...tempsArray);
  let low = Math.min(...tempsArray);
  let roundedMin = Math.floor(low / 10) * 10;
  let roundedMax = Math.ceil(high / 10) * 10;
  let tickArray = [];
  for (let i = roundedMin; i <= roundedMax; i += 10) {
    tickArray.push(i);
  }
  return { high: high, low: low, ticks: tickArray, data: tempData };
};

export {
  dailyHumidityData,
  windSpeedData,
  dailyTemperature,
  dailyPressureData
};
