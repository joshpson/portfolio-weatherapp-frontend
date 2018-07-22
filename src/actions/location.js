import { token, url } from "./index";
import { push } from "connected-react-router";

//Functions
function getLocation(id) {
  return fetch(`${url}/locations/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token()}`
    }
  });
}

function postLocation(locationData) {
  return fetch(`${url}/locations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token()}`
    },
    body: JSON.stringify(locationData)
  });
}

function googleSearchNewLocation(query) {
  return fetch(`${url}/search_cities?query=${query}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token()}`
    }
  });
}

//Actions
const setFeaturedLocation = id => dispatch => {
  dispatch({ type: "FETCHING_LOCATION" });
  getLocation(id).then(resp => {
    if (resp.status === 200) {
      resp.json().then(location => {
        dispatch({ type: "FEATURED_LOCATION", location });
      });
    } else {
      dispatch({ type: "LOACTION_FETCH_FAILED" });
    }
  });
};

const clearFeaturedLocation = () => dispatch => {
  dispatch({ type: "CLEAR_FEATURED_LOCATION" });
};

const getUserLocationWeather = id => dispatch => {
  dispatch({ type: "FETCHING_LOCATION" });
  getLocation(id).then(resp => {
    if (resp.status === 200) {
      resp.json().then(location => {
        dispatch({ type: "FETCHED_USER_LOCATION", location });
      });
    } else {
      dispatch({ type: "LOACTION_FETCH_FAILED" });
    }
  });
};

const saveLocation = locationData => dispatch => {
  postLocation(locationData).then(resp => {
    if (resp.status === 200) {
      resp.json().then(json => {
        dispatch({ type: "LOCATION_POSTED" });
        dispatch(getUserLocationWeather(json.location.id));
        dispatch(push("/"));
      });
    } else {
      dispatch({ type: "LOACTION_FETCH_FAILED" });
    }
  });
};

const searchNewLocation = query => dispatch => {
  dispatch({ type: "FETCHING_NEW_LOCATION_SEARCH_RESULTS" });
  googleSearchNewLocation(query).then(resp => {
    if (resp.status === 200) {
      resp.json().then(results => {
        dispatch({ type: "FETCHED_NEW_LOCATION_SEARCH_RESULTS", results });
      });
    } else {
      dispatch({ type: "LOACTION_SEARCH_FAILED" });
    }
  });
};

//Export

export {
  getUserLocationWeather,
  searchNewLocation,
  saveLocation,
  setFeaturedLocation,
  clearFeaturedLocation
};
