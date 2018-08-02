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
    case "USER_POST_FAILED":
      return { ...oldErrors, login: action.errors };
    case "CLEAR_ERRORS":
      return { ...initialErrors };
    case "USER_AUTHENTICATED":
      return { ...oldErrors, login: null };
    case "USER_POSTED":
      return { ...oldErrors, login: null };
    default:
      return oldErrors;
  }
};

export default errors;
