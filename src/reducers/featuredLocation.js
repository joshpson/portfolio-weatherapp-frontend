const featuredLocation = (oldfeaturedLocation = {}, action) => {
  switch (action.type) {
    case "FEATURED_LOCATION":
      return action.location;
  }
  return oldfeaturedLocation;
};

export default featuredLocation;
