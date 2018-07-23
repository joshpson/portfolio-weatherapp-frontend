const userLocations = (oldUserLocations = [], action) => {
  switch (action.type) {
    case "FETCHED_USER_LOCATION":
      return [...oldUserLocations, action.location];
    case "LOGOUT_USER":
      return [];
    case "LOCATION_DELETED":
      return oldUserLocations.filter(
        location => location.location.id !== action.id
      );
    default:
      return oldUserLocations;
  }
};

export default userLocations;
