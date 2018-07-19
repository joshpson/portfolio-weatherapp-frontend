const userLocations = (oldUserLocations = [], action) => {
  switch (action.type) {
    case "FETCHED_USER_LOCATION":
      return [...oldUserLocations, action.location];
  }
  return oldUserLocations;
};

export default userLocations;
