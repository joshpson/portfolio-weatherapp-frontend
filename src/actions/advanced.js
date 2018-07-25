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
  console.log(tickArray);
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
  console.log(tickArray);
  return {
    high: high,
    low: low,
    ticks: tickArray,
    data: windSpeedData
  };
};

export { dailyHumidityData, windSpeedData };
