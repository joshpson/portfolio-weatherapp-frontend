const featuredLocation = (oldfeaturedLocation = null, action) => {
  switch (action.type) {
    case "FETCHED_LOCATION":
      return action.location;
    default:
      return null;
  }
  return oldfeaturedLocation;
};

export default featuredLocation;
