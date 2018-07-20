const featuredLocation = (oldfeaturedLocation = null, action) => {
  switch (action.type) {
    case "FETCHED_LOCATION":
      return action.location;
  }
  return oldfeaturedLocation;
};

export default featuredLocation;
