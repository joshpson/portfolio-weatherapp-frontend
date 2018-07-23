const currentUser = (oldCurrentUser = null, action) => {
  switch (action.type) {
    case "FETCHED_USER":
      return action.user;
    case "USER_PATCHED":
      return action.user;
    case "FETCHING_USER":
      return null;
    case "AUTHENTICATING_USER":
      return null;
    case "LOGOUT_USER":
      return null;
    default:
      return oldCurrentUser;
  }
};

export default currentUser;
