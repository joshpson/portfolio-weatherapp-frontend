import { token, url } from "./index";
import { getUserLocationWeather } from "./location";
import { push } from "connected-react-router";

const logoutUser = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT_USER" });
  dispatch(push("/login"));
};

const loadUser = () => dispatch => {
  if (token()) {
    dispatch({ type: "FETCHING_USER" });
    fetch(`${url}/user`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`
      }
    })
      .then(resp => resp.json())
      .then(user => {
        dispatch({ type: "FETCHED_USER", user });
        user.locations.forEach(location => {
          dispatch(getUserLocationWeather(location));
          dispatch(push("/"));
        });
      });
  }
};

const authenticateUser = userData => dispatch => {
  dispatch({ type: "AUTHENTICATING_USER" });
  fetch(`${url}/user_token`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      auth: userData
    })
  }).then(res => {
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

const postUser = userData => dispatch => {
  fetch(`${url}/users`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      user: userData
    })
  }).then(res => {
    if (res.status === 202) {
      dispatch({ type: "USER_POSTED" });
      dispatch(authenticateUser(userData));
    }
  });
};

export { loadUser, logoutUser, authenticateUser, postUser };
