import cloudyDayGrey from "../images/animated/cloudy-day-grey.svg";
import cloudyDayDark from "../images/animated/cloudy-day-dark.svg";
import rainyBlue from "../images/animated/rainy-blue.svg";
import rainyDark from "../images/animated/rainy-dark.svg";
import day from "../images/animated/day.svg";
import cloudyGrey from "../images/animated/cloudy-grey.svg";
import cloudyDark from "../images/animated/cloudy-dark.svg";
import cloudyNight from "../images/animated/cloudy-night-night.svg";
import cloudyNightDark from "../images/animated/cloudy-night-dark.svg";
import snowy from "../images/animated/snowy-white.svg";
import snowyDark from "../images/animated/snowy-dark.svg";
import night from "../images/animated/night.svg";

const animatedDayIcons = {
  "clear-day": day,
  "clear-night": night,
  rain: rainyBlue,
  snow: snowy,
  sleet: snowy,
  wind: cloudyGrey,
  fog: cloudyGrey,
  cloudy: cloudyGrey,
  "partly-cloudy-day": cloudyDayGrey,
  "partly-cloudy-night": cloudyDayGrey
};

const animatedHourIcons = {
  "clear-day": day,
  "clear-night": night,
  rain: rainyBlue,
  snow: snowy,
  sleet: snowy,
  wind: cloudyGrey,
  fog: cloudyGrey,
  cloudy: cloudyGrey,
  "partly-cloudy-day": cloudyDayGrey,
  "partly-cloudy-night": cloudyNight
};

const animatedNavbarIcons = {
  "clear-day": day,
  "clear-night": night,
  rain: rainyDark,
  snow: snowyDark,
  sleet: snowyDark,
  wind: cloudyDark,
  fog: cloudyDark,
  cloudy: cloudyDark,
  "partly-cloudy-day": cloudyDayDark,
  "partly-cloudy-night": cloudyNightDark
};

export const iconDaySrc = icon => {
  return animatedDayIcons[icon] ? animatedDayIcons[icon] : cloudyDayGrey;
};

export const iconHourSrc = icon => {
  return animatedHourIcons[icon] ? animatedHourIcons[icon] : cloudyDayGrey;
};

export const iconNavbarSrc = icon => {
  return animatedNavbarIcons[icon] ? animatedNavbarIcons[icon] : cloudyDayGrey;
};
