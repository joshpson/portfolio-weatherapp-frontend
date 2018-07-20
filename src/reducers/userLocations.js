const userLocations = (oldUserLocations = [], action) => {
  switch (action.type) {
    case "FETCHED_USER_LOCATION":
      return [...oldUserLocations, action.location];
    case "LOGOUT_USER":
      return [];
  }
  return oldUserLocations;
};

export default userLocations;
