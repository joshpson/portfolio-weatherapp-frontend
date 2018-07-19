import { token, url } from "./index";

const getUserLocationWeather = locations => dispatch => {
  if (token()) {
    dispatch({ type: "FETCHING_LOCATIONS" });
    let locationWithWeather = locations.map(location => {
      fetch(`${url}/locations/${location.id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`
        }
      })
        .then(resp => resp.json())
        .then(location => {
          dispatch({ type: "FETCHED_USER_LOCATION", location });
        });
    });
  }
};

export { getUserLocationWeather };
