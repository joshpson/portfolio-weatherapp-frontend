const url = "http://localhost:3000/api/v1/";

const token = () => {
  return localStorage.getItem("token");
};

const logoutUser = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT_USER" });
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
      .then(user => dispatch({ type: "FETCHED_USER", user }));
  }
};

export { loadUser, logoutUser };
