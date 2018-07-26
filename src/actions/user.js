import { token, url } from "./index";
import { getUserLocationWeather } from "./location";
import { push } from "connected-react-router";

//Functions

function postUserAuthentication(userData) {
  return fetch(`${url}/user_token`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      auth: userData
    })
  });
}

function getUser() {
  return fetch(`${url}/user`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token()}`
    }
  });
}

function postUser(userData) {
  return fetch(`${url}/users`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      user: userData
    })
  });
}

function patchUser(userData) {
  return fetch(`${url}/users/${userData.id}`, {
    method: "PATCH",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      user: userData
    })
  });
}

//Actions

const logoutUser = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT_USER" });
  dispatch(push("/login"));
};

const loadUser = () => dispatch => {
  if (token()) {
    dispatch({ type: "FETCHING_USER" });
    getUser().then(resp => {
      if (resp.status === 200) {
        resp.json().then(user => {
          dispatch({ type: "FETCHED_USER", user });
          if (user.locations.length) {
            dispatch({ type: "FETCHING_USER_LOCATIONS" });
            user.locations.forEach(location => {
              dispatch(getUserLocationWeather(location.id));
            });
          } else {
            dispatch(push("/new-location"));
          }
        });
      } else {
        dispatch({ type: "USER_LOGIN_FAILED" });
      }
    });
  }
};

const editUser = userData => dispatch => {
  dispatch({ type: "PATCHING_USER" });
  patchUser(userData).then(resp => {
    resp.json().then(user => {
      dispatch({ type: "USER_PATCHED", user });
      dispatch({ type: "UPDATING_USER_LOCATIONS" });
      user.locations.forEach(location => {
        dispatch(getUserLocationWeather(location.id));
      });
    });
  });
};

const authenticateUser = userData => dispatch => {
  dispatch({ type: "AUTHENTICATING_USER" });
  postUserAuthentication(userData).then(res => {
    if (res.status === 201) {
      res.json().then(token => {
        localStorage.setItem("token", token.jwt);
        dispatch({ type: "USER_AUTHENTICATED" });
        dispatch(loadUser());
      });
    } else {
      dispatch({ type: "USER_AUTHENTICATION_FAILED" });
    }
  });
};

const saveUser = userData => dispatch => {
  postUser(userData).then(res => {
    if (res.status === 202) {
      dispatch({ type: "USER_POSTED" });
      dispatch(authenticateUser(userData));
    } else {
      dispatch({ type: "USER_POST_FAILED" });
    }
  });
};

export { loadUser, logoutUser, authenticateUser, saveUser, editUser };
