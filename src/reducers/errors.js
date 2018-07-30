const initialErrors = {
  login: null,
  location: null
};

const errors = (oldErrors = initialErrors, action) => {
  switch (action.type) {
    case "USER_AUTHENTICATION_FAILED":
      return { ...oldErrors, login: "Invalid login credentials" };
    case "FEATURED_LOCATION_FETCH_FAILED":
      return { ...oldErrors, location: "Location not found" };
    default:
      return initialErrors;
  }
};

export default errors;
