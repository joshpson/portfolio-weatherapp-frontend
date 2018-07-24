const colorStyles = {
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

export const colorClass = icon => {
  return colorStyles[icon] ? colorStyles[icon] : "cloudy text-light";
};
