import moment from "moment";

const dailyHumidityData = weather => {
  let ticks = [];
  let humidityData = weather.daily.data.slice(0, 7).map(day => {
    let date = moment
      .unix(day.time)
      .utc()
      .format("ddd");
    let humidity = Math.round(day.humidity * 100);
    ticks.push(humidity);
    return { day: date, humidity: humidity };
  });
  let roundedMin = Math.floor(Math.min(...ticks) / 10) * 10;
  let roundedMax = Math.ceil(Math.max(...ticks) / 10) * 10;
  let tickArray = [];
  for (let i = roundedMin; i <= roundedMax; i += 10) {
    tickArray.push(i);
  }
  console.log(tickArray);
  return {
    ticks: tickArray,
    data: humidityData
  };
};

export { dailyHumidityData };
