const fetchingUser = (oldfetchingUser = false, action) => {
  switch (action.type) {
    case "FETCHING_USER":
      return true;
    case "FETCHED_USER":
      return false;
    case "USER_LOGIN_FAILED":
      return false;
    default:
      return oldfetchingUser;
  }
};

export default fetchingUser;
