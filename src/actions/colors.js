const colorHourStyles = {
  "clear-day": "sunny text-light",
  "clear-night": "night text-light",
  rain: "rain text-light",
  snow: "snow text-dark",
  sleet: "snow text-dark",
  wind: "cloudy text-light",
  fog: "cloudy text-light",
  cloudy: "cloudy text-light",
  "partly-cloudy-day": "cloudy text-light",
  "partly-cloudy-night": "night text-light"
};

const colorDayStyles = {
  "clear-day": "sunny text-light",
  "clear-night": "night text-light",
  rain: "rain text-light",
  snow: "snow text-dark",
  sleet: "snow text-dark",
  wind: "cloudy text-light",
  fog: "cloudy text-light",
  cloudy: "cloudy text-light",
  "partly-cloudy-day": "cloudy text-light",
  "partly-cloudy-night": "cloudy text-light"
};

export const colorHourClass = icon => {
  return colorHourStyles[icon] ? colorHourStyles[icon] : "cloudy text-light";
};

export const colorDayClass = icon => {
  return colorDayStyles[icon] ? colorDayStyles[icon] : "cloudy text-light";
};
