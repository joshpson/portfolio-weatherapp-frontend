import { token, url } from "./index";

const getUserLocationWeather = locations => dispatch => {
  if (token()) {
    dispatch({ type: "FETCHING_LOCATIONS" });
    locations.forEach(location => {
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

const searchNewLocation = query => dispatch => {
  dispatch({ type: "FETCHING_NEW_LOCATION_SEARCH_RESULTS" });
  fetch(`${url}/search_cities?query=${query}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token()}`
    }
  })
    .then(resp => resp.json())
    .then(results => {
      dispatch({ type: "FETCHED_NEW_LOCATION_SEARCH_RESULTS", results });
    });
};

export { getUserLocationWeather, searchNewLocation };
