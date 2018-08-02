import React from "react";
import day from "../images/animated/day.svg";

const About = () => {
  return (
    <div className="container">
      <br />
      <h3>Summary</h3>
      <p>
        FreshAir is a weather application built as my final portfolio project at
        Flatiron's web development immersive program in Washington. Weather data
        is provided by the Dark Sky API. The design is mostly copied from the
        excellent{" "}
        <a
          href="https://play.google.com/store/apps/details?id=com.samruston.weather"
          target="_blank"
          rel="noopener noreferrer"
          color="#2980b9"
        >
          Weather Timeline
        </a>{" "}
        for Android - if you like this app please go download Weather Timeline!
      </p>
      <p>
        This is a fully responsive application built from a mobile-first
        perspective. Users can securely create an account and save locations for
        future reference. Locations dynamically display weather data from{" "}
        <a
          href="https://darksky.net/dev"
          target="_blank"
          rel="noopener noreferrer"
          color="#2980b9"
        >
          Dark Sky's API
        </a>, changing color and animations to reflect current/future
        conditions.
      </p>
      <p>
        Please take a look at the{" "}
        <a
          href="https://github.com/joshpson/portfolio-weatherapp-frontend"
          target="_blank"
          rel="noopener noreferrer"
          color="#2980b9"
        >
          frontend
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/joshpson/portfolio-weatherapp-backend"
          target="_blank"
          rel="noopener noreferrer"
          color="#2980b9"
        >
          backend
        </a>{" "}
        repos on github.
        <br />
        <br />
        - Josh Pearson, jpearson846@gmail.com
      </p>
      <h3>Technologies</h3>
      <div>
        <div className="row justify-content-left align-items-center">
          <div className="col-1 align-self-center">
            <img
              src={day}
              className="about-bullet"
              alt="sun-icon-bullet-point"
            />
          </div>
          <div className="col-11 align-self-center">
            FreshAir is a single page responsive application built using Ruby on
            Rails and React.
          </div>
        </div>
        <br />
        <div className="row justify-content-left align-items-center">
          <div className="col-1 align-self-center">
            <img
              src={day}
              className="about-bullet"
              alt="sun-icon-bullet-point"
            />
          </div>
          <div className="col-11 align-self-center">
            Rails handles all API calls, stores user and location data, and
            authenticates users through JWT.
          </div>
        </div>
        <br />
        <div className="row justify-content-left align-items-center">
          <div className="col-1 align-self-center">
            <img
              src={day}
              className="about-bullet"
              alt="sun-icon-bullet-point"
            />
          </div>
          <div className="col-11 align-self-center">
            Location data is created through Google's Place Search and
            Geolocation API. Weather data is retrieved from Dark Sky's API.
          </div>
        </div>
        <br />
        <div className="row justify-content-left align-items-center">
          <div className="col-1 align-self-center">
            <img
              src={day}
              className="about-bullet"
              alt="sun-icon-bullet-point"
            />
          </div>
          <div className="col-11 align-self-center">
            Redux is used to handle state and React Router is used for routes
            management. Connected Router is utilized to link Redux with React
            Router.
          </div>
        </div>
        <br />
        <div className="row justify-content-left align-items-center">
          <div className="col-1 align-self-center">
            <img
              src={day}
              className="about-bullet"
              alt="sun-icon-bullet-point"
            />
          </div>
          <div className="col-11 align-self-center">
            Bootstrap and custom CSS are used on the front-end and Recharts are
            used for the advanced weather charts.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
