import cloudyDayGrey from "../images/animated/cloudy-day-grey.svg";
import rainyBlue from "../images/animated/rainy-blue.svg";
import day from "../images/animated/day.svg";
import cloudy from "../images/animated/cloudy.svg";
import cloudyNight from "../images/animated/cloudy-night-3.svg";
import snowy from "../images/animated/snowy-6.svg";
import night from "../images/animated/night.svg";

const animatedDayIcons = {
  "clear-day": day,
  "clear-night": night,
  rain: rainyBlue,
  snow: snowy,
  sleet: snowy,
  wind: cloudy,
  fog: cloudy,
  cloudy: cloudy,
  "partly-cloudy-day": cloudyDayGrey,
  "partly-cloudy-night": cloudyDayGrey
};

const animatedHourIcons = {
  "clear-day": day,
  "clear-night": night,
  rain: rainyBlue,
  snow: snowy,
  sleet: snowy,
  wind: cloudy,
  fog: cloudy,
  cloudy: cloudy,
  "partly-cloudy-day": cloudyDayGrey,
  "partly-cloudy-night": cloudyNight
};

export const iconDaySrc = icon => {
  return animatedDayIcons[icon] ? animatedDayIcons[icon] : cloudyDayGrey;
};

export const iconHourSrc = icon => {
  return animatedHourIcons[icon] ? animatedHourIcons[icon] : cloudyDayGrey;
};
