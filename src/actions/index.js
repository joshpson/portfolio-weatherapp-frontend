// only has access to what's passed in
const url = "http://localhost:3000/api/v1/users/1";

const loadUser = () => dispatch => {
  dispatch({ type: "FETCHING_PROFILE" });
  fetch(url)
    .then(resp => resp.json())
    .then(user => dispatch({ type: "FETCHED_PROFILES", user }));
};

export { loadUser };
