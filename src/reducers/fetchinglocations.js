const fetchingLocations = (oldfetchingLocations = false, action) => {
  switch (action.type) {
    case "FETCHING_USER_LOCATIONS":
      return true;
    case "FETCHED_USER_LOCATION":
      return false;
    default:
      return oldfetchingLocations;
  }
};

export default fetchingLocations;
