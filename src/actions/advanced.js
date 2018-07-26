import moment from "moment";

const dailyHumidityData = weather => {
  let humidityArray = [];
  let humidityData = weather.daily.data.slice(0, 7).map(day => {
    let date = moment
      .unix(day.time)
      .utc()
      .format("ddd");
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

const windSpeedData = weather => {
  let windSpeedArray = [];
  let windSpeedData = weather.daily.data.slice(0, 7).map(day => {
    let date = moment
      .unix(day.time)
      .utc()
      .format("ddd");
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
    tempObject["day"] = moment
      .unix(day.time)
      .utc(weather.timezone)
      .format("ddd");
    tempObject["TempHigh"] = Math.round(day.temperatureHigh);
    tempObject["HighTime"] = moment
      .unix(day.temperatureHighTime)
      .utc(weather.timezone)
      .format("h:mm A");
    tempObject["TempLow"] = Math.round(day.temperatureLow);
    tempObject["LowTime"] = moment
      .unix(day.temperatureLowTime)
      .utc(weather.timezone)
      .format("h:mm A");
    tempObject["FeelsHigh"] = Math.round(day.apparentTemperatureHigh);
    tempObject["FeelsHighTime"] = moment
      .unix(day.apparentTemperatureHighTime)
      .utc(weather.timezone)
      .format("h:mm A");
    tempObject["FeelsLow"] = Math.round(day.apparentTemperatureLow);
    tempObject["FeelsLowTime"] = moment
      .unix(day.apparentTemperatureLowTime)
      .utc(weather.timezone)
      .format("h:mm A");
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

export { dailyHumidityData, windSpeedData, dailyTemperature };
